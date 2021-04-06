import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import OrderList from '../OrderList/OrderList';

const Orders = () => {
    const [loggedInUser , setLoggedInUser] = useContext(UserContext)
    const [orderList , setOrderList] = useState([])
    useEffect(()=>{
        fetch(`https://shrouded-badlands-44210.herokuapp.com/orderDetails?email=${loggedInUser.email}`)
        .then(res => res.json())
        .then(data => setOrderList(data))
    }, [])
    return (
       <div>
           
           {
               orderList.map(orders => <OrderList id={orders._id} orders={orders} > </OrderList>)
           }
       </div>
    );
};

export default Orders;