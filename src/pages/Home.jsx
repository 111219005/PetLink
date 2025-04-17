import { Link } from "react-router";
import Category from "../components/Category.jsx";
import Header from "../components/Header.jsx";
import Navbar from "../components/Navbar.jsx";
import dog from "../json/dog.json";
import cat from "../json/cat.json";
import ProductList from "../components/ProductList.jsx";
import Footer from "../components/Footer/Footer.jsx"

export default function Home() {
    return (
        <div className="bg-[#FFF7D8]">
            <Navbar />
            <Header />
            <Category />
            <div id="dog_section" className="w-full flex flex-col items-center">
                <h1 className="xs:ms-10 sm:w-[400px] md:w-[660px] lg:w-[950px] xl:w-[940px] 2xl:w-[1250px] text-left">狗</h1>
                <ProductList products={dog} start={0} end={10} className="layout-content" />
                <div className="flex justify-center items-center mb-10">
                    <Link to={`/dog`}>
                        <button className="text-white bg-[#7392B9] py-2 px-4 mt-7 rounded-lg cursor-pointer hover:text-[#7392B9] hover:bg-white">查看更多</button>
                    </Link>
                </div>
            </div>

            <div id="cat_section" className="w-full flex flex-col items-center">
                <h1 className="xs:ms-10 sm:w-[400px] md:w-[660px] lg:w-[950px] xl:w-[940px] 2xl:w-[1250px] text-left">貓</h1>
                <ProductList products={cat} start={0} end={10} className="layout-content" />
                <div className="flex justify-center items-center">
                    <Link to={`/cat`} >
                        <button className="text-white bg-[#7392B9] py-2 px-4 mt-7 mb-10 rounded-lg cursor-pointer hover:text-[#7392B9] hover:bg-white">查看更多</button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    )
}