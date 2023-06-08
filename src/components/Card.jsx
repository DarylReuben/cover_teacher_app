import React from 'react';

import { Link, useSearchParams } from 'react-router-dom';
import Filters from './Filters';
import { ArrowRight } from './Icons';


function Card(props) {
  const [searchParams, setSearchParams] = useSearchParams()

  const sexFilter = searchParams.get("sex")

  const { info } = props

 
  const displayedTeachers = sexFilter
  ? info.filter(teachers => teachers.sex === sexFilter)
  : info


  return (    
    <div>
      <Filters />
      {displayedTeachers.map((item, id) => (
        <div key={id} className=''>
          <Link to={`/${item.id}`} >
          <div className="bg-sky-200 m-1 rounded-2xl grid grid-rows-3 grid-flow-col gap-2">
            <div className="w-32 h-32 rounded-full bg-red-700 row-span-3">
              <img src={item.image} alt="" className="transition duration-300 ease-in-out hover:scale-110 rounded-full object-cover w-32 h-32" />
            </div>
            <div className="col-span-2 pl-8 text-lg font-bold"> {item.name} {item.surname} {item.age} </div>
            <div className="row-span-2 col-span-2 w-52">   {item.native} </div>
            
          </div>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Card;