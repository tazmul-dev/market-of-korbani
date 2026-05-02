import Image from 'next/image';
import React from 'react';

const Card = ({animal}) => {
    const {name, description, image } = animal
    return (
        <div className="card bg-base-100 shadow-sm">
            <figure>
                <Image 
                src={image}
                alt={name}
                width={300}
                height={300}
                className='w-full h-full object-cover'
                >

                </Image>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Card;