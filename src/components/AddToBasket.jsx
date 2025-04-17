import React from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addCartItems } from "../redux/cartSlice";
import "react-toastify/dist/ReactToastify.css";

export default function AddToBasket({ product, className }) {
    const dispatch = useDispatch();

    const addToCart = () => {
        // 將產品加入 Redux 狀態
        dispatch(addCartItems({
            id: product.id,
            title: product.name,
            image: product.cover,
        }));

        // 顯示通知
        toast.success(`已將 ${product.name} 加入收藏清單！`, {
            className: "bg-blue-500 text-white rounded-lg shadow-lg custom-toast",
            bodyClassName: "font-bold custom-toast-body",
            progressClassName: "progress-bar-custom custom-toast-progress",
        });
    };

    return (
        <button onClick={addToCart} className={className}>
            加入收藏清單
        </button>
    );
}

