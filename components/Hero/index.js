import initTranslations from '../../app/i18n';
import { lora } from '@/fonts';
import HeroQuotes from './quotes';

const Hero = async ({ lng }) => {
    const { t } = await initTranslations(lng, ['hero']);
    return (
        <section className='w-[328px] md:w-[688px] xl:w-[1160px] xlr:w-[1280px] mx-auto mt-[80px] md:mt-[116px]'>
            <div className='flex flex-col '>
                <h1 className={`${lora.className} 
                    w-[328px] md:w-[512px] xl:w-[732px]
                    mx-auto
                    text-center
                    font-medium xl:font-semibold
                    text-[44px] md:text-[64px] xl:text-[88px]
                    leading-[1.2]
                    text-orange-600   `}>
                    {t('hero.title')}
                </h1>
                <HeroQuotes lng={lng} />
            </div>
        </section>
    );
};

export default Hero;