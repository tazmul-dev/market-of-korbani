import { animals } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AnimalsCard = async() => {
    const animalsData = await animals()
    return (
        <div>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4'>
                {animalsData.map((animal)=>{
               return  <div key={animal.id} className="card bg-base-100 shadow-sm">
            <figure>
                <Image 
                src={animal.image}
                alt={animal.name}
                width={300}
                height={300}
                className='w-full h-full object-cover'
                >

                </Image>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{animal.name}</h2>
                <p className=' line-clamp-1'>{animal.description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">
                        <Link href={`animalDetails/${animal.id}`}> View Details</Link>
                    </button>
                </div>
            </div>
        </div>
            })}
            </div>
        </div>
    );
};

export default AnimalsCard;

   