export default function Category() {
    return (
        <div className="w-full flex justify-center items-center">
            <div className="text-black px-30 py-2 my-6 grid grid-cols-2 gap-10">
                <a href="#dog_section"><h2 className="col-span-1 hover:text-[#7392B9] hover:scale-150 hover:cursor">狗</h2></a>
                <a href="#cat_section"><h2 className="col-span-1 hover:text-[#7392B9] hover:scale-150">貓</h2></a>
            </div>
        </div>
    );
}
