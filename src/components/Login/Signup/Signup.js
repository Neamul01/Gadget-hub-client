import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Signup = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [createUserWithEmailAndPassword, user, loading, error,] = useCreateUserWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(auth);
    const [sendEmailVerification, varifySending, varifyError] = useSendEmailVerification(auth);

    const [gotEmail, setgotEmail] = useState('')

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const onSubmit = async (data) => {
        const name = data.name;
        const email = data.email;
        const pass = data.password;
        const confirmPass = data.confirmPassword;

        if (pass === confirmPass) {
            await createUserWithEmailAndPassword(email, pass);
            await sendEmailVerification();
            toast.success('Varify Email send.\n Please check your Inbox or Spam..')
        }
        else {
            toast.error("Email and Confirm Email dosn't match")
        }
    }


    const handleResetPass = async () => {
        if (gotEmail) {
            await sendPasswordResetEmail(gotEmail);
            toast.success("Email send successfully...");
        }
        else {
            toast.error('Please provide a email address...')
        }
    }


    if (user) {
        navigate(from, { replace: true })
    }

    if (loading || sending || varifySending) {
        return <Loading></Loading>
    }

    if (error || resetError || varifyError) {
        return toast.error(error.message)
    }


    return (
        <div className="w-full max-w-sm p-6 m-auto bg-white rounded-md shadow-lg dark:bg-gray-800 my-12">

            <h1 className="text-3xl font-semibold text-center text-gray-700 dark:text-white">Sign Up</h1>

            <form className="mt-6" id='signupForm' onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label htmlFor="name" className="block text-sm text-left text-gray-800 dark:text-gray-200">Name</label>
                    <input type="text" {...register("name", { required: true })}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    {errors.name?.type === 'required' && <p className='text-red-400 text-left mb-2'><small>Name is required</small></p>}
                </div>

                <div>
                    <label htmlFor="email" className="block text-sm text-left text-gray-800 dark:text-gray-200">Email</label>
                    <input onKeyUp={(e) => setgotEmail(e.target.value)} type="email" {...register("email", { required: true })}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    {errors.email?.type === 'required' && <p className='text-red-400 text-left mb-2'><small>Email is required</small></p>}
                </div>

                <div className="mt-4">
                    <div className="flex items-center justify-between">
                        <label htmlFor="password" className="block text-sm text-gray-800 dark:text-gray-200">Password</label>
                        <p onClick={handleResetPass} className="text-xs text-gray-600 dark:text-gray-400 hover:underline cursor-pointer">Forget Password?</p>
                    </div>

                    <input type="password" {...register("password", { required: true })}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    {errors.password?.type === 'required' && <p className='text-red-400 text-left mb-2'><small>Password is required</small></p>}
                </div>

                <div>
                    <label htmlFor="confirmPassword" className="block text-sm text-left text-gray-800 dark:text-gray-200">Confirm Password</label>
                    <input type="password" {...register("confirmPassword", { required: true })}
                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    {errors.confirmPassword?.type === 'required' && <p className='text-red-400 text-left mb-2'><small>Confirm Password is required</small></p>}
                </div>

                <div className="mt-6">
                    <button
                        className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">
                        Login
                    </button>
                </div>
            </form>

            <p className="mt-8 text-xs font-light text-center text-gray-400"> Already have an account? <Link to="/login"
                className="font-medium text-gray-700 dark:text-gray-200 hover:underline">Login</Link></p>

            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Signup;