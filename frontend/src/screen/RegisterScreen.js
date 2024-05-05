import { useFormik } from 'formik';
import { Link } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';

import registerValidator from '../validators/registrerValidator';

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
};

const Registration = () => {

    const [failure, setFailure] = useState(null);

    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: registerValidator,
        onSubmit: (values, action) => {
            registerAPI(values)
            action.resetForm();
        }
    })
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    async function registerAPI({ name, email, password }) {
        try {
            const { data } = await axios.post("http://127.0.0.1:8000/api/users/register/",
                { 'name': name, 'email': email, 'password': password },
                config

            );
            setFailure(null);
            console.log(data);
        }
        catch (error) {
            setFailure(error.response.data.details);
            console.log(error);
        }
    }

    return (
        < div className='w-[90%] mx-auto border mt-16 sm:mt-4 px-4 py-6 sm:p-4 rounded-sm flex h-fit'>
            <div className='sm:w-[50%] w-full'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
                    <div className='flex flex-col border border-black border-opacity-40 px-2 py-1 rounded-md'>
                        <label htmlFor='name' className='font-semibold text-sm'>
                            Name
                        </label>
                        <input
                            type='name'
                            autoComplete='off'
                            name='name'
                            id='name'
                            placeholder='Name'
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='py-1 sm:py-0 outline-none text-lg sm:text-base text-slate-500'
                        />
                        {errors.name && touched.name ? (<p className='text-sm text-pink-700'>{errors.name}</p>) : null}
                    </div>
                    <div className='flex flex-col border border-black border-opacity-40 px-2 py-1 rounded-md'>
                        <label htmlFor='email' className='font-semibold text-sm'>
                            Email
                        </label>
                        <input
                            type='email'
                            autoComplete='off'
                            name='email'
                            id='email'
                            placeholder='Email'
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='py-1 sm:py-0 outline-none text-lg sm:text-base text-slate-500'
                        />
                        {errors.email && touched.email ? (<p className='text-sm text-pink-700'>{errors.email}</p>) : null}
                        {failure != null ? (<p className='text-sm text-pink-700'>{failure}</p>) : null}
                    </div>
                    <div className='flex flex-col border border-black border-opacity-40 px-2 py-1 rounded-md'>
                        <label htmlFor='password' className='font-semibold text-sm'>
                            Password
                        </label>
                        <input
                            type='password'
                            autoComplete='off'
                            name='password'
                            id='password'
                            placeholder='Password'
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='py-1 sm:py-0 outline-none text-lg sm:text-base text-slate-500'
                        />
                        {errors.password && touched.password ? (<p className='text-sm text-pink-700'>{errors.password}</p>) : null}
                    </div>
                    <div className='flex flex-col border border-black border-opacity-40 px-2 py-1 rounded-md'>
                        <label htmlFor='confirm_password' className='font-semibold text-sm'>
                            Confirm Password
                        </label>
                        <input
                            type='password'
                            autoComplete='off'
                            name='confirm_password'
                            id='confirm_password'
                            placeholder='Confirm Password'
                            value={values.confirm_password}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            className='py-1 sm:py-0 outline-none text-lg sm:text-base text-slate-500'
                        />
                        {errors.confirm_password && touched.confirm_password ? (<p className='text-sm text-pink-700'>{errors.confirm_password}</p>) : null}
                    </div>
                    <div>
                        <button type='submit' className='border py-2 px-4 bg-slate-600 font-bold text-white rounded-md mb-2 sm:py-2 sm:text-sm tracking-wider'>
                            RGISTER
                        </button>
                    </div>
                </form>
                <p>
                    Already have an account? <Link to={'/users/login'}><spna className="underline font-semibold text-pink-400"> Sign in now</spna></Link>
                </p>
            </div>
            <div className='w-[50%] border border-black hidden sm:block ml-4 rounded-sm'>
                {/* <img src="./watch.webp" alt='image' ></img> */}
            </div>
        </div >
    );
}

export default Registration;