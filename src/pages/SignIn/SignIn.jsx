import './SignIn.css'
import { useNavigate } from 'react-router';
export default function SignIn() {
    const navigate = useNavigate();
    return (
        <>
            <div className="content">
            <img className="bg" src="/img/nature.png" alt="背景圖片" />
            <div className="back" onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>
                <img className="arrow" src="/img/arrow.png" alt="返回箭頭" />
                <h2 className="SignIn-h">登入</h2>
            </div>
            <form className="area">
                <div className="name">
                    <label htmlFor="name">用戶名稱</label>
                    <input type="text" id="name" name="name" required />
                </div>
                <div className="code">
                    <label htmlFor="password">密碼：</label>
                    <input type="password" id="password" name="password" required />
                    <img src="/img/eye.png" className="eye" alt="顯示密碼" />
                </div>
                <div className="function">
                    <h6 className="forget">忘記密碼？</h6>
                    <h6 className="regist">註冊</h6>
                </div>
                <div className="btn">
                    <button className="SignIn">登入</button>
                </div>
                <div className="social-login">
                    <div className="divider">
                        <div className="line"></div>
                        <span>or</span>
                        <div className="line"></div>
                    </div>

                    <div className="social-buttons">
                        <a href="#" className="social-button">
                            <img src="/img/facebook-icon.png" alt="Facebook" />
                        </a>
                        <a href="#" className="social-button">
                            <img src="/img/google-icon.png" alt="Google" />
                        </a>
                        <a href="#" className="social-button">
                            <img src="/img/apple-icon.png" alt="Apple" />
                        </a>
                    </div>
                </div>
            </form>
        </div>
        </>
    )
}
