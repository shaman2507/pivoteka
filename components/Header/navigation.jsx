import React from "react";
import Link from 'next/link';
import initTranslations from '../../app/i18n';

const Navigation = async ({ lng }) => {
  const { t } = await initTranslations(lng, ['header']);
  return (
    <nav className="hidden xl:flex my-auto gap-[20px] text-white-500 ">
      <Link href="#about-us" className="hover:text-yellow-600 active:text-yellow-700 disabled:text-yellow-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200">
        {t('header.about-us')}
      </Link>
      <Link href="#taste" className="hover:text-yellow-600 active:text-yellow-700 disabled:text-yellow-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200">
        {t('header.beer')}
      </Link>
      <Link href="#best-offers" className="hover:text-yellow-600 active:text-yellow-700 disabled:text-yellow-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200">
        {t('header.promotions')}
      </Link>
      <Link href="#contacts" className="hover:text-yellow-600 active:text-yellow-700 disabled:text-yellow-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200">
        {t('header.contacts')}
      </Link>
    </nav>
  );
};

export default Navigation;