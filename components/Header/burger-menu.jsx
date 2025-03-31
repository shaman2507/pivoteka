'use client'

import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useDisableBodyScroll, useClickOutside } from '@/hooks/hooks';
import { IoCloseOutline } from "react-icons/io5";
import BurgerMenuNav from './burger-menu-nav';
import LocationFooter from '../ui/location-footer';
import Logo from '../ui/logo';
import ChangeLang from './change-lang';

const BurgerMenu = ({ isVisible, closeBurgerMenu }) => {
    const { t } = useTranslation('header');
    const burgerMenuRef = useRef(null);
    useDisableBodyScroll(isVisible);
    useClickOutside(isVisible, burgerMenuRef, closeBurgerMenu);

    return (
        <div className={`z-50 w-full h-screen fixed top-0 right-0 transition-all duration-300 bg-[url(/burger-bg-mob.webp)] md:bg-[url(/burger-bg-tablet.webp)] bg-cover bg-no-repeat  ${
            isVisible ? 'translate-x-0' : 'translate-x-[100%]'
        }`}>
            <div ref={burgerMenuRef} className={`w-[100%] h-screen py-7 md:py-[40px] px-4 md:px-[80px] absolute top-0 right-0 bg-white w-[360px] md:w-[768px] bg-[linear-gradient(360deg,rgba(0,0,0,0.5)_0%,rgba(0,0,0,0.5)_38.4%)] ${
                isVisible ? 'translate-x-0' : 'right-[-100%]'
            } transition-all duration-300`}>
                <div className='w-[44px] md:w-[48px] h-[44px] md:h-[48px] mb-[32px] ml-auto rounded-full bg-yellow-500'>
                    <button
                        onClick={closeBurgerMenu}
                        className="block ml-auto w-full h-full text-red-900 transition-all duration-300 hover:text-black-600"
                    >
                        <IoCloseOutline size="24" className='m-auto' />
                    </button>
                </div>
                <div className='w-[164px] mx-auto gap-[64px]'>
                    <BurgerMenuNav />
                    <LocationFooter />
                </div>
                <div className='w-[164px] mx-auto mt-[64px] mb-[171px] md:mb-[488px]'>
                    <ChangeLang />
                </div>
                <div className='flex justify-center'>
                    <Logo className={`w-[120px] h-[120px]`} />
                </div>
                
            </div>
        </div>
    );
};

export default BurgerMenu;