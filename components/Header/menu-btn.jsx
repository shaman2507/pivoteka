'use client';

import { useState } from 'react';
import { TbMenu } from "react-icons/tb";
import BurgerMenu from "./burger-menu";

const MenuBtn = () => {
    const [visibleBurgerMenu, setVisibleBurgerMenu] = useState(false);
    const closeBurgerMenu = () => {
        setVisibleBurgerMenu(false);
    };

    return (
        <div className="flex my-auto w-[48px] h-[48px] rounded-full bg-orange-600">
            <button onClick={() => {
                setVisibleBurgerMenu(true);
            }}
            className="block mx-auto transition-all duration-300 hover:text-red-700 xl:hidden">
                <TbMenu size="24"/>
            </button>
            <BurgerMenu isVisible={visibleBurgerMenu} closeBurgerMenu={closeBurgerMenu} />
        </div>
    );
};

export default MenuBtn;