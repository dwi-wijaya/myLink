import { useForm } from 'react-hook-form';
import ErrorInput from '../common/ErrorInput';
import { GoogleSignIn, SignIn } from '@/services/firebase/config';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { Input } from 'antd';
import Link from 'next/link';

const LoginForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()
    const [Loading, setLoading] = useState(false)
    const [GoogleLoading, setGoogleLoading] = useState(false);

    const onSubmit = async (values) => {
        const { email, password } = values;

        try {
            setLoading(true);
            await SignIn(email, password);
            toast.success("Sign in successful.");
            console.log('Success');
        } catch (error) {
            setLoading(false);
            toast.error("Sign in failed.");
            console.log(error.code, error.message);
        } finally {
            setLoading(false);
        }
    }

    // create user for using google
    const handleGoogle = async () => {
        console.log('a');
        try {
            setGoogleLoading(true);
            await GoogleSignIn()

        } catch (error) {
            setGoogleLoading(false);
            toast.error("Sign in failed.");
            console.log(error.code, error.message);
        } finally {
            setGoogleLoading(false);
        }
    }

    return (
        <main className='flex justify-center items-center h-[100vh]'>
            <div className="p-6 w-full max-w-md">
                <div className='bg-container rounded-2xl border border-stroke  px-6 pt-7 pb-8 mb-4 text-center'>
                    <h1 className='texxt-title text-2xl'>Welcome Back</h1>
                    <h3 className='text-subtext'>{`Let's get started by signing in.`}</h3>
                    <hr className="hr" />
                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-control">
                            <input {...register("email", { required: true })} type="email" className="form-input" id="username" placeholder="type your email" />
                            <ErrorInput error={errors.email} />
                        </div>
                        <div className="form-control">
                            <input size="large" {...register("password", { required: true, minLength: 1 })} className="mt-3 form-input !bg-container" id="password" type="password" placeholder="type your password" />
                            {errors.password && <span className='form-inputtext-red-700 absolute -bottom-[1rem] left-0'>This field is required</span>}
                            <ErrorInput error={errors.password} />

                        </div>
                        <div className="flex gap-2 my-5">

                            <button className="btn !bg-white !w-full" onClick={handleGoogle}>
                                {Loading && <i className="bx bx-loader bx-spin"></i>}
                                {Loading ? "Signing  ..." : "Signin with Google"}
                            </button>
                            <button className="btn !w-full mb-3" type="submit">
                                {Loading && <i className="bx bx-loader bx-spin"></i>}
                                {Loading ? "Signing  ..." : "Sign in"}
                            </button>
                        </div>
                        <small className='text-subtext'>Dont Have Account yet? <Link href="/sign-up"><b>Sign-up</b></Link></small> 
                    </form>
                    <hr className="hr" />
                    <p className="text-center text-gray-500 text-xs">
                        &copy;2024 Dwi Wijaya. All rights reserved.
                    </p>
                </div>
            </div>
        </main>
    );
};

export default LoginForm
