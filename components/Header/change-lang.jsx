'use client';

import { useState, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { usePathname, useRouter } from 'next/navigation';
import i18nConfig from '@/i18nConfig';
import { useClickOutside } from '@/hooks/hooks';
// import { useRouter } from 'next/navigation';

const langList = [
    {
        title: 'EN',
        value: 'en',
    },
    {
        title: 'ME',
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

    return (
        <div className='my-auto w-[34px] text-white-500 ' >
            <button ref={buttonRef}
                className="flex items-center mx-auto hover:text-yellow-600 active:text-yellow-700 disabled:text-yellow-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200"
                onClick={() => {
                    setShowLangList(!showLangList);
                }}
            >
                {currentLang && (
                    <>
                        <span>
                            {currentLang.title}
                        </span>
                    </>
                )} 
            </button>
            {showLangList && (
                <div
                    ref={langListRef}
                    className='absolute mt-[4px] w-[36px] text-[12px] rounded-xl border border-yellow-500 bg-black-0 p-[4px] flex flex-col gap-2 items-center'
                >
                    {langList.map(lang => {
                        return (
                            <button
                                key={lang.value}
                                className={`flex hover:text-yellow-600 transition-colors duration-200 ${lang.value === currentLocale ? 'border-b disabled' : ''}`}
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