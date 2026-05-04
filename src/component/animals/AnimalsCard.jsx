'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const AnimalsCard = () => {
    const [animalsData, setAnimalsData] = useState([])
    const [sortOrder, setSortOrder] = useState('')
    useEffect(()=>{
        fetch("https://market-of-korbani.vercel.app/animals.json")
        .then((res)=>res.json())
        .then ((data)=> setAnimalsData(data))
    },[])
    const handalSortHigh =()=>{
        const sorted = [...animalsData].sort((a, b)=> b.price - a.price)
        setAnimalsData(sorted)
        setSortOrder("high")
    }
    const handalSortLow =()=>{
        const sorted = [...animalsData].sort((a, b)=> a.price - b.price)
        setAnimalsData(sorted)
        setSortOrder("low")
    }
    return (
        <div>

            <div className="dropdown dropdown-start">
                <div tabIndex={0} role="button" className="btn m-1">Sorting by price</div>
                <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                    <li onClick={handalSortHigh}><a>High</a></li>
                    <li onClick={handalSortLow}><a>Low</a></li>
                </ul>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                {animalsData.map((animal)=>{
               return  <div key={animal.id} className="card bg-base-100 shadow-sm">
            <figure>
                <Image 
                src={animal.image}
                alt={animal.name}
                width={300}
                height={300}
                className='w-full h-60 object-cover'
                >

                </Image>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{animal.name}</h2>
                
                <p className=''>{animal.description}</p>
                <div className="flex flex-wrap justify-between items-center">

                   <button >
                        <Link className="btn btn-primary" href={`animalDetails/${animal.id}`}> View Details</Link>
                    </button>
                    
                    <p className='ml-5'><span className='text-[18px] font-medium'>Price:</span> {animal.price}</p>
                   
                   
                </div>
            </div>
        </div>
            })}
            </div>
        </div>
    );
};

export default AnimalsCard;

   