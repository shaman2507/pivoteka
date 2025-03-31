import { inter } from '@/fonts';
import initTranslations from '../../app/i18n';
import HeroQuotesList from './quotes-list';
import Social from '../ui/social';
import ElementQuoteMob1 from '@/public/element-quote-1mob.svg';


const HeroQuotes = async ({ lng }) => {
    const { t } = await initTranslations(lng, ['hero']);
    return (
        <section className='flex flex-col'>
            <div className='mt-[24px]  flex md:hidden justify-between'>
                <div className='flex w-[232px] items-center md:hidden'>
                    <ElementQuoteMob1 className={'absolute z-20 w-[60px] h-[72px] mt-[24px]'} />
                    <p className={`${inter.className} ml-[24px] font-medium italic text-base text-white-500`}>
                        {t('hero.quote-1')}
                    </p>
                </div>    
                <Social className={'md:hidden'}/>
            </div>
            <div className='flex justify-center md:justify-between'>
                <HeroQuotesList lng={lng} />
                <Social className={'hidden md:flex'} />
            </div>
        </section>
    );
};

export default HeroQuotes;