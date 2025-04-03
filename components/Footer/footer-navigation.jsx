import Link from 'next/link';
import { inter } from '@/fonts';
import initTranslations from '../../app/i18n';

const FooterNavigation = async ({ lng }) => { 
    const { t } = await initTranslations(lng, ['footer']);
    return (
        <div className='flex flex-col gap-[24px]'>
            <Link href="#about-us" className={`${inter.className} font-medium text-[16px] leading-[1.2] text-white-500 hover:text-yellow-600 active:text-yellow-700 disabled:text-yellow-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200`}>
                {t('footer.about-us')}
            </Link>
            <Link href="#taste" className={`${inter.className} font-medium text-[16px] leading-[1.2] text-white-500 hover:text-yellow-600 active:text-yellow-700 disabled:text-yellow-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200`}>
                {t('footer.beer')}
            </Link>
            <Link href="#best-offers" className={`${inter.className} font-medium text-[16px] leading-[1.2] text-white-500 hover:text-yellow-600 active:text-yellow-700 disabled:text-yellow-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200`}>
                {t('footer.promotions')}
            </Link>
            <Link href="#contacts" className={`${inter.className} font-medium text-[16px] leading-[1.2] text-white-500 hover:text-yellow-600 active:text-yellow-700 disabled:text-yellow-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200`}>
                {t('footer.contacts')}
            </Link>
        </div>
    );
};

export default FooterNavigation;
