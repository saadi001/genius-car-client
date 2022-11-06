import React from 'react';

const ServiceCard = ({service}) => {
     const {img, title, price} = service;
     return (
          <div className="card card-compact bg-base-100 shadow-xl">
               <figure><img src={img} alt="Shoes" /></figure>
               <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p className='text-orange-600 font-bold text-lg'>price: ${price}</p>
                    <div className="card-actions justify-end">
                         <button className="btn btn-primary">Buy Now</button>
                    </div>
               </div>
          </div>
     );
};

export default ServiceCard;