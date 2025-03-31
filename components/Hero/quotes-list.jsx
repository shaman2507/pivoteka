import initTranslations from '../../app/i18n';
import { inter } from '@/fonts';
import ElementQuote1 from '@/public/element-quote-1.svg';
import ElementQuote2 from '@/public/element-quote-2.svg';
import ElementQuote3 from '@/public/element-quote-3.svg';
import ElementQuote4 from '@/public/element-quote-4.svg';
import ElementQuoteMob2 from '@/public/element-quote-2mob.svg';
import ElementQuoteMob3 from '@/public/element-quote-3mob.svg';
import ElementQuoteMob4 from '@/public/element-quote-4mob.svg';

const HeroQuotesList = async ({ lng }) => {
    const { t } = await initTranslations(lng, ['hero']);
    return (
        <conteiner className='mx-auto w-full md:w-[512px] xl:w-[840px] mt-[24px] md:mt-[116px]  flex flex-col xl:justify-center'>
            <div className='flex justify-end md:justify-start xl:justify-between md:gap-[88px]'>
                <div className='hidden md:flex md:w-[246px] xl:[206px]'>
                    <ElementQuote1 className={'absolute z-20 md:mt-[-32px] md:w-[104px] md:h-[120px]'} />
                    <p className={`${inter.className} md:ml-[40px] font-medium italic text-base text-white-500`}>
                        {t('hero.quote-1')}
                    </p>
                </div> 
                <div className='flex w-[166px] md:w-[176px] xl:[166px] mb-[95px] md:mb-[136px] xl:mb-[96px] items-center'>
                    <p className={`${inter.className} font-medium italic text-base text-white-500`}>
                        {t('hero.quote-2')}
                    </p>
                    <ElementQuoteMob2 className={'absolute z-20 mt-[28px] mr-[4px] w-[60px] ml-[100px] h-[72px] md:hidden'} />
                    <ElementQuote2 className={'hidden md:flex absolute z-20 md:ml-[96px] md:w-[104px] md:h-[120px]'} />
                </div>    
            </div>
            <div className='flex flex-col xl:flex-row-reverse xl:justify-between xl:w-[700px] xl:mx-auto '>
                <div className='flex flex-col md:flex-row md:justify-end mb-[64px]'>
                    <div className='flex w-[206px] md:w-[220px] xl:[204px] items-center'>
                        <p className={`${inter.className} font-medium italic text-base text-white-500`}>
                            {t('hero.quote-3')}
                        </p>
                    </div> 
                    <ElementQuoteMob3 className={'z-20 w-[180px] h-[36px] mt-[12px] md:hidden'} />
                    <ElementQuote3 className={'hidden md:flex absolute z-20 md:mt-[44px] md:w-[270px] md:h-[56px]'} />
                </div>
                <div className='flex justify-end md:justify-start md:mt-[16px] xl:mt-[0px]'>
                    <div className='flex w-[207px] md:w-[208px] xl:[204px] items-center xl:items-baseline'>
                        <p className={`${inter.className} font-medium italic text-base text-white-500`}>
                            {t('hero.quote-4')}
                        </p>
                        <ElementQuoteMob4 className={'absolute z-20 mt-[64px] w-[180px] h-[36px] md:hidden'} />
                        <ElementQuote4 className={'hidden md:flex absolute z-20 md:w-[280px] md:h-[56px] md:mt-[100px] xl:mt-[48px]'} />
                    </div>    
                </div>
            </div>
        </conteiner>
    );
};

export default HeroQuotesList;