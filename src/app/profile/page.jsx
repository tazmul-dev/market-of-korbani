"use client"
import Image from 'next/image';
import React from 'react';
import logo from '@/assers/logo.png'
import { authClient } from '@/lib/auth-client';
import ProfileModal from '@/component/ProfileModal';

const profilePage = () => {
    const {data:session, isPending} = authClient.useSession()
    
       const user = session?.user
      
    return (
        <div className=''>
            

            <div className='flex flex-col justify-center items-center text-2xl py-10'>
            <Image
            src={user?.image}
            alt='aveter'
            width={60}
            height={60}
            className='rounded-full my-4'
            ></Image>
            <h1>{user?.name}</h1>
            <p className='my-5'>{user?.email}</p>

            <ProfileModal></ProfileModal>

            </div>
            

        </div>
    );
};

export default profilePage;