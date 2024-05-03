import { useFormik } from 'formik';
import { Link } from 'react-router-dom'

import loginValidator from '../validators/loginValidator';

const initialValues = {
    email: "",
    password: "",
  };

const LogIn = () => {

    const { values, errors, handleBlur, handleChange, touched, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema : loginValidator,
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (
        < div className='w-[90%] sm:w-[50%] mx-auto border sm:12 lg:mt-16 sm:mt-16 px-4 py-6 sm:p-4 rounded-sm flex h-fit'>
            <div className='w-full'>
                <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
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
                    <div>
                        <button type='submit' className='border py-2 px-4 bg-slate-600 font-bold text-white rounded-md mb-2 sm:py-2 sm:text-sm tracking-wider'>
                            LOGIN
                        </button>
                    </div>
                </form>
                <p>
                    Not Registered? <Link to={'/users/register'}><spna className="underline font-semibold text-pink-400"> Register now</spna></Link>
                </p>
            </div>
        </div >
    );
}


export default LogIn;