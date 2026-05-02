"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const RegisterPage = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const handelRegisterFunc = async (UserData) => {
        const { name, email, photo, password } = UserData

        // console.log(name, photo, password, email)

        const {data, error } = await authClient.signUp.email({
            name: name, // required
            email: email, // required
            password:password, // required
            image: photo,
            callbackURL: "/",
        })
        console.log(data, error)
        if(error){
            alert('user alrady register')
        }
        if(data){
            alert('success registar')
        }
    }
    const handaleGoogleLogin =async ()=>{
        const data = await authClient.signIn.social({
         provider: "google",
  });
  console.log(data)
    }

    // console.log(errors, "Error")
    return (
        <div className='container mx-auto min-h-[80vh] flex justify-center items-center py-10 bg-slate-100 '>
            <div className='w-100 p-10 bg-white '>
                <h1 className='text-2xl font-bold my-5'>Login your account</h1>
                <button onClick={ handaleGoogleLogin} className='btn w-full'>Google</button>

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
                            {...register("photo", { required: "photo is not valid" })}

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
                    <button type='submit' className='btn btn-primary w-full'>
                        Register
                    </button>
                </form>

                <p>Do not have an acount? <Link className='text-red-500' href={"/login"}>Login</Link></p>



            </div>

        </div>
    );
};

export default RegisterPage;