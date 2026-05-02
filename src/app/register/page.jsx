"use client"
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
    const {register, handleSubmit, formState: { errors }} = useForm()
    const handelRegisterFunc =(data)=>{
        
    

    }
    console.log(errors, "Error")
    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center py-10 bg-slate-100 '>
            <div className='p-4 bg-white'>
                <h1 className='text-2xl font-bold my-5'>Login your account</h1>
                <button className='btn w-full'>Google</button>
                 <div className="divider"></div>

                <form onSubmit={handleSubmit(handelRegisterFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Name</legend>
                        <input
                         {...register("name", { required: "name is not valid" })}
                    
                         type="text"
                          className="input"
                           placeholder="Type your email" />
                       
                    </fieldset>
                   {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                    
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Photo</legend>
                        <input 
                         {...register("photo", { required: "password is not valid" })}
                       
                        type="text"
                         className="input"
                          placeholder="photo Url" />
                       
                    </fieldset>

                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Email</legend>
                        <input
                         {...register("email", { required: "email is not valid" })}
                    
                         type="email"
                          className="input"
                           placeholder="Type your email" />
                       
                    </fieldset>
                   {errors.email && <p className='text-red-500'>{errors.email.message}</p>}
                    
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Password</legend>
                        <input 
                         {...register("password", { required: "password is not valid" })}
                       
                        type="password"
                         className="input"
                          placeholder="Type your password" />
                       
                    </fieldset>
                       {errors.password && <p className='text-red-500'>{errors.password.message}</p>}
                    <button className='btn btn-primary w-full'>
                       Register
                    </button>
                </form>

                <p>Do not have an acount? <Link className='text-red-500' href={"/login"}>Login</Link></p>



            </div>

        </div>
    );
};

export default RegisterPage;