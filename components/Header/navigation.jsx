import React from "react";
import Link from 'next/link';
import initTranslations from '../../app/i18n';

const Navigation = async ({ lng }) => {
  const { t } = await initTranslations(lng, ['header']);
  return (
    <nav className="hidden xl:flex my-auto gap-[20px] text-white-500">
      <Link href="#about-us" >
        {t('header.about-us')}
      </Link>
      <Link href="#taste">
        {t('header.beer')}
      </Link>
      <Link href="#best-offers">
        {t('header.promotions')}
      </Link>
      <Link href="#contacts">
        {t('header.contacts')}
      </Link>
    </nav>
  );
};

export default Navigation;