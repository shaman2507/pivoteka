import React from "react";
import Link from 'next/link';
import initTranslations from '../../app/i18n';

const Navigation = async ({ lng }) => {
  const { t } = await initTranslations(lng, ['header']);
  return (
    <nav className="hidden">
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
  );
};

export default Navigation;