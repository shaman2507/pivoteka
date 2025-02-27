import initTranslations from '../../app/i18n';
import { inter } from '@/fonts';

const HeroQuotesList = async ({ lng }) => {
    const { t } = await initTranslations(lng, ['hero']);
    return (
        <conteiner className='mt-[24px] flex flex-col gap-[64px]'>
            <div className='flex justify-end'>
                <div className='flex w-[166px] items-center'>
                    <p className={`${inter.className} font-medium italic text-base text-white`}>
                        {t('hero.quote-2')}
                    </p>
                </div>    
            </div>
            <div className='flex '>
                <div className='flex w-[206px] items-center'>
                    <p className={`${inter.className} font-medium italic text-base text-white`}>
                        {t('hero.quote-3')}
                    </p>
                </div>    
            </div>
            <div className='flex justify-end'>
                <div className='flex w-[207px] items-center'>
                    <p className={`${inter.className} font-medium italic text-base text-white`}>
                        {t('hero.quote-4')}
                    </p>
                </div>    
            </div>
        </conteiner>
    );
};

export default HeroQuotesList;