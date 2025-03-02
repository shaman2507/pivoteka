import initTranslations from '../../app/i18n';
import Link from 'next/link';
// import { useRouter } from 'next/navigation';

const ChangeLang = async ({ lng, className, onClick }) => {
    const { t } = await initTranslations(lng, ['langSwitcher']);
    // const currentLocale = i18nConfig.language;
    // const router = useRouter();
    // const currentPathname = usePathname();
    
    // const handleChangeLocale = value => {
    //     const newLocale = value;
    //     if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
    //         router.push('/' + newLocale + currentPathname);
    //     } else {
    //         router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
    //     }

    //     router.refresh();
    // };

    // const currentLang = langList.find(lang => lang.value === currentLocale);

    return (
        <div className='hidden xl:flex my-auto text-white-500 border-b' >
            <Link className={`${className}`} href={`/${lng}`} onClick={onClick}>
                {t('langSwitcher')}
            </Link>
        </div>
    );
};



export default ChangeLang;