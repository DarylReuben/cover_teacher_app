import React from 'react';

import { Link } from 'react-router-dom';
import Filters from './Filters';
import { ArrowRight } from './Icons';


function Card(props) {

  const { info } = props;

  return (    
    <div>
      <Filters />
      {info.map((item, index) => (
        <div key={index} className=''>
          <Link to="/Deets">
          <div className="bg-slate-200 m-1 rounded-2xl grid grid-rows-3 grid-flow-col gap-2">
            <div className="w-32 h-32 rounded-full bg-red-700 row-span-3">
              <img src={item.image} alt="" className="transition duration-300 ease-in-out hover:scale-110 rounded-full object-cover w-32 h-32" />
            </div>
            <div className="col-span-2 pl-8 text-lg font-bold"> {item.name} {item.surname} </div>
            <div className="row-span-2 col-span-2 w-52"> {item.age}{item.sex} </div>
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Card;