import React from 'react';

const ManageList = (props) => {
    const { bookName, author, price, _id} = props.bookList;

    const handleDeleteData = (id) => {
        console.log(id);
        fetch(`https://shrouded-badlands-44210.herokuapp.com/deleted/${_id}` , {
            method: 'DELETE',
        })
        .then(res => res.json())
        .then(data => console.log(data))
    }
    return (
        <div>
            <div className="row">
                <div className="col-3">
                    <h6>{bookName}</h6>
                </div>
                <div className="col-3">
                    <p>{author}</p>
                </div>
                <div className="col-3">
                    <p>${price}</p>
                </div>
                <div className="col-3">
                    <button onClick={() =>handleDeleteData(_id)} className="btn btn-success">delete</button>
                </div>
                <hr />
            </div>
        </div>
    );
};

export default ManageList;