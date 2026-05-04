import Smodal from '@/component/Smodal';
import { animals } from '@/lib/data';
import { Modal } from '@heroui/react';
import Image from 'next/image';
import React from 'react';

const animalDetailsPage = async ({ params }) => {
    const { id } = await params
    const animalsData = await animals()
    const animal = animalsData.find(a => a.id == id)
    console.log(animal)
    const { image, name, breed, price, weight, age, location, description } = animal

    return (
        <div className=' container mx-auto my-10'>
            <div className="card lg:card-side bg-base-100 max-w-250 mx-auto shadow-sm">
                <figure>
                    <Image
                        src={image}
                        alt='name'
                        width={300}
                        height={300}
                        className='w-full h-full object-cover'
                    />
                </figure>
                <div className="card-body">
                <p>Location {location}</p>
                  <p>name: {name}</p>
                  <p>Price:{price} tk</p>
                  <p>Weight:{weight} kg</p>
                  <p>Breed: {breed}</p>
                  <p>Age: {age} years</p>

                    <p>{description}</p>
                    <div className="card-actions justify-end">
                       <Smodal></Smodal>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default animalDetailsPage;