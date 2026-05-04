"use client"
import { authClient } from '@/lib/auth-client';
import { toast } from '@heroui/react';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handelLoginFunc = async (userData) => {
        const { email, password } = userData
        //    console.log(email, password)

        const { data, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            rememberMe: false,
            callbackURL: "/",
        });

        if(error){
            toast.danger("Invalid email or password")
        }
        if(data){
            toast.success("Login success")
        }
        // console.log(data, error)
    }
    // console.log(errors, "Error")
    const handaleGoogleLogin =async ()=>{
            const data = await authClient.signIn.social({
             provider: "google",
      });
     
        }
    
    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center bg-slate-100 '>
            <div className='p-4 bg-white'>
                <h1 className='text-2xl font-bold my-5'>Login your account</h1>
                <button onClick={handaleGoogleLogin} className='btn w-full'>Google</button>
                <div className="divider"></div>

                <form onSubmit={handleSubmit(handelLoginFunc)}>
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
                        Login
                    </button>
                </form>

                <p>Do not have an acount? <Link className='text-red-500' href={"/register"}>Register</Link></p>



            </div>

        </div>
    );
};

export default LoginPage;