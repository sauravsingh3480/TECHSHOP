
const UserAddress = () => {

    return (
        <div className="text-xs w-[90%] mx-auto my-4">
            <div className="flex justify-between">
                <p className="font-bold sm:text-2xl text-lg text-slate-700">Select Delivery Address</p>
                <div className="border border-slate-700 text-slate-600 py-1 px-2 rounded-md text-sm hover:cursor-pointer shadow-[0_3px_5px_rgb(0,0,0,0.2)]">Add New Address</div>
            </div>
            <p className="my-3">DEFAULT ADDRESS</p>

            <div className="flex flex-col gap-3 border rounded-md mt-2 p-3 shadow-[0_3px_8px_rgb(0,0,0,0.2)]">
                <p className="font-semibold">Saurav Kumar</p>
                <p>
                    <p>Vishal Height, Flat no-302, Ayodhya Nagar</p>
                    <p>Bhopal, Madhya Pradesh -422041</p></p>
                <p>Mobile: <span className=" font-semibold">9708817643</span></p>
                <ul><li>• Pay on Delivery available</li></ul>

                <div className="flex gap-10">
                    <div className="px-2 py-1 rounded-sm border text-xs font-semibold border-black text-slate-600 hover:cursor-pointer">
                        REMOVE
                    </div>
                    <div className="px-3 py-1 rounded-sm border text-xs font-semibold border-black text-slate-600 hover:cursor-pointer">
                        EDIT
                    </div>
                </div>
            </div>

            <p className="my-3">OTHER ADDRESS</p>
            <div className="flex flex-col gap-3 border rounded-md mt-2 p-3 shadow-[0_3px_8px_rgb(0,0,0,0.2)]">
                <div className="flex justify-between">
                    <p className="font-semibold">Saurav Kumar</p>
                    <div className=" border-slate-700 text-slate-600 p-1 rounded-sm text-xs hover:cursor-pointer shadow-[0_1px_3px_rgb(0,0,0,0.2)] border border-opacity-20">Make Default</div>
                </div>
                <p>
                    <p>Santi Kunj, Flat no-302, Sector-4F</p>
                    <p>Bokaro, Jharkhand -120041</p></p>
                <p>Mobile: <span className=" font-semibold">8806097643</span></p>
            </div>
        </div>
    );
}
export default UserAddress;