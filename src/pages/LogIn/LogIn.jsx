import { Link } from 'react-router';
import './LogIn.css'
import { useNavigate } from 'react-router';
export default function LogIn() {
    const navigate = useNavigate();
    return (
        <>
            {/* <div className="content">
                <img className="bg" src="/img/nature.png" alt="背景圖片" />
                <div className="back" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>
                    <img className="arrow" src="/img/arrow.png" alt="返回箭頭" />
                    <h2 className="LogIn-h">註冊</h2>
                </div>
                <form className="area">
                    <div className="name">
                        <label htmlFor="name">使用者名稱</label>
                        <input type="text" id="name" name="name" required />
                    </div>
                    <div className="email">
                        <label htmlFor="email">電子信箱</label>
                        <input type="email" id="email" name="email" required />
                    </div>
                    <div className="code">
                        <label htmlFor="password">密碼</label>
                        <input type="password" id="password" name="password" required />
                        <img src="/img/eye.png" className="eye" alt="顯示密碼" />
                    </div>
                    <div className="sure">
                        <label htmlFor="password">確認密碼</label>
                        <input type="password" id="password" name="password" required />
                        <img src="/img/eye.png" className="eye" alt="顯示密碼" />
                    </div>
                    <div className="function">
                        <Link to="/SignIn">
                            <h6 className="sign">登入</h6>
                        </Link>
                    </div>
                    <div className="btn">
                        <button className="LogIn">註冊</button>
                    </div>
                </form>
            </div> */}
        </>
    )
}