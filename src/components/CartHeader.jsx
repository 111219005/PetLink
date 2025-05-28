export default function CartHeader() {
    return (
        <>
            <div className="md:flex justify-center items-center hidden mb-5">
                <div className="cart-header grid lg:grid-cols-3 xl:grid-cols-5 cart-title py-4 lg:px-12 md:px-6 items-center rounded-md">
                    <div className="lg:col-span-1">
                    <input type="checkbox" defaultChecked className="checkbox checkbox-header checkbox-sm" />
                    <a className="pl-5">全選</a>
                    </div>
                    <div className="grid lg:grid-cols-5 md:grid-cols-4 grid-cols-3 text-center lg:col-span-2 xl:col-start-3 xl:col-end-6">
                        <div className="flex items-center justify-center"><a className="cart-label">食物</a></div>
                        <div className="flex items-center justify-center"><a className="cart-label">醫療</a></div>
                        <div className="flex items-center justify-center"><a className="cart-label">生活用品</a></div>
                        <div className="flex items-center justify-center"><a className="cart-label">娛樂訓練</a></div>
                        <div className="flex items-center justify-center"><a className="cart-label">操作</a></div>
                    </div>
                </div>
            </div>
        </>
    );
}
