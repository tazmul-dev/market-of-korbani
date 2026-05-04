import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Card = ({animal}) => {
    const {name, description, image, id } = animal
    return (
        <div key={id} className="card bg-base-100 shadow-sm">
            <figure>
                <Image 
                src={image}
                alt={name}
                width={250}
                height={250}
                className='w-full h-60 object-cover'
                >

                </Image>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="flex flex-wrap justify-between items-center">

                   <button >
                        <Link className="btn btn-primary" href={`animalDetails/${animal.id}`}> View Details</Link>
                    </button>
                    
                    <p className='ml-5'><span className='text-[18px] font-medium'>Price:</span> {animal.price}</p>
                   
                   
                </div>
            </div>
        </div>
    );
};

export default Card;