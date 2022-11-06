import React from 'react';
import './Banner.css';

const BannerItem = ({slide}) => {
     const {image, id, prev, next} = slide;
     return (
          <div id={`slide${id}`} className="carousel-item relative w-full">
                    <div className='banner-overlay'><img src={image} alt="" className="w-full rounded-xl" /></div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-24 top-1/4 ">
                         <h1 className='text-6xl text-white font-bold'>
                              Affordable <br />
                              Price for car <br />
                              Servicing
                         </h1>
                    </div>
                    <div className="absolute flex justify-start w-1/2 transform -translate-y-1/2 left-24 top-1/2 ">
                         <p className='text-xl text-white'>There are many variations of passage of available, But the majority have suffered alteration in some form.</p>
                    </div>
                    <div className="absolute flex justify-start w-1/2 transform -translate-y-1/2 left-24 top-3/4 ">
                         <button className="btn btn-warning mr-3">discover More</button>
                         <button className="btn btn-outline btn-warning">Latest project</button>
                    </div>
                    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                         <a href={`#slide${prev}`} className="btn btn-circle mr-2">❮</a>
                         <a href={`#slide${next}`} className="btn btn-circle">❯</a>
                    </div>
               </div>
     );
};

export default BannerItem;