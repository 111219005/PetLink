import { useDispatch, useSelector } from "react-redux";
import { addCartItems, removeCartItems, selectCartItems } from "../redux/cartSlice";
import CancelIcon from "../components/CancelIcon";

export default function CartItem({ item }) {
    const dispatch = useDispatch();

    const handleIncrement = (type) => {
        const numericValue = parseInt(item[type].replace('$', ''));
        dispatch(addCartItems({
            ...item,
            [type]: `$${numericValue + 100}`, // 保留 `$` 符號
        }));
    };

    const handleDecrement = (type) => {
        const numericValue = parseInt(item[type].replace('$', ''));
        if (numericValue > 0) {
            dispatch(addCartItems({
                ...item,
                [type]: `$${numericValue - 100}`, // 保留 `$` 符號
            }));
        }
    };

    return (
        <div className="grid grid-cols-5 items-center justify-center w-auto">
            {/* <div className="flex flex-row"> */}
            <div className="grid grid-cols-4 col-span-4 items-center justify-center">
                {['food', 'daily', 'medical', 'train'].map((type) => (
                    <div key={type} className="flex flex-col items-center justify-center">

                        <div className="flex items-center justify-between mb-2">
                            <button
                                onClick={() => handleDecrement(type)}
                                className="text-black py-1 rounded w-4 donate h-[44px]"
                            >
                                -
                            </button>
                            <input
                                type="text"
                                readOnly
                                value={item[type].replace('$', '')} // 顯示時移除 `$`
                                className="w-12 text-center donate rounded mx-1 text-black py-1 h-[44px] text-[13px]"
                            />
                            <button
                                onClick={() => handleIncrement(type)}
                                className="donate text-black py-1 rounded w-4 h-[44px]"
                            >
                                +
                            </button>
                        </div>
                        <div className="text-[10px] flex items-center justify-cente">需求：{item[type]}</div>
                    </div>

                ))}</div>
            <div
                className="text-xl cursor-pointer flex justify-center items-center"
                onClick={() => dispatch(removeCartItems(item.id))}
            >
                <CancelIcon size={25} />
            </div>
        </div>
        // </div>
    )
}