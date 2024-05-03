import { Link } from "react-router-dom";

import StarRating from "../components/StarRating";

const ProductCardAtHome = ({ _id, name, image, brand, rating, price, discPrice, numReview }) => {
    return (
        <Link to={"/product/" + _id}>
            <div className="w-100 rounded-md shadow-md hover:cursor-pointer border">
                <div className="h-56">
                    <img src={image} alt={name} className="rounded-md object-cover h-full w-full" />
                </div>
                <div className='flex flex-col p-2 gap-1'>
                    <span className="text-md text-nowrap truncate">{name}</span>
                    <span className="font-bold text-red-900">{brand}</span>
                    <span className="text-[#fbbf24] tracking-widest">
                        <StarRating outof={5} rating={rating} /> <span className="text-black tracking-normal"> {numReview} reviews</span>
                    </span>
                    <spna className="font-bold text-zinc-600 text-xl tracking-wide"><span className="text-xl text-green-500">₹</span>{price - discPrice}
                        <spna> <span className="text-sm italic line-through tracking-wide"> ₹{price}</span>
                        </spna>
                    </spna>
                </div>
            </div>
        </Link >
    );
}

export default ProductCardAtHome