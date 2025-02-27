'use client'

import Link from 'next/link';
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useDisableBodyScroll, useClickOutside } from '@/hooks/hooks';
import { IoCloseOutline } from "react-icons/io5";

const BurgerMenu = ({ isVisible, closeBurgerMenu }) => {
    const { t } = useTranslation('header');
    const burgerMenuRef = useRef(null);
    useDisableBodyScroll(isVisible);
    useClickOutside(isVisible, burgerMenuRef, closeBurgerMenu);

    return (
        <div className={`z-20 w-full h-screen fixed top-0 right-0 transition-all duration-300 ${
            isVisible ? 'translate-x-0' : 'translate-x-[100%]'
        }`}>
            <div ref={burgerMenuRef} className={`w-[100%] h-screen py-7 px-4 absolute top-0 right-0 bg-white md:w-[360px] ${
                isVisible ? 'translate-x-0' : 'right-[-100%]'
            } transition-all duration-300`}>
                <button
                    onClick={closeBurgerMenu}
                    className="block ml-auto text-red-900 transition-all duration-300 hover:text-red-700"
                >
                    <IoCloseOutline size="24" />
                </button>

                <nav className="flex flex-col gap-4">
                    <Link href="#">
                        {t('header.about-us')}
                    </Link>
                    <Link href="#">
                        {t('header.beer')}
                    </Link>
                    <Link href="#">
                        {t('header.promotions')}
                    </Link>
                    <Link href="#">
                        {t('header.contacts')}
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default BurgerMenu;