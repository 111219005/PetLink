import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { auth } from '../api/firebaseConfig'; 
import { onAuthStateChanged } from 'firebase/auth'; 

export default function UserInfo(props) {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const goToProfile = () => {
    if (user) {
      navigate('/Profile');
    } else {
      navigate('/LogIn');
    }
  };

  const displayName = user ? user.displayName || user.email : null;

  return (
    <nav
      onClick={goToProfile}
      style={{ ...props.style }}
      className="cursor-pointer flex flex-col items-center group"
    >
      <img src="/img/person.png" className="w-[13px]" alt="user icon" />
      <p className="hidden md:block text-[0.5rem] md:text-[0.7rem] opacity-60 mt-[-0.2rem] md:mt-[0.3rem] text-current">
        {displayName ? `Hi, ${displayName}` : '請登入'}
      </p>
    </nav>
  );
}
