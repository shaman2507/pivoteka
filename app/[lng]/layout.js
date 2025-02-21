// import '@/fonts';

import '../globals.css';

import TranslationsProvider from '@/components/Internationalization/TranslationsProvider';
import i18nConfig from '@/i18nConfig';
// import { roboto } from '@/fonts';

import initTranslations from '../i18n';
import { dir } from 'i18next';
/* I18nConfig have the same*/
//const languages = ['en', 'ua'];

export const metadata = {
  title: 'Pivoteka',
  description: 'Speak me',
};

//To generate static routes for a given set of locales
export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

const i18nNamespaces = [
  'header',
];

export default async function RootLayout({ children, params: { lng } }) {
  const { t, resources } = await initTranslations(lng, i18nNamespaces);
  return (
    <html lang="en" dir={dir(lng)}>
      <body>
        <TranslationsProvider namespaces={i18nNamespaces} locale={lng} resources={resources}>
          {children}
        </TranslationsProvider>
      </body>
    </html>
  );
}