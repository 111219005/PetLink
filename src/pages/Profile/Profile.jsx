import { useNavigate } from 'react-router'; // 用 react-router-dom 的 useNavigate
import '../Profile/Profile.css';
import { useEffect, useState } from 'react';

export default function Profile() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                navigate('/login'); // 未登入導回登入頁
            }
        });

        return () => unsubscribe(); // 清除監聽
    }, [navigate]);

    const handleSignOut = () => {
        firebase.auth().signOut().then(() => {
            navigate('/login');
        });
    };

    return (
        <div className="content">
            <img className="bg" src="/img/nature.png" alt="背景圖片" />
            <div className="back" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
                <img className="arrow" src="/img/arrow.png" alt="返回箭頭" />
                </div>
                <div className="area">
                    <div className="card-header">
                        個人資訊
                    </div>
                    <div className="card-body">
                    <div className="avatar-bg">
                        <img
                            className="avatar-img"
                            src={`https://api.dicebear.com/7.x/pixel-art/svg?seed=${Math.floor(Math.random() * 10000)}`}
                            alt="使用者大頭貼"
                        />
                    </div>
                    <div className="user-info">
                        <p className="user-name">{user?.displayName || "使用者"}</p>
                        <p className="user-email">{user?.email}</p>
                        <button type="button" className="btn signout-btn" onClick={handleSignOut}>
                            登出
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
