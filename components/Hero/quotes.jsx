import { inter } from '@/fonts';
import initTranslations from '../../app/i18n';
import HeroQuotesList from './quotes-list';
import Social from '../ui/social';


const HeroQuotes = async ({ lng }) => {
    const { t } = await initTranslations(lng, ['hero']);
    return (
        <section className='flex flex-col'>
            <div className='mt-[24px] flex justify-between'>
                <div className='flex w-[206px] items-center'>
                    <p className={`${inter.className} font-medium italic text-base text-white`}>
                        {t('hero.quote-1')}
                    </p>
                </div>    
                <Social />
            </div>
            <HeroQuotesList lng={lng} />
        </section>
    );
};

export default HeroQuotes;