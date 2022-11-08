import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
     const { title, price, _id } = useLoaderData();
     const {user} = useContext(AuthContext);

     const handleCheckout = (event) =>{
          event.preventDefault();
          const form = event.target;
          const name = `${form.firstName.value} ${form.lastName.value}`;
          const phone = form.phone.value;
          const email = user?.email || 'unregistered';
          const message = form.message.value;

          const order = {
               service: _id,
               serviceName: title,
               price, 
               customer: name,
               email, 
               phone, 
               message
          }

          fetch('http://localhost:5000/orders',{
               method: 'POST', 
               headers: {
                    'content-type' : 'application/json'
               },
               body: JSON.stringify(order)
          })
          .then(res => res.json())
          .then(data => {
               console.log(data)
               if(data.acknowledged){
                    alert('order placed successfully')
                    form.reset();
               }
          })
          .catch(err => console.error(err))
          

     }
     return (
          <div>
               <form onSubmit={handleCheckout} className='my-3 mx-2'>
                    <h2 className='text-4xl font-semibold text-center'>You are about to order: {title}</h2>
                    <h4 className='text-xl text-center mb-2'>Price: {price}</h4>
                    <div className='grid grid-cols-1 gap-4 sm:grid-cols-2'>
                         <input type="text" name='firstName' placeholder="first name"  className="input input-bordered w-full" required/>
                         <input type="text" name='lastName' placeholder="last name" className="input input-bordered w-full" />
                         <input type="text"  name='phone' placeholder="your phone" className="input input-bordered w-full" required/>
                         <input type="text" name='email' placeholder="your email" defaultValue={user?.email} className="input input-bordered w-full" readOnly/>
                    </div>
                    <textarea name='message' className="textarea textarea-bordered w-full my-4" placeholder="Bio"></textarea>
                    <button type='submit' className='btn btn-warning mr-2'>place order</button>
                    <Link to='/orders'><button className='btn btn-outline btn-warning'>check orders</button></Link>
               </form>
          </div>
     );
};

export default Checkout;