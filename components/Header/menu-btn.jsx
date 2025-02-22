'use client';
import { TbMenu } from "react-icons/tb";
import BurgerMenu from "./burger-menu";

const MenuBtn = () => {
    const [visibleBurgerMenu, setVisibleBurgerMenu] = useState(false);
    const closeBurgerMenu = () => {
        setVisibleBurgerMenu(false);
    };

    return (
        <>
            <button onClick={() => {
                setVisibleBurgerMenu(true);
            }}
            className="block ml-auto transition-all duration-300 hover:text-red-700 lg:hidden">
                <TbMenu size="24"/>
            </button>
            <BurgerMenu isVisible={visibleBurgerMenu} closeBurgerMenu={closeBurgerMenu} />
        </>
    );
};

export default MenuBtn;