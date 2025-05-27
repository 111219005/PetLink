import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";

export default function Cart(){
    return(
        <div className="cart-bg">
        <Navbar />
        <div className="flex justify-center items-center">
<div className="cart-bg mt-5"><h1 className="text-black items-start">收藏清單</h1></div>
        </div>
        
        <Footer />
        </div>
    )
}