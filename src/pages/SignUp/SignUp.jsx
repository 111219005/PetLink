import { Link } from 'react-router';
import './SignUp.css';
import { useNavigate } from 'react-router';
import { useState } from 'react';
import { motion } from "framer-motion";

export default function SignUp() {
    const [isHover, setIsHover] = useState(false);
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
        <motion.div
            className="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
        >
            <img className="bg" src="/img/nature.png" alt="背景圖片" />

            <div className="back" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}>
                <img className="arrow"
                    src={isHover ? '/img/arrow-hover.png' : '/img/arrow.png'}
                    alt="返回箭頭" />
                <h2 className="SignUp-h" style={{ color: isHover ? '#9a9590' : 'black' }}>註冊</h2>
            </div>
            <motion.form
                className="area"
                onSubmit={handleSignUp}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.3 }}
            >
                {/* 使用者名稱 */}
                <div className="name">
                    <label htmlFor="name">使用者名稱</label>
                    <input type="text" id="name" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>

                {/* 電子信箱 */}
                <div className="email">
                    <label htmlFor="email">電子信箱</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                {/* 密碼 */}
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

                {/* 確認密碼 */}
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
                    <motion.button
                        className="SignUp"
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        註冊
                    </motion.button>

                </div>
            </motion.form>
        </motion.div>

    );
}
