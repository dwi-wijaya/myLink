import { useForm } from 'react-hook-form';
import ErrorInput from '../common/ErrorInput';
import { CreateUser, GoogleSignIn } from '@/services/firebase/config';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { Divider, Input } from 'antd';
import Link from 'next/link';
import Image from 'next/image';
import GoogleLogo from '@/assets/logos/google.svg'
import { useRouter } from 'next/router';

const SignupForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const router = useRouter();

    const [Loading, setLoading] = useState(false)
    const [GoogleLoading, setGoogleLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const onSubmit = async (values) => {
        const { email, password, confirmPassword } = values;

        if (password !== confirmPassword) {
            setErrorMessage("Passwords don't match");
            return;
        } else {
            setErrorMessage("")
        }

        try {
            setLoading(true);
            await CreateUser(email, password);
            router.push('/signin')
            toast.success("Account created successful.");
            console.log('Success');
        } catch (error) {
            setLoading(false);
            toast.error("Signup in failed.");
            console.log(error.code, error.message);

            if (error.code === 'auth/email-already-in-use') {
                setErrorMessage('Email address is already in use.');
            } 
        } finally {
            setLoading(false);
        }
    }

    // create user for using google
    const handleGoogle = async () => {
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
                    <h1 className='texxt-title text-2xl'>Welcome</h1>
                    <h3 className='text-subtext'>{`Let's get started by create your account.`}</h3>
                    <hr className="hr" />
                    <form className="" onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("email", { required: true })} type="email" className="form-input" id="username" placeholder="type your email" />
                        <ErrorInput error={errors.email} />

                        <input size="large" {...register("password", { required: true, minLength: 8 })} className="mt-3 form-input !bg-container" id="password" type="password" placeholder="type your password" />
                        <ErrorInput error={errors.password} />

                        <input size="large" {...register("confirmPassword", { required: true, minLength: 8 })} className="mt-3 form-input !bg-container" id="password" type="password" placeholder="confirm your password" />
                        <ErrorInput error={errors.confirmPassword} />
                        {errorMessage && <p className='text-left mt-1 text-red-500 text-xs mb-3'>{errorMessage}</p>}

                        <button className="btn !w-full mt-5" type="submit">
                            {Loading && <i className="bx bx-loader bx-spin"></i>}
                            {Loading ? "Signup  ..." : "Sign up"}
                        </button>
                        <p className='text-sm text-subtext my-4'>Already have Account ? <Link href="/signin"><b>Sign-in</b></Link></p>
                        {/* <Divider plain>OR</Divider> */}
                        <button className="btn !bg-transparent !w-full !text-base" onClick={handleGoogle}>
                            {GoogleLoading && <i className="bx bx-loader bx-spin"></i>}
                            {GoogleLoading ? "Singup  ..." : <div className='flex gap-3 items-center'><Image className='size-4' src={GoogleLogo}></Image>Continue with Google</div>}
                        </button>
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

export default SignupForm
