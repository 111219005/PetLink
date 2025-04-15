import {Link} from "react-router";

export default function ProductItem({ product }) {
    return (
        <div className="sm:w-55 md:w-55 lg:w-53 pt-3 px-3 lg:px-4">
            {/* 圖片 */}
            <Link to={`/${product.species}/${product.id}`}>
                <img className="w-full h-40 object-cover rounded-t-lg" src={product.cover} alt={product.name} />
            </Link>

            {/* 介紹 */}
            <div className="w-full bg-white rounded-b-lg px-2 py-2 flex flex-col items-start"> 
                <h3 className="text-lg font-semibold text-center">{product.name}</h3>
                <div className="text-white mt-1.5 card_font">
                    <a className="bg-[#FAAA5D] rounded-md py-0.5 px-2 inline-block me-1 mb-1">{product.breed}</a>
                    <a className="bg-[#FAAA5D] rounded-md py-0.5 px-2 inline-block me-1 mb-1">{product.gender}</a>
                    <a className="bg-[#FAAA5D] rounded-md py-0.5 px-2 inline-block me-1 mb-1">{product.size}</a>
                    <a className="bg-[#FAAA5D] rounded-md py-0.5 px-2 inline-block me-1 mb-1">{product.furColor}</a>
                    <a className="bg-[#FAAA5D] rounded-md py-0.5 px-2 inline-block me-1 mb-1">{product.age}</a>
                </div>
            </div>
        </div>
    );
}