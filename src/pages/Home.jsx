import { Link } from "react-router";
import Category from "../components/Category.jsx";
import Header from "../components/Header.jsx";
import Navbar from "../components/Navbar.jsx";
import dog from "../json/dog.json";
import cat from "../json/cat.json";
import ProductList from "../components/ProductList.jsx";

export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <Category />
            <div id="dog_section">
                <h1 className="ms-10 md:ms-17 lg:ms-26 xl:ms-30">狗</h1>
                <ProductList products={dog} start={0} end={10} className="layout-content" />
                <div className="flex justify-center items-center mb-10">
                    <Link to={`/dog`} >
                        <button className="text-white bg-[#7392B9] py-2 px-4 mt-4 rounded-lg cursor-pointer">查看更多</button>
                    </Link>
                </div>
            </div>
            <div id="cat_section">
                <h1 className="ms-10 md:ms-17 lg:ms-26 xl:ms-30">貓</h1>
                <ProductList products={cat} start={0} end={10} className="layout-content" />
                <div className="flex justify-center items-center mb-10">
                    <Link to={`/cat`} >
                        <button className="text-white bg-[#7392B9] py-2 px-4 mt-4 rounded-lg cursor-pointer">查看更多</button>
                    </Link>
                </div>
            </div>
        </>
    )
}