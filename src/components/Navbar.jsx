import { Link } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { selectLightMode, setColorMode } from "../redux/colorSlice";
import { useEffect, useState } from "react";
import HamMenu from "./HamMenu";
import CartSummary from "./CartSummary";
import SetColorMode from "./SetColorMode";

const NavBarContent = ({ isMobile = false}) => (
    <div
        className={`navbar ${
            isMobile ? "flex flex-col gap-4 p-4 ms-15" : "grid md:grid-cols-2 px-30 py-2 bg-white"
        } text-black w-full`}
    >
        <Link to="/" className="hover:text-[#7392B9] text-[20px]">首頁</Link>
        <div
            className={`${
                isMobile ? "flex flex-col items-start gap-4" : "flex justify-end items-center gap-4"
            }`}
        >
            {!isMobile && <SetColorMode />}
            <Link to="/SignIn" className="hover:text-[#7392B9] text-[20px]">登入</Link>
            <Link to="/LogIn" className="hover:text-[#7392B9] text-[20px]">註冊</Link>
            <CartSummary />
            {isMobile && <SetColorMode />}
        </div>
    </div>
);

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const lightMode = useSelector(selectLightMode);
    const dispatch = useDispatch();

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        const isLightMode = savedTheme === "light";
        dispatch(setColorMode(isLightMode)); // 同步 Redux
        document.documentElement.setAttribute("data-theme", savedTheme);
    }, [dispatch]);
    
    localStorage.removeItem("theme");

    const toggleTheme = () => {
        const newTheme = lightMode ? "dark" : "light";
        document.documentElement.setAttribute("data-theme", newTheme);
        localStorage.setItem("theme", newTheme);
        dispatch(setColorMode(!lightMode)); // 更新 Redux 狀態
    };

    return (
        <>
            {/* 桌面導覽列 */}
            <div className="hidden md:flex justify-around bg-blue">
                <NavBarContent onToggleTheme={toggleTheme} />
            </div>

            {/* 手機導覽列 */}
            <div className="md:hidden">
                <HamMenu
                    className="absolute top-4 left-4 z-50"
                    onClick={() => setIsOpen(!isOpen)}
                    isOpen={isOpen}
                />
                <div
                    className={`fixed top-0 left-0 z-40 h-full w-64 bg-white p-4 transform transition-transform duration-300 ${
                        isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                >
                    <h2 className="text-gray-800 text-xl font-bold mt-15 ms-10">Menu</h2>
                    <NavBarContent isMobile onToggleTheme={toggleTheme} />
                </div>
                {isOpen && (
                    <div
                        className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-30"
                        onClick={() => setIsOpen(false)}
                    ></div>
                )}
            </div>
        </>
    );
}
