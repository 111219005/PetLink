import React, { useState } from "react";
import { Link } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addCartItems, removeCartItems, selectCartItems } from "../redux/cartSlice";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar";
import TopBar from "../components/TopBar";
import CartHeader from "../components/CartHeader";
import CancelIcon from "../components/CancelIcon";
import DonateBox from "../components/DonateBox";

export default function Cart() {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);

    const getTotalPrice = () => {
        return (cartItems.length > 0)
            ? cartItems.reduce((sum, item) => sum + item.price * item.qty, 0)
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

    // const [counts, setCounts] = useState(
    //     data.map(() => 0) // 初始化每個項目的數量為 0
    // );
    // // 處理數量增減
    // const handleIncrement = (index) => {
    //     const newCounts = [...counts];
    //     newCounts[index] += 100;
    //     setCounts(newCounts);
    // };
    // const handleDecrement = (index) => {
    //     const newCounts = [...counts];
    //     if (newCounts[index] > 0) {
    //         newCounts[index] -= 100;
    //     }
    //     setCounts(newCounts);
    // };

    // 處理數量增減


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
                                <div className="col-span-1 flex items-center flex-row">
                                    <input type="checkbox" defaultChecked className="checkbox checkbox-item checkbox-sm me-10" checked={selectedItems[item.id]} onChange={() => handleCheckboxChange(item.id)} />
                                    <Link to={`/dog/${item.id}`}>
                                        <img className="w-[170px] h-[100px] rounded-sm flex-1 object-cover" src={item.image} alt={item.name} />
                                    </Link>
                                </div>

                                <div className="ml-4 flex-8 w-48 text-left">
                                    <div className="text-[20px] mb-1">{item.name}</div>
                                    <div className="text-[15px] mb-1">{item.area}</div>
                                    <div className="text-[15px]">{item.personality}</div>
                                </div>

                                <div className="grid grid-cols-5 col-start-3 col-end-6">
                                    <DonateBox item={item} type="food" />
                                    <DonateBox item={item} type="medical" />
                                    <DonateBox item={item} type="daily" />
                                    <DonateBox item={item} type="train" />
                                    <div
                                        className="text-xl cursor-pointer flex justify-center items-center"
                                        onClick={() => dispatch(removeCartItems(item.id))}
                                    >
                                        <CancelIcon size={25} />
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
                </div>
            </div>

            <div className="h-10"></div>
            <Footer />
        </div>
    )
}