import React from 'react';
import person from '../../../assets/images/about_us/person.jpg';
import parts from '../../../assets/images/about_us/parts.jpg';

const About = () => {
     return (
          <div className="hero bg-base-200 my-5">
               <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 w-full relative '>
                         <img src={person} alt="" className=" rounded-lg shadow-2xl w-4/5 h-full mb-16" />
                         <img src={parts} alt="" className=" absolute  rounded-lg shadow-2xl w-3/5 right-5 top-1/2 " />
                    </div>
                    <div className='lg:w-1/2 w-full'>
                         <p className='text-2xl text-orange-600 font-bold mb-4 '>About us</p>
                         <h1 className="text-5xl font-bold">We are qualified <br />
                              & of experience <br />
                              in this feild.</h1>
                         <p className="py-6">There are many variations of passage of Lorem, Ipsum available but the majority have suffered Alteration in some form, By injected humour, Or randomised words which don't even look even slightly believeable.</p>
                         <p className="py-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, vel rem. Saepe fugiat impedit pariatur.</p>
                         <button className="btn btn-primary">Get more info</button>
                    </div>
               </div>
          </div>
     );
};

export default About;