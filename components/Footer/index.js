import { inter } from '@/fonts';
import initTranslations from '../../app/i18n';
import FooterSocial from '../ui/footer-social';
import Logo from '../ui/logo';
import LocationFooter from '../ui/location-footer';
import FooterNavigation from './footer-navigation';

const Footer = async ({ lng }) => { 
    const { t } = await initTranslations(lng, ['footer']);
    return (
        <footer className='pt-[40px] h-[749px] md:h-[310px] xl:h-[334px] bg-black-300'>
            <div className='w-[164px] md:w-[688px] xl:w-[1160px] xlr:w-[1280px] mx-auto flex flex-col '>
                <div className='flex flex-col md:flex-row md:justify-between'>
                    <div className='flex flex-col md:flex-row-reverse '>
                        <div className="flex mx-auto md:ml-[180px] xl:ml-[412px] xlr:ml-[468px]">
                            <Logo className={'w-[120px] xl:w-[168px] h-[120px] xl:h-[168px] mb-[64px]'}  />
                        </div>
                        <div className='mx-auto'>
                            <FooterNavigation />
                        </div>
                    </div>
                    <div className='mt-[64px] md:mt-[0px] mb-[80px] md:mb-[40px] xl:mb-[0px] flex flex-col items-center md:items-start'>
                        <div className='w-[120px] flex flex-col '>
                            <h3 className={`${inter.className} mr-auto font-normal text-[16px] leading-[1.3] text-white-500`}>
                                {t('footer.find')}
                            </h3> 
                            <FooterSocial />
                        </div>
                        <LocationFooter />
                    </div>
                </div>
                <div className='mx-auto'>
                    <span className={`${inter.className} font-normal text-[16px] leading-[1.3] text-white-500`}>© 2025 Pivoteka</span>
                </div>
            </div>
        </footer>
    );
};

export default Footer;