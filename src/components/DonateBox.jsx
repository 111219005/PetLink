import { useDispatch, useSelector } from "react-redux";
import { addCartItems, removeCartItems, selectCartItems } from "../redux/cartSlice";

export default function CartItem({ item, type }) {
    const dispatch = useDispatch();

    const handleIncrement = (item) => {
        dispatch(addCartItems({ ...item, qty: item.qty + 100 })); // 增加數量
    };
    const handleDecrement = (item) => {
        if (item.qty > 100) {
            dispatch(addCartItems({ ...item, qty: item.qty - 100 })); // 減少數量，但最低為 100
        }
    };

    return (
        <div className="w-auto">
            <div className="flex items-center justify-center">
                <button
                    onClick={() => handleDecrement(item)}
                    className="text-black py-1 rounded w-4 donate h-[44px]"
                >
                    -
                </button>
                <input
                    type="text"
                    readOnly
                    value={item.qty}
                    className="w-12 text-center donate rounded mx-1 text-black py-1 h-[44px]"
                />
                <button
                    onClick={() => handleIncrement(item)}
                    className="donate text-black py-1 rounded w-4 h-[44px]"
                >
                    +
                </button>
            </div>
            <div className="text-[10px] flex items-center justify-center mt-2">需求：{item.food}</div>
        </div>
    )
}