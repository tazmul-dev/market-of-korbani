import React from 'react';
import card1 from '@/assers/card1.png'
import card2 from '@/assers/card2.jpg'
 import card3 from '@/assers/moiz.jpg'
 import card4 from '@/assers/goat.jpg'
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <div className='bg-gray-100'>
            <div className=' flex flex-col-reverse sm:grid grid-cols-2 justify-between items-center gap-2 p-10 container mx-auto '>
                {/* left side */}
                <div className='space-y-4'>

                    <h1 className='text-2xl font-bold'>Fresh & Healthy Livestock for Your Qurbani</h1>
                    <p>Browse trusted sellers, compare animals, and reserve your Qurbani animal online in just a few clicks.</p>
                    <button className='btn btn-warning'><Link href={'/animals'}>View Animals</Link></button>
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
                                className="w-full h-full object-cover" />
                        </figure>
                        
                    </div>
                    <div className="card shadow-sm">
                        <figure className="">
                             <Image
                              height={300}
                              width={300}
                                src={card2}
                                alt="Shoes"
                                className="w-full h-full object-cover" />
                        </figure>
                        
                    </div>
                    <div className="card shadow-sm">
                        <figure className="">
                            <Image
                              height={300}
                              width={300}
                                src={card3}
                                alt="Shoes"
                                className="w-full h-full object-cover" />
                        </figure>
                        
                    </div>
                    <div className="card shadow-sm">
                        <figure className="">
                            <Image
                              height={300}
                              width={300}
                                src={card4}
                                alt="Shoes"
                                className="w-full h-full object-cover" />
                        </figure>
                        
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Hero;