import React from "react";
import initTranslations from '../../app/i18n';

const Navigation = async ({ lng }) => {
  const { t } = await initTranslations(lng, ['header']);
  return (
    <nav className="hidden">
      <p>{t('header.about-us')}</p>
      <p>{t('header.beer')}</p>
      <p>{t('header.promotions')}</p>
      <p>{t('header.contacts')}</p>
    </nav>
  );
};

export default Navigation;