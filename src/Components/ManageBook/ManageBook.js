import React, { useEffect, useState } from 'react';
import ManageList from '../ManageList/ManageList';

const ManageBook = () => {
    const [manageBooks, setManageBooks] = useState([]);
    useEffect(() => {
        fetch('https://shrouded-badlands-44210.herokuapp.com/bookList')
            .then(res => res.json())
            .then(data => setManageBooks(data))
    }, [])
    return (
        <div className="container">
            <div>
                <div className="row bg-light p-2 rounded">
                    <div className="col-3">
                        <h6>bookName</h6>
                    </div>
                    <div className="col-3">
                        <p>author</p>
                    </div>
                    <div className="col-3">
                        <p>price</p>
                    </div>
                    <div className="col-3">
                        <h6>action</h6>
                    </div>
                </div>
                <hr />
            </div>
            {
                manageBooks.map(bookList => <ManageList bookList={bookList}></ManageList>)
            }
        </div>
    );
};

export default ManageBook;