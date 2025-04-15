import React, { useState } from "react";
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

    return (
        <div className="flex items-center justify-center">
            {/* Filter Icon for Mobile */}
            <button
                className="block md:hidden justify-end "
                onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
                
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
