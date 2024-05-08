import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logIn } from '../utils/loginSlice';
import registerValidator from '../validators/registrerValidator';

const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
};

const Registration = () => {

    // To navigate on Hero Page if Registered successfully
    let navigate = useNavigate();
    const routeToHeroPage = () => {
        let path = `/`;
        navigate(path);
    }

    const dispatch = useDispatch();
    async function registerAPI({ name, email, password }) {
        try {

            //store user data if no error found
            const store = (response) => {
                dispatch(logIn(response));
                localStorage.setItem('userInfo', JSON.stringify(response));
                setFailureMessage(null);
                routeToHeroPage();
            }

            fetch('http://127.0.0.1:8000/api/users/register/', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ 'name': name, 'email': email, 'password': password })
            }).then(response => response.json())
                .then(response => store(response));
        }
        catch (error) {
            setFailureMessage(error.response.data.details);
        }
    }

    //REGISTRATION FORM CREATION & VALIDATION
    const [failureMessage, setFailureMessage] = useState(null);

    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: registerValidator,
        onSubmit: (values, action) => {
            registerAPI(values)
            if (failureMessage != null) {
                action.resetForm();
            }
        }
    })

    const loginData = useSelector(store => store.login.loginData)
    if (loginData) {
        return <div className='text-2xl font-bold w-full text-center py-8'>Already Logined.... <span className='underline font-semibold text-pink-400'><Link to={'/'}> Go Back</Link></span></div>
    }
    else {
        return (
            < div className='w-[85%] mx-auto border mt-16 sm:mt-4 rounded-sm flex h-fit'>
                <div className='sm:w-[55%] w-full border-r px-4 py-6'>
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
                            {failureMessage != null ? (<p className='text-sm text-pink-700'>{failureMessage}</p>) : null}
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
                        Already have an account? <Link to={'/users/login'}><spna className="underline font-semibold text-pink-400"> Sign In</spna></Link>
                    </p>
                </div>
                <div className='w-[45%] hidden sm:block'>
                    <img src ={require("../icons/techshop.jpg")} alt='TechShop' className='h-[80vh] w-full'></img>
                </div>
            </div >
        );
    }
}

export default Registration;