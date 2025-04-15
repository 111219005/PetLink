import { Link } from "react-router";
import { useState } from "react";
import HamMenu from "./HamMenu";

const NavBarContent = ({ isMobile = false }) => (
    <div
        className={`navbar ${
            isMobile ? "flex flex-col gap-4 p-4 ms-15" : "grid md:grid-cols-2 px-30 py-2 bg-white"
        } text-black w-full`}
    >
        <Link to="/">首頁</Link>
        <div
            className={`${
                isMobile ? "flex flex-col items-start gap-4" : "flex justify-end items-center gap-4"
            }`}
        >
            {!isMobile && <Link to="/"><img src="/img/moon.png" alt="dark mode" /></Link>}
            <Link to="/">登入</Link>
            <Link to="/">註冊</Link>
            <Link to="/"><img src="/img/heart.png" alt="cart" /></Link>
            {isMobile && <Link to="/"><img src="/img/moon.png" alt="dark mode" /></Link>}
        </div>
    </div>
);

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {/* 桌面導覽 */}
            <div className="hidden md:flex justify-around">
                <NavBarContent />
            </div>

            {/* 手機導覽 */}
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
                    <NavBarContent isMobile />
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
