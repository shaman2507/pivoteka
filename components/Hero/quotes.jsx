import { inter } from '@/fonts';
import initTranslations from '../../app/i18n';
import { ImFacebook2 } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { BsTelegram } from "react-icons/bs";
import HeroQuotesList from './quotes-list';


const HeroQuotes = async ({ lng }) => {
    const { t } = await initTranslations(lng, ['hero']);
    return (
        <section className='flex'>
            <div className='mt-[24px] flex justify-between'>
                <div className='flex w-[206px] items-center'>
                    <p className={`${inter.className} font-medium italic text-base text-white`}>
                        {t('hero.quote-1')}
                    </p>
                </div>    
                <div className='flex flex-col gap-[40px]'>
                    <ImFacebook2 color="orange" size="24" />
                    <RiInstagramFill color="orange" size="24" />
                    <BsTelegram color="orange" size="24" />
                </div>
            </div>
            <HeroQuotesList />
        </section>
    );
};

export default HeroQuotes;