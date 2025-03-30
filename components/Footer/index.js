import { inter } from '@/fonts';
import initTranslations from '../../app/i18n';
import FooterSocial from '../ui/footer-social';
import Logo from '../ui/logo';
import LocationFooter from '../ui/location-footer';
import FooterNavigation from './footer-navigation';

const Footer = async ({ lng }) => { 
    const { t } = await initTranslations(lng, ['footer']);
    return (
        <footer className='pt-[40px] h-[749px] bg-black-300'>
            <div className='w-[164px] mx-auto flex flex-col items-center'>
                <div className='flex flex-col'>
                    <div className="flex">
                        <Logo className={'w-[120px] h-[120px]'} />
                    </div>
                    <div className='flex items-center'>
                        <FooterNavigation />
                    </div>
                </div>
                <div className='mt-[64px] mb-[80px]'>
                    <div className='flex flex-col items-center'>
                        <h3 className={`${inter.className}  font-normal text-[16px] leading-[1.3] text-white-500`}>
                            {t('footer.find')}
                        </h3> 
                        <FooterSocial />
                    </div>
                    <LocationFooter />
                </div>
                <div>
                    <span className={`${inter.className} font-normal text-[16px] leading-[1.3] text-white-500`}>© 2025 Pivoteka</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;