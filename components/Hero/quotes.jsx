import { inter } from '@/fonts';
import initTranslations from '../../app/i18n';
import HeroQuotesList from './quotes-list';
import Social from '../ui/social';


const HeroQuotes = async ({ lng }) => {
    const { t } = await initTranslations(lng, ['hero']);
    return (
        <section className='flex flex-col'>
            <div className='mt-[24px] flex justify-between'>
                <div className='flex w-[206px] items-center md:hidden'>
                    <p className={`${inter.className} font-medium italic text-base text-white-500`}>
                        {t('hero.quote-1')}
                    </p>
                </div>    
                <Social className={'md:hidden'}/>
            </div>
            <div className='flex '>
                <HeroQuotesList lng={lng} />
                <Social className={'hidden md:flex'} />
            </div>
        </section>
    );
};

export default HeroQuotes;