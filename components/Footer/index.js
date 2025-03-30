import { inter } from '@/fonts';
import initTranslations from '../../app/i18n';
import FooterSocial from '../ui/footer-social';
import Logo from '../ui/logo';
import Link from 'next/link';

const Footer = async ({ lng }) => { 
    const { t } = await initTranslations(lng, ['footer']);
    return (
        <footer className='pt-[40px] h-[749px] bg-black-300'>
            <div className='flex flex-col items-center'>
                <div className='flex flex-col'>
                    <div className="flex">
                        <Logo className={'w-[80px] h-[80px]'} />
                    </div>
                    <div className='flex flex-col mt-[64px] gap-[24px]'>
                        <Link href="#about-us" className={`${inter.className} font-medium text-[16px] leading-[1.2] text-white-500`}>
                            {t('footer.about-us')}
                        </Link>
                        <Link href="#taste" className={`${inter.className} font-medium text-[16px] leading-[1.2] text-white-500`}>
                            {t('footer.beer')}
                        </Link>
                        <Link href="#best-offers" className={`${inter.className} font-medium text-[16px] leading-[1.2] text-white-500`}>
                            {t('footer.promotions')}
                        </Link>
                        <Link href="#contacts" className={`${inter.className} font-medium text-[16px] leading-[1.2] text-white-500`}>
                            {t('footer.contacts')}
                        </Link>
                    </div>
                </div>
                <div className='mt-[64px]'>
                    <h3 className={`${inter.className} font-normal text-[16px] leading-[1.3] text-white-500`}>
                        {t('footer.find')}
                    </h3> 
                    <FooterSocial />
                </div>
            </div>
        </footer>
    );
};

export default Footer;