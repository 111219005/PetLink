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
        <div className="w-full flex flex-col items-center">
            <div className="relative w-[95%] xs:ms-10 sm:w-[400px] md:w-[660px] lg:w-[950px] xl:w-[940px] 2xl:w-[1250px] text-left">
                {/* Filter Icon for Mobile */}
                <div className="h-10">
                    <button
                        className="absolute right-2 top-2 flex items-center justify-center text-white rounded-full w-10 h-10 md:hidden"
                        onClick={() => setIsFilterOpen(!isFilterOpen)}
                    >
                        {/* 篩選圖標或文字 */}
                        <img src="/img/filter.png" />
                    </button>
                </div>

                {/* Filter Content */}
                <div
                    className={`filter w-full transition-all duration-300 ${isFilterOpen ? "max-h-screen opacity-100" : "max-h-0 overflow-hidden opacity-0"} md:max-h-none md:opacity-100 md:block`}
                >
                    <h3 className="mt-5">條件篩選</h3>

                    {/* 性別篩選 */}
                    <div className="flex flex-col md:flex-row gap-1 md:gap-4 my-2 justify-start items-start md:items-center">
                        <h3 className="text-lg font-bold">性別</h3>
                        <div className="flex gap-2">
                            {genders.map((item) => (
                                <button
                                    key={item}
                                    className={`text-[12px] md:text-base rounded-lg md:py-2 py-1 md:px-4 px-2 ${gender.includes(item) ? "bg-[#7392B9] text-white" : "bg-[#9AA57C] text-white"}`}
                                    onClick={() => toggleSelection(gender, item, setGender)}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 體型篩選 */}
                    <div className="flex flex-col md:flex-row gap-1 md:gap-4 my-2 justify-start items-start md:items-center">
                        <h3 className="text-lg font-bold">體型</h3>
                        <div className="flex gap-2">
                            {sizes.map((item) => (
                                <button
                                    key={item}
                                    className={`text-[12px] md:text-base rounded-lg md:py-2 py-1 md:px-4 px-2 ${size.includes(item) ? "bg-[#7392B9] text-white" : "bg-[#9AA57C] text-white"}`}
                                    onClick={() => toggleSelection(size, item, setSize)}
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* 年齡篩選 */}
                    <div className="flex flex-col md:flex-row gap-1 md:gap-4 my-2 justify-start items-start md:items-center">
                        <h3 className="text-lg font-bold">年齡</h3>
                        <div className="flex gap-2">
                            {ageRanges.map((range) => (
                                <button
                                    key={range}
                                    className={`text-[12px] md:text-base rounded-lg md:py-2 py-1 md:px-4 px-2 ${ageRange.includes(range) ? "bg-[#7392B9] text-white" : "bg-[#9AA57C] text-white"}`}
                                    onClick={() => toggleSelection(ageRange, range, setAgeRange)}
                                >
                                    {range}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
