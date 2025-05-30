import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addCartItems } from "../redux/cartSlice";
import "react-toastify/dist/ReactToastify.css";

export default function AddToBasket({ product, className }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const addToCart = () => {
        // 將產品加入 Redux 狀態
        dispatch(addCartItems({
            id: product.id,
            name: product.name,
            image: product.cover,
            area: product.area,
            personality: product.personality,
            food: product.food,
            daily: product.daily,
            medical: product.medical,
            train: product.train,
        }));

        // 顯示通知
        toast.success(`已將 ${product.name} 加入收藏清單！`, {
            position: "bottom-right",
            className: "bg-blue-500 text-white rounded-lg shadow-lg custom-toast",
            bodyClassName: "font-bold custom-toast-body",
            progressClassName: "progress-bar-custom custom-toast-progress",
            onClick: () => {
                navigate("/cart"); // 導航到收藏清單頁面
                toast.dismiss(); // 關閉通知
            },
        });
    };

    return (
        <button onClick={addToCart} className={className} style={{ width: "100%" }}>
            加入收藏清單
        </button>
    );
}

