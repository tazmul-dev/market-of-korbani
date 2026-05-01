import React from 'react';
import card1 from '@/assers/card1.png'
import card2 from '@/assers/card2.jpg'
import Image from 'next/image';

const Hero = () => {
    return (
        <div className='bg-gray-100'>
            <div className=' flex flex-col-reverse sm:grid grid-cols-2 justify-between items-center gap-2 p-10 container mx-auto border '>
                {/* left side */}
                <div className='border space-y-4'>

                    <h1 className='text-2xl font-bold'>Fresh & Healthy Livestock for Your Qurbani</h1>
                    <p>Browse trusted sellers, compare animals, and reserve your Qurbani animal online in just a few clicks.</p>
                    <button className='btn btn-warning'>View Animals</button>
                </div>

                {/* right side */}

                <div className='grid grid-cols-2 gap-4'>
                    <div className="card shadow-sm hover:animate__fadeInUp">
                        <figure className="">
                            <Image
                              height={300}
                              width={300}
                                src={card1}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        
                    </div>
                    <div className="card shadow-sm">
                        <figure className="">
                             <Image
                              height={300}
                              width={300}
                                src={card2}
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        
                    </div>
                    <div className="card shadow-sm">
                        <figure className="">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        
                    </div>
                    <div className="card shadow-sm">
                        <figure className="">
                            <img
                                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                                alt="Shoes"
                                className="rounded-xl" />
                        </figure>
                        
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Hero;