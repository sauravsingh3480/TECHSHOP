
const SearchBar = ([products, setProducts],[productsCopy, setProductsCopy],[seachText,setSeachText]) =>
{
    const Search = (products,seachText) =>
    {
        seachText = seachText.toUpperCase();
        const found = [];
        for (let index = 0; index < products.length; index++) {
            const element = products[index];
            const name = element.name.toUpperCase();
            const brand = element.brand.toUpperCase();
            if(name.includes(seachText) || brand.includes(seachText))
            {
                found.push(element)
            }
        }
        setProductsCopy(found)
    }
    const heandleChange = (e) =>{
        setSeachText(e.target.value);
    }
    return(
        <div className="flex w-[90%] sm:w-[60%] h-9 border-zinc-400  border-2 rounded-md my-5 mx-auto shadow-sm justify-between sm:sticky bg-white sm:top-4 sm:z-10">
            <div className="w-full">
                <input type="text" placeholder="Find Products..." value={seachText} onChange={heandleChange} className="w-full h-full px-2 border-0 rounded-l-md"/>
            </div>
            <div>
                <input type="submit" value="Search" className="h-full border-l-2 border-zinc-400 px-2 hover:cursor-pointer font-semibold rounded-r-md shadow-sm" onClick={() => Search(products,seachText)} />
            </div>
        </div>
    );
}
export default SearchBar