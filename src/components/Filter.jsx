import React, { useState, useEffect } from "react";
// import { FaFilter } from "react-icons/fa"; // 安裝 react-icons 使用篩選圖標

export default function Filter({ gender, size, ageRange, setGender, setSize, setAgeRange }) {
    const [isFilterOpen, setIsFilterOpen] = useState(false); // 控制篩選區塊顯示/隱藏

    const ageRanges = ["一歲以下", "一歲至三歲", "三歲至七歲", "七歲以上"];
    const sizes = ["大型", "中型", "小型"];
    const genders = ["公", "母"];

    const toggleSelection = (currentList, value, setFunction) => {
        if (currentList.includes(value)) {
            setFunction(currentList.filter((item) => item !== value)); // 移除已選中的值
        } else {
            setFunction([...currentList, value]); // 添加新值
        }
    };

    // 設置初始篩選狀態，依據螢幕大小
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsFilterOpen(true); // md 以上展開
            } else {
                setIsFilterOpen(false); // md 以下關閉
            }
        };
        handleResize(); // 初次設定
        window.addEventListener("resize", handleResize); // 監聽螢幕大小變化
        return () => window.removeEventListener("resize", handleResize); // 清除事件監聽
    }, []);

    return (
        <div className="relative w-full">
            {/* Filter Icon for Mobile */}
            <button
                className="absolute right-4 top-2 flex items-center justify-center bg-[#7392B9] text-white rounded-full w-10 h-10 md:hidden"
                onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
                {/* 篩選圖標或文字 */}
                <img src="/img/filter.png"/>
            </button>

            {/* Filter Content */}
            <div
                className={`filter w-full md:block transition-all duration-300 ${
                    isFilterOpen ? "max-h-screen opacity-100" : "max-h-0 overflow-hidden opacity-0"
                }`}
            >
                <h3 className="mt-5">條件篩選</h3>

                {/* 性別篩選 */}
                <div className="flex gap-4 my-2 justify-start items-center">
                    <h3>性別</h3>
                    {genders.map((item) => (
                        <button
                            key={item}
                            className={`rounded-lg py-1 px-2 ${
                                gender.includes(item) ? "bg-[#7392B9] text-white" : "bg-[#9AA57C] text-white"
                            }`}
                            onClick={() => toggleSelection(gender, item, setGender)}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* 體型篩選 */}
                <div className="flex gap-4 my-2 justify-start items-center">
                    <h3>體型</h3>
                    {sizes.map((item) => (
                        <button
                            key={item}
                            className={`rounded-lg py-1 px-2 ${
                                size.includes(item) ? "bg-[#7392B9] text-white" : "bg-[#9AA57C] text-white"
                            }`}
                            onClick={() => toggleSelection(size, item, setSize)}
                        >
                            {item}
                        </button>
                    ))}
                </div>

                {/* 年齡篩選 */}
                <div className="flex gap-4 my-2 justify-start items-center">
                    <h3>年齡</h3>
                    {ageRanges.map((range) => (
                        <button
                            key={range}
                            className={`rounded-lg py-1 px-2 ${
                                ageRange.includes(range) ? "bg-[#7392B9] text-white" : "bg-[#9AA57C] text-white"
                            }`}
                            onClick={() => toggleSelection(ageRange, range, setAgeRange)}
                        >
                            {range}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
