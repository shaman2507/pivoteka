'use client';

import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { usePathname, useRouter } from 'next/navigation';
import i18nConfig from '@/i18nConfig';
import { useClickOutside } from '@/hooks/hooks';
// import { useRouter } from 'next/navigation';

const langList = [
    {
        title: 'ENG',
        value: 'en',
    },
    {
        title: 'MNE',
        value: 'me',
    },
];

const ChangeLang = () => {
    const { i18n } = useTranslation();
    const currentLocale = i18n.language;
    const router = useRouter();
    const currentPathname = usePathname();
    const langListRef = useRef(null);
    const buttonRef = useRef(null);
    const [showLangList, setShowLangList] = useState(false);
    const close = () => {
        if (showLangList) {
            setShowLangList(false);
        }
    };
    useClickOutside(showLangList, [buttonRef, langListRef], close);

    const handleChangeLocale = value => {
        const newLocale = value;
        // set cookie for next-i18n-router
        const days = 30;
        const date = new Date();
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
        const expires = date.toUTCString();
        document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

        // redirect to the new locale path
        if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
            router.push('/' + newLocale + currentPathname);
        } else {
            router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale}`));
        }

        router.refresh();
    };

    const currentLang = langList.find(lang => lang.value === currentLocale);
    const arrowIconStyle = {
        transform: showLangList ? 'rotate(-180deg)' : 'rotate(0deg)',
        transition: 'transform 0.3s ease',
    };

    return (
        <div className='my-auto w-[34px] text-white-500 border-b' >
            <button ref={buttonRef}
                className="flex items-center"
                onClick={() => {
                    setShowLangList(!showLangList);
                }}
            >
                {currentLang && (
                    <>
                        <span>{currentLang.title}</span>
                    </>
                )} 
            </button>
            {showLangList && (
                <div
                    ref={langListRef}
                    className='absolute w-[75px]'
                >
                    {langList.map(lang => {
                        return (
                            <button
                                key={lang.value}
                                className={`flex ${lang.value === currentLocale ? 'border-b disabled' : ''}`}
                                onClick={() => handleChangeLocale(lang.value)}
                                disabled={lang.value === currentLocale}
                            >
                                <span>{lang.title}</span>
                            </button>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default ChangeLang;


{/* <div className='hidden xl:flex my-auto text-white-500 border-b' >
    <Link className={`${className}`} href={`/${lng}`} onClick={onClick}>
        {t('langSwitcher')}
    </Link>
</div> */}