const ShimmerCard = () => {
    return (
        <div className="w-full h-52 bg-white shadow-md rounded-sm">
        </div>
    )
}
const ShimmerHeader = () => {
    return (
        <div className=" w-full h-16 bg-slate-50 shadow-slate-400"></div>
    )
}
const Shimmer = () => {
    const shimmers = ['1','2','3','4','5','6','7','8','9'];
    return (
        <div className="w-full">
            <ShimmerHeader />
            <div className=" grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 mt-5 w-[90%] mx-auto gap-8">
                {
                    shimmers.map((item) => {
                        return <ShimmerCard key={item}/>;
                    })
                }
            </div>
        </div>
    )
}

export default Shimmer;