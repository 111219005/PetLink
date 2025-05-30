import React, { useState } from "react";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems, removeCartItems, selectCartItems } from "../redux/cartSlice";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import CartHeader from "../components/CartHeader";
import DonateBox from "../components/DonateBox";

export default function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const getTotalPrice = () => {
        return (cartItems.length > 0)
            ? cartItems.reduce((sum, item) => sum + item.qty, 0)
            : 0;
    };

    const [selectedItems, setSelectedItems] = useState(
        cartItems.reduce((acc, item) => {
            acc[item.id] = false; // 預設所有項目未被選中
            return acc;
        }, {})
    );
    const handleCheckboxChange = (id) => {
        setSelectedItems({
            ...selectedItems,
            [id]: !selectedItems[id], // 切換選中狀態
        });
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
            <CartHeader />

            <div className="flex flex-col items-center w-full">
                <div className="flex flex-col items-center">
                    {/* Cart Items */}
                    {cartItems.length === 0 ? (
                        <div className="flex justify-center items-center h-90"><h2>Cart is empty</h2></div>
                    ) : (
                        cartItems.map(item => (
                            <li key={item.id} className={`xl:grid-cols-5 grid justify-between items-center py-[25px] px-12 mb-4 cart-item rounded-md ${selectedItems[item.id] ? "cart-item-yes" : "cart-item-no"}`}>
                                <div className=" flex items-center flex-row">
                                    <input type="checkbox" defaultChecked className="checkbox checkbox-item checkbox-sm" checked={selectedItems[item.id]} onChange={() => handleCheckboxChange(item.id)} />
                                    <Link to={`/dog/${item.id}`}>
                                        <img className="w-[170px] h-[100px] rounded-sm flex-1 object-cover" src={item.image} alt={item.name} />
                                    </Link>
                                </div>

                                <div className="ml-4 flex-8 w-auto text-left col-span-1">
                                    <div className="text-[20px] mb-1">{item.name}</div>
                                    <div className="text-[15px] mb-1">{item.area}</div>
                                    <div className="text-[15px]">{item.personality}</div>
                                </div>
                                <div className="col-span-3">
                                    <DonateBox item={item} />
                                </div>
                                {/* <div className="xl:col-span-3 flex justify-center items-center">test</div> */}
                            </li>
                        ))
                    )}

                    <div className="cart-Checkout flex flex-row p-4 justify-end items-center h-18">
                    {/* Total */}
                    <div className="flex justify-between items-center me-3">
                        <div className="text-[20px]">總金額 (已選{Object.values(selectedItems).filter(Boolean).length})：</div>
                        <div className="text-[30px]">${getTotalPrice()}</div>
                    </div>

                    {/* Checkout Button */}
                    <button
                        className="checkout-btn shadow-none w-50 h-10 text-base flex justify-center items-center"
                    >
                        {/* <CartIcon strokeWidth={1} className="w-5 h-5 md:w-6 md:h-6 text-current group-hover:scale-105 transition-transform" /> */}
                        <span className="text-[20px]">去轉帳</span>
                    </button>
                    </div>
                </div>
            </div>

            <div className="h-10"></div>
            <Footer />
        </div>
    )
}