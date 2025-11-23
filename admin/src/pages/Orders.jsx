import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import {toast} from 'react-toastify'
import { assets } from "../assets/assets";
import { currency } from "../App";


const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(
        `${backendUrl}/api/order/list`,
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setOrders(response.data.orders.reverse());
      }else {
        toast.error(response.data.error)
      }
    } catch (error) {
      toast.error(error.message)
    }
  };
  
  const statusHandler = async (event, orderId) => {
    try {
       const response = await axios.post(`${backendUrl}/api/order/status`,{orderId, status:event.target.value},  { headers: { token } });
        if (response.data.success) {
        await fetchAllOrders()
      }
    } catch (error) {
      console.log(error)
        toast.error(response.data.error)
    }
  }
  useEffect(() => {
    fetchAllOrders();
  }, [token]);
  return (
    <div>
       <h1>All Orders</h1>
       {
        orders.map((order, index)=>(
          <div className="grid grid-cols-1 sm:grid-cols-[0..5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-gray-700" key={index}>
            <img className="w-12" src={assets.OO} alt="" />
            <div>
              {
                order.items.map((item, index)=>{
                 if(index === order.items.length - 1) {
                  return <p className="py-0.5" key={index}>{item.name} X {item.quantity} <span>{item.size}</span> </p>
                 }else{
                  return  <p className="py-0.5" key={index}>{item.name} X {item.quantity} <span>{item.size}</span> </p>
                 }
                })
              }
            </div>
            <p className="mt-3 mb-2 font-medium">{order.address.firstName + " " + order.address.lastName + " " + order.address.phone}</p>
            <div>
              {order.address.email + " " + order.address.district + " " + order.address.thana + " " + order.address.union}
            </div>
            <div>
              {order.address.message}
            </div>
            <div>
              <p className="text-sm sm:text-[15px]">Items: {order.items.length}</p>
              <p className="mt-3">Method: {order.paymentMethod}</p>
              <p>Payment: {order.payment ? 'Done' : 'Pending'}</p>
              <p>Date: {new Date(order.date).toDateString()}</p>
            </div>
            <p className="text-sm sm:text-[15px]">{currency} {order.amount}</p>
            <select onChange={(event) => statusHandler(event, order._id)} value={order.status}>
              <option value="Order Placed">Order Placed</option>
              <option value="Packing">Packing</option>
              <option value="Shipped">Shipped</option>
              <option value="Out for delivery">Out for delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))
       }
    </div>
  );
};

export default Orders;
{/* <div>
        <h1>All Orders</h1>
        {orders.length === 0 && <p>No orders found</p>}
        {orders.map((order, index) => (
          <div key={index} className="border p-2 my-2">
            <p>User ID: {order.userId}</p>
            <p>Amount: {order.amount}</p>
            <p>Payment: {order.payment ? "Paid" : "Not Paid"}</p>
            <p>Status: {order.status}</p>
            <p>Date: {new Date(order.date).toLocaleString()}</p>
          </div>
        ))}
      </div> */}