import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import OrderRow from './OrderRow';

const Orders = () => {
     const { user } = useContext(AuthContext);
     const [orders, setOrders] = useState([]);     


     useEffect(() => {
          fetch(`http://localhost:5000/orders?email=${user?.email}`)
               .then(res => res.json())
               .then(data => setOrders(data))
     }, [user?.email])

     return (
          <div className="overflow-x-auto w-full">
               <table className="table w-full">
                    
                    <thead>
                         <tr>
                              <th>
                                   <label>
                                        <p>delete</p>
                                   </label>
                              </th>
                              <th>Name</th>
                              <th>Service</th>
                              <th>Email</th>
                              <th></th>
                         </tr>
                    </thead>
                    <tbody>                                                                                                    
                           {
                              orders.map(order => <OrderRow
                              key={order._id}
                              order={order}
                              ></OrderRow>)
                           }
                                                  
                    </tbody>
                                   

               </table>
          </div>
     );
};

export default Orders;