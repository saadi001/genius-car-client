import React, { useEffect, useState } from 'react';

const OrderRow = ({ order }) => {
     const {_id, serviceName, customer, price, email, phone,service } = order;
     const [orderService, setOrderService] = useState({});

     useEffect(()=>{
          fetch(`http://localhost:5000/services/${service}`)
          .then(res => res.json())
          .then(data => setOrderService(data))
     },[service])

     const handleDelete = (id) =>{
          const proceed = window.confirm('Are you sure to cancel order?')
          if(proceed){
               fetch(`http://localhost:5000/orders/${id}`,{
                    method: 'DELETE'
               })
               .then(res => res.json())
               .then(data => console.log(data))
          }
     }
     return (
          <tr>
               <th>
                    <label>
                         <button onClick={()=> handleDelete(_id)} className="btn btn-circle btn-sm">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                         </button>
                    </label>
               </th>
               <td>
                    <div className="flex items-center space-x-3">
                         <div className="avatar">
                              <div className="mask rounded w-24 h-24">
                                   {    orderService?.img && 
                                        <img src={orderService.img} alt="Avatar Tailwind CSS Component" />}
                              </div>
                         </div>
                         <div>
                              <div className="font-bold">{customer}</div>
                              <div className="text-sm opacity-50">{phone}</div>
                         </div>
                    </div>
               </td>
               <td>
                   {serviceName}
                    <br />
                    <span className="badge badge-ghost badge-sm">{price}</span>
               </td>
               <td>{email}</td>
               <th>
                    <button className="btn btn-ghost btn-xs">details</button>
               </th>
          </tr>
     );
};

export default OrderRow;