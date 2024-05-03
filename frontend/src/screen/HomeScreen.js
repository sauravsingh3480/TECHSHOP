import { useState, useEffect } from "react";
import Shimmer from "../utils/shimmer";

import SearchBar from "../components/SearchBar";
import ProductCardAtHome from "../components/ProductCardAtHome";


const HomeScreen = () => {
    const [products, setProducts] = useState([]);
    const [productsCopy, setProductsCopy] = useState([]);
    const [seachText, setSeachText] = useState("");
    useEffect(() => {
        productsAPI();
    }, []);
    async function productsAPI() {
        const data = await fetch("http://127.0.0.1:8000/api/products/");
        const jsonData = await data.json();
        setProducts(jsonData);
        setProductsCopy(jsonData);
    }


    if (productsCopy.length > 0) {
        return (
            <div className="w-[90%] mx-auto  mt-5">
                {SearchBar([products, setProducts], [productsCopy, setProductsCopy], [seachText, setSeachText])}
                <span className="text-2xl font-bold text-gray-800 font-sans">LATEST PRODUCTS</span>
                <div className="w-full grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2  mt-5 gap-5 md:gap-y-7">

                    {
                        productsCopy.map((product) => {
                            return <ProductCardAtHome {...product} key={product._id} />;
                        })
                    }
                </div>
            </div>
        );
    }
    else {
        return <Shimmer />
    }
}
export default HomeScreen