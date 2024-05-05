import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { addItem } from "../utils/cartSlice";
import StarRating from "../components/StarRating";


const CartStatus = (countInStock, product, [cartText, setCartText]) => {

    //ADDING ITEM IN CART
    const dispatch = useDispatch();
    const handleAddItem = (product) => {
        dispatch(addItem(product));

    //ADDING ITEM IN LOCAL STORAGE
        let cartItems = []
        if (localStorage.getItem("cartItems") === null) {

            cartItems.push(product);
            localStorage.setItem("cartItems", JSON.stringify(cartItems))
        }
        else {
            cartItems = JSON.parse(localStorage.getItem("cartItems"))
            const existsItem = cartItems.find(item => item._id === product._id)
            if (!existsItem) {
                cartItems.push(product)
                localStorage.setItem("cartItems", JSON.stringify(cartItems))
            }
        }
    }
    const clicked = () => {
        if (cartText === "ADD TO CART") {
            setCartText("ADDED😀");
            handleAddItem(product);
        }
    }
    if (countInStock > 0) {

        return (
            <div className="w-full p-2 bg-green-600 self-center text-center rounded-md hover:cursor-pointer mt-3" onClick={() => clicked()}>
                <p className="text-white font-bold">{cartText}</p>
            </div>

        );
    }
    return (
        <div className="w-full p-2 bg-red-600 self-center text-center rounded-md mt-3">
            <p className="text-white font-bold">OUT OF STOCK</p>
        </div>
    );
}
const ProductDetails = () => {
    const params = useParams();
    const id = params.id;
    const [product, setProduct] = useState({});
    const [cartText, setCartText] = useState("ADD TO CART");

    useEffect(() => {
        productAPI();
    }, []);
    async function productAPI() {
        let productURL = "http://127.0.0.1:8000/api/products/" + id;
        const data = await fetch(productURL);
        const jsonData = await data.json();
        setProduct(jsonData);
    }

    if (Object.keys(product).length === 0) {
        return <h1>Loading</h1>
    }
    else {
        const { image, name, description, brand, discPrice, price, countInStock, rating, numReview } = product;
        return (
            <div className="w-[80%] flex sm:flex-row flex-col gap-3 mx-auto m-5 border p-2">
                <div>
                    <img src={image} alt={name} className="object-cover w-full h-full p-2"></img>
                </div>
                <div className="flex flex-col justify-between  w-full gap-1 pb-2">
                    <span className="font-bold sm:text-4xl text-2xl">{name}</span>
                    <span><span className="font-bold text-red-700 text-2xl">{brand} </span> Product</span>
                    <span className="text-sm text-gray-600">{description}</span>
                    <span className=" text-sm">Only for <sapn className=" text-green-500 font-bold text-xl">₹{price - discPrice}</sapn> (  {countInStock > 0 ? 'Only ' + countInStock + ' Left ' : ' Not Available '}  )</span>
                    <span className="text-[#fbbf24] tracking-widest">
                        <StarRating outof={5} rating={rating} /> <span className="text-black tracking-normal"> {numReview} reviews</span>
                    </span>
                    {CartStatus(countInStock, product, [cartText, setCartText])}
                </div>
            </div>
        );
    }
}
export default ProductDetails