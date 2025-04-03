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
        <div className="flex my-auto w-[48px] h-[48px] rounded-full bg-orange-600 xl:hidden">
            <button onClick={() => {
                setVisibleBurgerMenu(true);
            }}
            className="block mx-auto transition-all duration-300 text-yellow-500 hover:text-yellow-600 active:text-yellow-700 disabled:text-yellow-700 disabled:opacity-30 disabled:cursor-not-allowed xl:hidden">
                <TbMenu size="24"/>
            </button>
            <BurgerMenu isVisible={visibleBurgerMenu} closeBurgerMenu={closeBurgerMenu} />
        </div>
    );
};

export default MenuBtn;