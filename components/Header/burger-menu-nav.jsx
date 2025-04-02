'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { inter } from '@/fonts';
import initTranslations from '../../app/i18n';

const BurgerMenuNav = ({ lng, closeBurgerMenu }) => {
  const [t, setT] = useState(() => (key) => key);

  useEffect(() => {
    const loadTranslations = async () => {
      const { t } = await initTranslations(lng, ['header']);
      setT(() => t);
    };
    loadTranslations();
  }, [lng]);

  return (
    <nav className="flex flex-col gap-[12px]">
      <Link href="#about-us" onClick={closeBurgerMenu} className={`${inter.className} font-medium text-[16px] leading-[1.2] text-white-500`}>
        {t('header.about-us')}
      </Link>
      <Link href="#taste" onClick={closeBurgerMenu} className={`${inter.className} font-medium text-[16px] leading-[1.2] text-white-500`}>
        {t('header.beer')}
      </Link>
      <Link href="#best-offers" onClick={closeBurgerMenu} className={`${inter.className} font-medium text-[16px] leading-[1.2] text-white-500`}>
        {t('header.promotions')}
      </Link>
      <Link href="#contacts" onClick={closeBurgerMenu} className={`${inter.className} font-medium text-[16px] leading-[1.2] text-white-500`}>
        {t('header.contacts')}
      </Link>
    </nav>
  );
};

export default BurgerMenuNav;
