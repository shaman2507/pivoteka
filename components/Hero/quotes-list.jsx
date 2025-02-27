import initTranslations from '../../app/i18n';
import { inter } from '@/fonts';

const HeroQuotesList = async ({ lng }) => {
    const { t } = await initTranslations(lng, ['hero']);
    return (
        <div className='mt-[24px] flex justify-between'>
            <div className='flex w-[206px] items-center'>
                <p className={`${inter.className} font-medium italic text-base text-white`}>
                    {t('hero.quote-1')}
                </p>
            </div>    
            
        </div>
    );
};

export default HeroQuotesList;