import initTranslations from '../../app/i18n';
import { inter } from '@/fonts';
import ElementQuote1 from '@/public/element-quote-1.svg';
import ElementQuote2 from '@/public/element-quote-2.svg';
import ElementQuote3 from '@/public/element-quote-3.svg';
import ElementQuote4 from '@/public/element-quote-4.svg';

const HeroQuotesList = async ({ lng }) => {
    const { t } = await initTranslations(lng, ['hero']);
    return (
        <conteiner className='w-full mt-[24px] md:mt-[116px] md:pl-[84px] md:pr-[52px] flex flex-col'>
            <div className='flex justify-end md:justify-start md:gap-[88px]'>
                <div className='hidden md:flex md:w-[246px] items-center'>
                    <ElementQuote1 className={'absolute z-50 md:w-[104px] md:h-[120px]'} />
                    <p className={`${inter.className} md:ml-[40px] font-medium italic text-base text-white-500`}>
                        {t('hero.quote-1')}
                    </p>
                </div> 
                <div className='flex w-[166px] md:w-[176px] items-center'>
                    <p className={`${inter.className} font-medium italic text-base text-white-500`}>
                        {t('hero.quote-2')}
                    </p>
                    <ElementQuote2 className={'absolute z-50 md:ml-[96px] md:w-[104px] md:h-[120px]'} />
                </div>    
            </div>
            <div className='flex md:justify-end md:mt-[135px]'>
                <div className='flex  w-[206px] md:w-[220px] items-center'>
                    <p className={`${inter.className} font-medium italic text-base text-white-500`}>
                        {t('hero.quote-3')}
                    </p>
                </div> 
                <ElementQuote3 className={'absolute z-50 md:mt-[44px] md:w-[270px] md:h-[56px]'} />
            </div>
            <div className='flex justify-end md:justify-start md:mt-[70px]'>
                <div className='flex w-[207px] md:w-[208px] items-center'>
                    <p className={`${inter.className} font-medium italic text-base text-white-500`}>
                        {t('hero.quote-4')}
                    </p>
                    <ElementQuote4 className={'absolute z-50 md:w-[280px] md:h-[56px] md:mt-[100px]'} />
                </div>    
            </div>
        </conteiner>
    );
};

export default HeroQuotesList;