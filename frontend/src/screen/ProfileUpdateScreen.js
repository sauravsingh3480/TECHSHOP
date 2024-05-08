import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { logIn } from '../utils/loginSlice';
import registerValidator from '../validators/registrerValidator';



const UpdateProfile = () => {

    // To navigate on Profile Page if Update successfully
    let navigate = useNavigate();
    const routeToPrfilePage = () => {
        let path = `/users/profile`;
        navigate(path);
    }

    const loginData = useSelector(store => store.login.loginData)
    const initialValues = {
        name: loginData?.name,
        email: loginData?.email,
        password: "",
        confirm_password: "",
    };
    const dispatch = useDispatch();
    async function updateAPI({ name, email, password }) {

            const store = (response) => {
                if (!response?.details) {
                     //store user data if no error found
                    dispatch(logIn(response));
                    localStorage.setItem('userInfo', JSON.stringify(response));
                    setFailureMessage(null);
                    routeToPrfilePage();
                }
                else{
                    setFailureMessage(response.details);
                }
            }

            fetch('http://127.0.0.1:8000/api/users/profile/update/', {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': 'Bearer ' + loginData.token
                },
                body: JSON.stringify({ 'name': name, 'email': email, 'password': password })
            }).then(response => response.json())
                .then(response => store(response));
        }

    //REGISTRATION FORM CREATION & VALIDATION
    const [failureMessage, setFailureMessage] = useState(null);

    const { values, errors, handleBlur, touched, handleChange, handleSubmit } = useFormik({
        initialValues: initialValues,
        validationSchema: registerValidator,
        onSubmit: (values, action) => {
            updateAPI(values)
            if (failureMessage != null) {
                action.resetForm();
            }
        }
    })

    return (
            <div className='sm:w-[50%] w-[90%] mx-auto border mt-16 sm:mt-4 px-4 py-6 sm:p-4 rounded-sm h-fit'>
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
                            UPDATE
                        </button>
                    </div>
                </form>
            </div>
    );
}

export default UpdateProfile;