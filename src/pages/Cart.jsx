import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems, removeCartItems, selectCartItems } from "../redux/cartSlice";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";

export default function Cart() {
    const dispatch = useDispatch();
   const cartItems = useSelector(selectCartItems);

   const getTotalPrice = () => {
      return (cartItems.length > 0)
         ? cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
         : 0;
   };

    return (
        <div className="cart-bg">
            <Navbar />
            <TopBar />
            <div className="flex justify-center items-center">
                <div className="cart-bg cart-title mt-5">
                    <h1 className="text-black">收藏清單</h1>
                </div>
            </div>
            <div className="h-3"></div>

            <div className="modal-box max-w-md">
                <h3 className="font-thin text-[2rem] mb-4 text-left">Shopping Basket</h3>
                {/* Cart Items */}
                {cartItems.length === 0 ? (
                    <div className="text-center">Cart is empty</div>
                ) : (
                    cartItems.map(item => (
                        <li key={item.id} className="flex justify-between items-center pb-4 mb-4 border-b border-gray-400">
                            <Link to={`/products/id/${item.id}?qtyFromBasket=${item.qty}`}>
                                <img className="max-w-16 max-h-16 flex-1 cursor-pointer" src={item.image} alt={item.name} />
                            </Link>
                            <div className="ml-8 flex-8 w-48 text-left">
                                <div className="font-medium mb-1">{item.name}</div>
                                <div className="flex items-center space-x-2">
                                    <span>Qty :</span>
                                    <select
                                        defaultValue={item.qty}
                                        onChange={(e) =>
                                            dispatch(addCartItems({
                                                id: item.id,
                                                name: item.name,
                                                image: item.image,
                                                price: item.price,
                                                stock: item.stock,
                                                qty: Number(e.target.value),
                                            }))
                                        }
                                        className="select select-bordered select-xs w-[3.5rem] px-2"
                                    >
                                        {[...Array(item.stock ?? 0).keys()].map((x) => (
                                            <option key={x + 1} value={x + 1}>{x + 1}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="text-right">
                                <div className="font-bold text-base">${item.price * item.qty}</div>
                                <div
                                    className="text-xl opacity-60 cursor-pointer text-yellow-500"
                                    onClick={() => dispatch(removeCartItems(item.id))}
                                >
                                    ×
                                </div>
                            </div>
                        </li>
                    ))
                )}

                {/* Total */}
                <div className="flex justify-between items-center mt-4">
                    <div className="font-semibold">Total</div>
                    <div className="font-bold text-right">${getTotalPrice()}</div>
                </div>

                {/* Checkout Button */}
                <button
                    className="btn btn-primary shadow-none w-full text-base font-light py-3 mt-8 flex justify-center items-center"
                >
                    {/* <CartIcon strokeWidth={1} className="w-5 h-5 md:w-6 md:h-6 text-current group-hover:scale-105 transition-transform" /> */}
                    <span className="font-thin ml-3">START CHECKOUT</span>
                </button>

                {/* Close button */}
                <div className="absolute right-4 top-4 modal-action mt-4">
                    <button className="btn btn-sm font-thin border-none bg-[#1f282b] shadow-none">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-7 h-7 md:w-8 md:h-8 text-current group-hover:scale-105 transition-transform">
                            <path fill="#777c76" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" /></svg>
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    )
}