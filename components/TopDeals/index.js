import initTranslations from '../../app/i18n';
import { lora } from '@/fonts';

const TopDeal = async ({ lng }) => {
    const { t } = await initTranslations(lng, ['deals']);
    return (
        <section className='w-[328px] md:w-[688px] xl:w-[1160px] xlr:w-[1280px] pt-[100px] md:pt-[120px] pb-[100px] md:pb-[120px] mx-auto'>
            <h2 className={`${lora.className} mb-[40px] xl:mb-[64px] flex text-center justify-center font-medium text-[40px] xl:text-[64px] leading-[1.0] text-black-600`}>
                {t('deals.title')}
            </h2>
            <div className='flex flex-col md:flex-row md:flex-wrap gap-[20px]'>
                <div className='w-[328px] md:w-[334px] xl:w-[570px] xlr:w-[630px] h-[270px] md:h-[274px] xl:h-[304px] rounded-[12px] bg-[url(/valentine-specials-mob-and-tablet.webp)] xl:bg-[url(/valentine-specials.webp)] bg-cover bg-no-repeat '>
                    <div className='w-full h-full flex justify-center items-center rounded-[12px] bg-black-400'>
                        <div className='w-full h-[68px] md:h-[72px] xl:h-[80px] flex justify-center items-center bg-black-400'>
                            <p className={`${lora.className} font-medium text-[28px] md:text-[32px] xl:text-[40px] leading-[1.0] text-orange-600`}>
                                {t('deals.deal-1')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-[328px] md:w-[334px] xl:w-[570px] xlr:w-[630px] h-[270px] md:h-[274px] xl:h-[304px] rounded-[12px] bg-[url(/gift-sets-mob-tablet.webp)] xl:bg-[url(/gift-sets.webp)] bg-cover bg-no-repeat '>
                    <div className='w-full h-full flex justify-center items-center rounded-[12px] bg-black-400'>
                        <div className='w-full h-[68px] md:h-[72px] xl:h-[80px] flex justify-center items-center bg-black-400'>
                            <p className={`${lora.className} font-medium text-[28px] md:text-[32px] xl:text-[40px] leading-[1.0] text-orange-600`}>
                                {t('deals.deal-2')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-[328px] md:w-[334px] xl:w-[570px] xlr:w-[630px] h-[270px] md:h-[274px] xl:h-[304px] rounded-[12px] bg-[url(/beer-case-mob-tablet.webp)] xl:bg-[url(/beer-case.webp)] bg-cover bg-no-repeat '>
                    <div className='w-full h-full flex justify-center items-center rounded-[12px] bg-black-400'>
                        <div className='w-full h-[68px] md:h-[72px] xl:h-[80px] flex justify-center items-center bg-black-400'>
                            <p className={`${lora.className} font-medium text-[28px] md:text-[32px] xl:text-[40px] leading-[1.0] text-orange-600`}>
                                {t('deals.deal-3')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='w-[328px] md:w-[334px] xl:w-[570px] xlr:w-[630px] h-[270px] md:h-[274px] xl:h-[304px] rounded-[12px] bg-[url(/belgian-beer-mob-tablet.webp)] xl:bg-[url(/belgian-beer.webp)] bg-cover bg-no-repeat '>
                    <div className='w-full h-full flex justify-center items-center rounded-[12px] bg-black-400'>
                        <div className='w-full h-[68px] md:h-[72px] xl:h-[80px] flex justify-center items-center bg-black-400'>
                            <p className={`${lora.className} font-medium text-[28px] md:text-[32px] xl:text-[40px] leading-[1.0] text-orange-600`}>
                                {t('deals.deal-4')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopDeal;