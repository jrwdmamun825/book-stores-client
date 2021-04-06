import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import axios from 'axios';
import { ThemeConsumer } from 'react-bootstrap/esm/ThemeProvider';
const Admin = () => {
    const [imageURL, setImageURL] = useState(null)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        const { bookName,author ,price } = data
        const eventData = {
            bookName: bookName,
            author: author,
            price: Number(price),
            imageURL: imageURL
        }
        const url = `https://shrouded-badlands-44210.herokuapp.com/addBook`
        fetch(url, {
            method: "POST",
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
            body : JSON.stringify(eventData)
        })
        .then(res => res.json())
        .then(data => console.log(data))
        console.log(eventData);
    };
    const handleImageUpload = (e) => {
        console.log(e.target.files[0])
        const imageData = new FormData();
        imageData.set('key', 'f39a16a13cf484a539dfa24db215224b')
        imageData.append('image', e.target.files[0])

        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (response) {
                setImageURL(response.data.data.display_url);
                console.log(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="container mt-5 row" >
            <div className="w-25 col-4 container">
                <div className=" ml-5">
                    <Navbar bg="light" expand="lg">
                        <Nav className="mr-auto">
                            <Nav.Link>
                                <Link to="/"> +Add Book</Link>
                            </Nav.Link>
                            <Nav.Link>
                                <Link to="/manageBook">ManageBook</Link>
                            </Nav.Link>

                        </Nav>
                    </Navbar>
                </div>

            </div>
            <div className="card col-8">
                <div className="card-body row">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="card-body">
                            <h3>add your book</h3>
                            <label>
                                Book Name
                            <input className="form-control mt-2" defaultValue="Book Name" {...register("bookName")} placeholder="Enter book name" />
                            </label>
                            <label>
                                author name:
                                <input className="form-control mt-2" defaultValue="author name" {...register("author")} placeholder="author name" />
                            </label>
                            <label>
                                price:
                                <input className="form-control" defaultValue="price" {...register("price")} placeholder="price" />
                                <input className="form-control" type="file" onChange={handleImageUpload} 
                                />
                            </label>
                            {errors.exampleRequired && <span>This field is required</span>}
                            <br />
                            <input className="btn btn-primary mt-2" type="submit" />
                        </div>
                        {/* errors will return when field validation fails  */}

                    </form>

                </div>

            </div>
        </div >
    );
};

export default Admin;