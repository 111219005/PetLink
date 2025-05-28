import { Link } from 'react-router';
import './LogIn.css';
import { useNavigate } from 'react-router';
import { useEffect, useState } from 'react';

export default function LogIn() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();
        window.firebase.auth().signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log("登入成功：", userCredential.user);
                alert("登入成功！");
                navigate("/"); // 登入成功後導向首頁
            })
            .catch((error) => {
                alert("登入失敗：" + error.message);
            });
    };

    return (
        <div className="content">
            <img className="bg" src="/img/nature.png" alt="背景圖片" />
            <div className="back" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                <img className="arrow" src="/img/arrow.png" alt="返回箭頭" />
                <h2 className="LogIn-h">登入</h2>
            </div>
            <form className="area" onSubmit={handleLogin}>
                <div className="name">
                    <label htmlFor="name">電子郵件</label>
                    <input type="email" id="name" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="code">
                <label htmlFor="password">密碼：</label>
                <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <img
                    src="/img/eye.png"
                    className="eye"
                    alt={showPassword ? "隱藏密碼" : "顯示密碼"}
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ cursor: "pointer" }}
                />
            </div>
                <div className="function">
                    <h6 className="forget">忘記密碼？</h6>
                    <Link to="/SignUp">
                        <h6 className="regist">註冊</h6>
                    </Link>
                </div>
                <div className="btn1">
                    <button type="submit" className="LogIn">登入</button>
                </div>
                <div className="sociallogin">
                    <div className="divider">
                        <div className="line"></div>
                        <span>or</span>
                        <div className="line"></div>
                    </div>
                    <div className="socialbuttons">
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
    );
}
