import { Formik, Field, Form } from 'formik';
import { useSelector } from "react-redux";
import { Link } from 'react-router-dom';
import { useState } from 'react';

const PaymentPage = () => {

    const cartItems = useSelector(store => store.cart.items);
    const loginData = useSelector(store => store.login.loginData);
    const [paymentMethod, setPaymentMethod] = useState("Cash On Delivery")
    if (cartItems.length > 0) {
        let totalPrice = 0;
        let totalDiscount = 0;
        for (let i = 0; i < cartItems.length; i++) {
            totalPrice += cartItems[i].price;
            totalDiscount += cartItems[i].discPrice;
        }
        if (loginData) {
            return (
                <div className="flex">
                    <div className='w-[50%]'>
                        <Formik
                            initialValues={{
                                picked: 'Cash On Delivery',
                            }}
                        >
                            {({ values }) => (
                                <Form>
                                    {setPaymentMethod(values.picked)}
                                    <div className='flex flex-col mt-3 sm:mx-6'>
                                        <div className='font-bold text-slate-800 text-2xl py-3'>
                                            Payment Method: <span className='text-red-700'>{values.picked}</span>
                                        </div>
                                        <div className=" border w-full">

                                            <div className='py-5  border'>
                                                <label className='text-lg font-bold text-slate-500 hover:cursor-pointer'>
                                                    <Field type="radio" name="picked" value="Cash On Delivery" checked="checked" className="mx-3" />
                                                    Cash On Delivery
                                                </label>
                                            </div>
                                            <div className='py-5  border'>
                                                <label className='text-lg font-bold text-slate-500 hover:cursor-pointer'>
                                                    <Field type="radio" name="picked" value="Pay With UPI" className="mx-3" />
                                                    Pay With UPI
                                                </label>
                                            </div>
                                            <div className='py-5  border'>
                                                <label className='text-lg font-bold text-slate-500 hover:cursor-pointer'>
                                                    <Field type="radio" name="picked" value="Credit/Debit Card" className="mx-3" />
                                                    Credit/Debit Card
                                                </label>
                                            </div>
                                            <div className='py-5  border'>
                                                <label className='text-lg font-bold text-slate-500 hover:cursor-pointer'>
                                                    <Field type="radio" name="picked" value="EMI" className="mx-3" />
                                                    EMI
                                                </label>
                                            </div>
                                            <div className='py-5  border'>
                                                <label className='text-lg font-bold text-slate-500 hover:cursor-pointer'>
                                                    <Field type="radio" name="picked" value="Net Banking" className="mx-3" />
                                                    Net Banking
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                    <div className='w-[47%] mt-4 border-l-2 p-4 flex flex-col gap-3'>
                        <div className='font-bold text-2xl text-slate-700 border-b-2 pb-2'>ORDER SUMMRY</div>
                        <ul className="flex justify-between">
                            <li>Total Item</li>
                            <li>{cartItems.length}</li>
                        </ul>
                        <ul className="flex justify-between">
                            <li>Total MRP</li>
                            <li><span>₹</span>{totalPrice}</li>
                        </ul>
                        <ul className="flex justify-between">
                            <li>Discount on MRP</li>
                            <li className="text-green-500">- <span>₹</span>{totalDiscount}</li>
                        </ul>
                        <ul className="flex justify-between">
                            <li>Platform Fee</li>
                            <li className="text-green-400"> FREE</li>
                        </ul>
                        <ul className="flex justify-between border-b-2 pb-3">
                            <li>Shipping Fee</li>
                            <li className="text-green-400"><span className="line-through font-semibold text-black">₹79</span> FREE</li>
                        </ul>
                        <ul className="flex justify-between font-bold">
                            <li>Total Amount</li>
                            <li><spna className="text-lg">₹</spna>{totalPrice - totalDiscount}</li>
                        </ul>
                        <ul className="flex justify-between font-bold">
                            <li>Payment Method</li>
                            <li>{paymentMethod}</li>
                        </ul>
                        <div>
                            <Link to={"/checkout/payment"}>
                                <div className="w-[100%] py-2 hover:bg-slate-600 hover:text-white font-bold hover:cursor-pointer text-center rounded-md mx-auto bg-white  border border-green-600  delay-100">
                                    PLACE ORDER⚡
                                </div>
                            </Link>
                        </div>
                    </div>
                </div >
            );
        }
        else
        {
            return <h1>Chal nikal l**de <span className="underline font-bold text-xl text-red-600"><Link to={"/users/login"}>do login</Link></span></h1>
        }
    }
}
export default PaymentPage