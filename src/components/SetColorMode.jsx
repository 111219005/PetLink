import ModeIcon from "./ModeIcon";
import { useSelector, useDispatch } from "react-redux";
import { selectLightMode, setColorMode } from "../redux/colorSlice.js";

export default function SetColorMode() {
    const lightMode = useSelector(selectLightMode); // 從 Redux 取得當前模式
    const dispatch = useDispatch();

    const toggleColor = () => {
        const isLightMode = lightMode;
        dispatch(setColorMode(!isLightMode));

        // 使用 DaisyUI 的 `data-theme` 切換主題
        if (isLightMode) {
            document.documentElement.setAttribute("data-theme", "dark");
        } else {
            document.documentElement.setAttribute("data-theme", "light");
        }
    };

    return (
        <div className="flex justify-center items-center">
            <button
                onClick={toggleColor}
                className="text-black hover:text-[#7392B9] transition-colors duration-300"
            >
                {lightMode ? (
                    <ModeIcon size={25} /> // Dark Mode 圖示
                ) : (
                    <img src="/img/sun.svg" alt="light mode" /> // Light Mode 圖示
                )}
            </button>
        </div>
    );
}
