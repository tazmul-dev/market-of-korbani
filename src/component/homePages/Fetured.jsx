
import { animals } from '@/lib/data';
import React from 'react';
import Card from '../shered/Card';

const Fetured = async () => {
    const animalsData = await animals()

    return (

        <div className='container mx-auto my-10'>
            <div className='text-center my-5'>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Featured Animals
            </h2>
            <p className="text-gray-600 mt-3">
                Premium and healthy livestock selected for your Qurbani.
            </p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-4 gap-4'>
             {animalsData.slice(0, 4).map(animal => <Card key={animal.id} animal ={animal}></Card>)}
            </div>
           
        </div>
    );
};

export default Fetured;