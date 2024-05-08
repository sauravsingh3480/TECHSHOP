
const ProductCardInShipping = ({ image, name, deliveryDays }) => {

    const currentDate = new Date();
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const dayOfWeek = days[(currentDate.getDay() + deliveryDays)%7];

    return (
        <div className="w-full p-2 flex gap-2 border shadow-sm my-1">
            <div className="w-[15%]">
                <img src={image} alt={name}/>
            </div>
            <div className="self-center">
                <span>Estimated delivery by <span className="font-semibold">{dayOfWeek}</span></span>
            </div>
        </div>
    );
}
export default ProductCardInShipping;