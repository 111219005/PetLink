export default function Category() {
    return (
        <>
            <div className="w-full md:flex items-center h-[50px] px-30 categoryBar hidden">
                <div className="absolute left-30">
                    <img className="items-start cursor-pointer" src="/img/PetLink.png" alt="PetLink" />
                </div>
                <div className="flex-grow flex justify-center space-x-10">
                    <a href="#dog_section"><h2 className="inline-block col-span-1 hover:scale-150 category flex justify-center items-center">狗</h2></a>
                    <a href="#cat_section"><h2 className="inline-block col-span-1 hover:scale-150 category flex justify-center items-center">貓</h2></a>
                </div>
            </div>
        </>
    );
}
