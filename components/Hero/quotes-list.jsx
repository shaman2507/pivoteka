import initTranslations from '../../app/i18n';
import { inter } from '@/fonts';

const HeroQuotesList = async ({ lng }) => {
    const { t } = await initTranslations(lng, ['hero']);
    return (
        <conteiner className='w-full mt-[24px] md:pl-[84px] md:pr-[52px] flex flex-col gap-[64px]'>
            <div className='flex justify-end md:justify-between'>
                <div className='hidden md:flex md:w-[246px] items-center'>
                    <p className={`${inter.className} font-medium italic text-base text-white-500`}>
                        {t('hero.quote-1')}
                    </p>
                </div> 
                <div className='flex w-[166px] md:w-[208px] items-center'>
                    <p className={`${inter.className} font-medium italic text-base text-white-500`}>
                        {t('hero.quote-2')}
                    </p>
                </div>    
            </div>
            <div className='flex md:justify-end'>
                <div className='flex w-[206px] md:w-[276px] items-center'>
                    <p className={`${inter.className} font-medium italic text-base text-white-500`}>
                        {t('hero.quote-3')}
                    </p>
                </div>    
            </div>
            <div className='flex justify-end md:justify-start'>
                <div className='flex w-[207px] md:w-[208px] items-center'>
                    <p className={`${inter.className} font-medium italic text-base text-white-500`}>
                        {t('hero.quote-4')}
                    </p>
                </div>    
            </div>
        </conteiner>
    );
};

export default HeroQuotesList;