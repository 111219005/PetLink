import { Link } from 'react-router';
import './SignUp.css';
import { useNavigate } from 'react-router';
import { useState } from 'react';

export default function SignUp() {
    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSignUp = (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('密碼與確認密碼不一致！');
            return;
        }

        window.firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            return user.updateProfile({
                displayName: username  // 把使用者名稱設定進去
            }).then(() => {
                return user.reload(); // 確保更新成功
            }).then(() => {
                console.log('註冊成功：', user);
                alert('註冊成功！');
                navigate('/');
            });
        })
        .catch((error) => {
            console.error('註冊失敗：', error);
            alert('註冊失敗：' + error.message);
        });
    };

    return (
        <div className="content">
            <img className="bg" src="/img/nature.png" alt="背景圖片" />
            <div className="back" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                <img className="arrow" src="/img/arrow.png" alt="返回箭頭" />
                <h2 className="SignUp-h">註冊</h2>
            </div>
            <form className="area" onSubmit={handleSignUp}>
                <div className="name">
                    <label htmlFor="name">使用者名稱</label>
                    <input type="text" id="name" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>
                <div className="email">
                    <label htmlFor="email">電子信箱</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>
                <div className="code">
                    <label htmlFor="password">密碼</label>
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
                        style={{ cursor: 'pointer' }}
                    />
                </div>
                <div className="sure">
                    <label htmlFor="password2">確認密碼</label>
                    <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="password2"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <img
                        src="/img/eye.png"
                        className="eye"
                        alt={showConfirmPassword ? "隱藏密碼" : "顯示密碼"}
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        style={{ cursor: 'pointer' }}
                    />
                </div>
                <div className="function">
                    <Link to="/LogIn">
                        <h6 className="sign">登入</h6>
                    </Link>
                </div>
                <div className="btn2">
                    <button type="submit" className="SignUp">註冊</button>
                </div>
            </form>
        </div>
    );
}
