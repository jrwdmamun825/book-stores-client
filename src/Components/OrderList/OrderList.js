import React from 'react';

const OrderList = (props) => {
    const {name,orderName,email,date} = props.orders ;
    return (
        <div className="container">
        <div className="card border">
            <div className="card-body">
                
            <div className="row">
                    <div className="col-2">
                        <h4>name</h4>
                    </div>
                    <div className="col-3">
                        <h5>email</h5>
                    </div>
                    <div className="col-3">
                        <h5>order_Name</h5>
                    </div>
                    <div className="col-3">
                        <h5>Date</h5>
                    </div>
                </div>
                <hr/>
                
                <div className="row">
                    <div className="col-2">
                        <h6>{name}</h6>
                    </div>
                    <div className="col-3">
                        <h6>{email}</h6>
                    </div>
                    <div className="col-3">
                        <h6>{orderName}</h6>
                    </div>
                    <div className="col-3">
                        <p>{date}</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
    );
};

export default OrderList;