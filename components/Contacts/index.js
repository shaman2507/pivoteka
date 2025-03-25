import initTranslations from '../../app/i18n';
import { inter, lora } from '@/fonts';
import Map from './map';

const Contacts = async ({ lng }) => {
    const { t } = await initTranslations(lng, ['contacts']);
    return (
        <section className='w-[328px] md:w-[688px] xl:w-[1160px] xlr:w-[1280px] mx-auto py-[100px] mb:py-[120px]'>
            <h2 className={`${lora.className} mb-[40px] flex text-center justify-center xl:justify-start font-medium text-[36px] md:text-[40px] xl:text-[64px] leading-[1.2] md:leading-[1.0] text-black-600`}>
                {t('contacts.title')}
            </h2>
            <div className='flex flex-col xl:flex-row xl:justify-between'>    
                <div className='md:mx-auto xl:mx-[0px] xl:my-auto mb-[80px] md:w-[512px] xl:w-[413px] '>                    
                    <p className={`${inter.className} mb-[20px] font-normal text-[16px] leading-[1.3] text-black-600`}>
                        {t('contacts.text-1')}
                    </p>
                    <p className={`${inter.className} mb-[20px] font-normal text-[16px] leading-[1.3] text-black-600`}>
                        {t('contacts.text-2')}
                    </p>
                    <p className={`${inter.className} mb-[20px] font-normal text-[16px] leading-[1.3] text-black-600`}>
                        {t('contacts.text-3')}
                    </p>
                    <p className={`${inter.className} font-normal text-[16px] leading-[1.3] text-black-600`}>
                        {t('contacts.hours')}
                    </p>
                    <p className={`${inter.className} mb-[20px] font-semibold text-[16px] leading-[1.3] text-black-600`}>
                        {t('contacts.schedule')}
                    </p>
                    <p className={`${inter.className} font-normal text-[16px] leading-[1.3] text-black-600`}>
                        {t('contacts.adress')}
                    </p>
                    <p className={`${inter.className} font-semibold text-[16px] leading-[1.3] text-black-600`}>
                        {t('contacts.pivoteka')}
                    </p>
                </div>
                <Map />
            </div>
            
        </section>
    );
};

export default Contacts;