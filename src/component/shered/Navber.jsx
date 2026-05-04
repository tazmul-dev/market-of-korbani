'use client'
import React, { use } from 'react';
import NevLink from './NevLink';
import Link from 'next/link';
import { authClient } from '@/lib/auth-client';
import Image from 'next/image';
import logo from '@/assers/logo.png'
// import logo from '@/assers/l.png'


const Navber = () => {
   const {data:session, isPending} = authClient.useSession()

   const user = session?.user
    
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        
                            <li><NevLink href={'/'}>Home</NevLink></li>
                            <li><NevLink href={'/animals'}>Animals</NevLink></li>
                            <li><NevLink href={'/profile'}>Profile</NevLink></li>

                       

                    </ul>
                </div>
               
               
                <p className='font-bold text-xl'><span className='text-green-400'>QURBANIR</span> <span className='text-yellow-700'>MARKET</span></p>
               
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">

                    <li><NevLink href={'/'}>Home</NevLink></li>
                    <li><NevLink href={'/animals'}>Animals</NevLink></li>
                    <li><NevLink href={'/profile'}>Profile</NevLink></li>


                </ul>
            </div>
           {isPending? (<span className="loading loading-spinner loading-md"></span>): user ? (
            <div className="navbar-end flex gap-2">
              <Image
              width={60}
              height={60}
              src={user.image}
              alt='aveter'
              className=' rounded-full'
              ></Image>
              <button onClick={async()=> await authClient.signOut()} className='btn'>Log out</button>
            </div>
           ):(
             <div className="navbar-end flex gap-2">
                <Link href={'/login'} className="btn btn-neutral">Login</Link>
                <Link href={'/register'} className="btn btn-neutral">Resistar</Link>
            </div>
           )}
        </div>
    );
};

export default Navber;