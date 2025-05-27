import { useNavigate } from 'react-router';

export default function UserInfo(props) {
    const navigate = useNavigate();

    const goToProfile = () => {
        navigate("/LogIn");
    };

    return (
        <nav
            onClick={goToProfile}
            style={{ ...props.style }}
            className="cursor-pointer flex flex-col items-center group"
        >
            <img src="/img/person.png" className="w-[13px]"/>
            <p className="hidden md:block text-[0.5rem] md:text-[0.7rem] opacity-60 mt-[-0.2rem] md:mt-[0.3rem] text-current">
                請登入
            </p>
        </nav>
    );
}
