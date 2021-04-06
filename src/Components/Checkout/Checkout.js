import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../App';

const Checkout = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext)
    const {_id} = useParams() ;
    const [totalPrice , setTotalPrice] = useState({});

    useEffect(()=>{
        const url = `https://shrouded-badlands-44210.herokuapp.com/booKById/${_id}`
        fetch(url)
        .then(res => res.json())
        .then(data => setTotalPrice(data))
    } ,[]) ;

    const handleCheckOut = () => {
        const info = {
            name: loggedInUser.name ,
            email: loggedInUser.email ,
            orderName: totalPrice.bookName ,
            price: totalPrice.price,
            date: new Date() 

        }
        console.log(info)
        fetch('http://localhost:7070/orderDetails' ,{
            method: 'POST' ,
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(info)
        })
        .then(res => res.json())
        .then(data => console.log(data))

    }
    return (
        
        <div>
            <div className="container">
            <h2>checkout</h2>
            
            <h3>email: {loggedInUser.email}</h3>
                <div className="card border">
                    <div className="card-body">
                        <div className="row">
                        <div className="col-8">
                            <h5>description</h5>
                        </div>
                        <div className="col-2">
                            <h6>quantity</h6>
                        </div>
                        <div className="col-2">
                            <h6>price</h6>
                        </div>
                        </div>
                        <hr/>
                        <div className="row">
                        <div className="col-8">
                            <h5>{totalPrice.bookName}</h5>
                        </div>
                        <div className="col-2">
                            <h6>1</h6>
                        </div>
                        <div className="col-2">
                            <h6>${totalPrice.price}</h6>
                        </div>
                        </div>
                        <hr/>
                        <div className="row">
                        <div className="col-8">
                            <h5>total</h5>
                        </div>
                        <div className="col-2">
                        </div>
                        <div className="col-2">
                            <h6>${totalPrice.price}</h6>
                        </div>
                        </div>
                    </div>
                </div>
                <button onClick={handleCheckOut} className="btn btn-primary mt-2 float-end">checkOut</button>
            </div>
        </div>    
    );
};

export default Checkout;