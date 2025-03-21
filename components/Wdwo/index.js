import initTranslations from '../../app/i18n';
import { lora } from '@/fonts';

const Wdwo = async ({ lng }) => { 
    const { t } = await initTranslations(lng, ['wdwo']);
    return (
        <section className='w-[328px] md:w-[688px] xl:w-[1160px] xlr:w-[1280px] pt-[100px] md:pt-[120px] flex flex-col items-center mx-auto'>
            <h2 className={`${lora.className} mb-[40px] xl:mb-[64px] flex text-center font-medium text-[36px] md:text-[40px] xl:text-[64px] leading-[1.2] md:leading-[1.0] text-black-600`}>
                {t('wdwo.title')}
            </h2>
            <div className='flex xl:flex-row xl:gap-[20px]'>
                <div className='mb-[12px] md:mb-[20px]'>
                    <div className='mb-[12px] md:mb-[20px] w-[328px] md:w-[688px] xl:w-[570px] xlr:w-[632px] h-[158px] md:h-[332px] xl:h-[275px] xlr:h-[304px] rounded-[12px] bg-[url(/offer-wheat.webp)] bg-cover bg-no-repeat '>
                        <div className='w-full h-full flex justify-center items-center rounded-[12px] bg-black-400'>
                            <div className='w-full h-[52px] md:h-[72px] xl:h-[80px] flex justify-center items-center bg-black-400'>
                                <p className={`${lora.className} font-medium text-[28px] md:text-[32px] xl:text-[40px] leading-[1.0] text-orange-600`}>
                                    {t('wdwo.beer-1')}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-[12px] xl:gap-[20px]'>
                        <div className='w-[158px] md:w-[334px] xl:w-[275px] xlr:w-[304px] h-[158px] md:h-[334px] xl:h-[275px] xlr:h-[304px] flex justify-center items-center rounded-[12px] bg-[url(/offer-sour.webp)] bg-cover bg-no-repeat'>
                            <div className='w-full h-full flex justify-center items-center rounded-[12px] bg-black-400'>
                                <div className='w-full h-[52px] md:h-[72px] xl:h-[80px] flex justify-center items-center bg-black-400'>
                                    <p className={`${lora.className} font-medium text-[28px] md:text-[32px] xl:text-[40px] leading-[1.0] text-orange-600`}>
                                        {t('wdwo.beer-2')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[158px] md:w-[334px] xl:w-[275px] xlr:w-[304px] h-[158px] md:h-[334px] xl:h-[275px] xlr:h-[304px] flex justify-center items-center rounded-[12px] bg-[url(/offer-gose.webp)] bg-cover bg-no-repeat'>
                            <div className='w-full h-full flex justify-center items-center rounded-[12px] bg-black-400'>
                                <div className='w-full h-[52px] md:h-[72px] xl:h-[80px] flex justify-center items-center bg-black-400'>
                                    <p className={`${lora.className} font-medium text-[28px] md:text-[32px] xl:text-[40px] leading-[1.0] text-orange-600`}>
                                        {t('wdwo.beer-3')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='mb-[12px] md:mb-[20px]'>
                    <div className='w-[328px] md:w-[688px] xl:w-[570px] xlr:w-[632px] h-[158px] md:h-[332px] xl:h-[575px] xlr:h-[632px] flex justify-center items-center rounded-[12px] bg-[url(/offer-lambic.webp)] bg-cover bg-no-repeat'>
                        <div className='w-full h-full flex justify-center items-center rounded-[12px] bg-black-400'>
                            <div className='w-full h-[52px] md:h-[72px] xl:h-[80px] flex justify-center items-center bg-black-400'>
                                <p className={`${lora.className} font-medium text-[28px] md:text-[32px] xl:text-[40px] leading-[1.0] text-orange-600`}>
                                    {t('wdwo.beer-4')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className='mb-[100px] md:mb-[120px] xl:flex xl:gap-[20px]'>
                <div className='flex  mb-[12px] md:mb-[20px] gap-[12px] xl:gap-[20px]'>
                    <div className='flex gap-[12px] xlr:gap-[20px]'>
                        <div className='w-[158px] md:w-[334px] xl:w-[275px] xlr:w-[305px] h-[158px] md:h-[334px] xl:h-[275px] xlr:h-[305px] flex justify-center items-center rounded-[12px] bg-[url(/offer-ipa.webp)] bg-cover bg-no-repeat'>
                            <div className='w-full h-full flex justify-center items-center rounded-[12px] bg-black-400'>
                                <div className='w-full h-[52px] md:h-[72px] xl:h-[80px] flex justify-center items-center bg-black-400'>
                                    <p className={`${lora.className} font-medium text-[28px] md:text-[32px] xl:text-[40px] leading-[1.0] text-orange-600`}>
                                        {t('wdwo.beer-5')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[158px] md:w-[334px] xl:w-[275px] xlr:w-[304px] h-[158px] md:h-[334px] xl:h-[275px] xlr:h-[304px] flex justify-center items-center rounded-[12px] bg-[url(/offer-lager.webp)] bg-cover bg-no-repeat'>
                            <div className='w-full h-full flex justify-center items-center rounded-[12px] bg-black-400'>
                                <div className='w-full h-[52px] md:h-[72px] xl:h-[80px] flex justify-center items-center bg-black-400'>
                                    <p className={`${lora.className} font-medium text-[28px] md:text-[32px] xl:text-[40px] leading-[1.0] text-orange-600`}>
                                        {t('wdwo.beer-6')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[328px] md:w-[688px] xl:w-[570px] xlr:w-[630px] h-[158px] md:h-[332px] xl:h-[275px] xlr:h-[305px] flex justify-center items-center rounded-[12px] bg-[url(/offer-stout.webp)] bg-cover bg-no-repeat'>
                    <div className='w-full h-full flex justify-center items-center rounded-[12px] bg-black-400'>
                        <div className='w-full h-[52px] md:h-[72px] xl:h-[80px] flex justify-center items-center bg-black-400'>
                            <p className={`${lora.className} font-medium text-[28px] md:text-[32px] xl:text-[40px] leading-[1.0] text-orange-600`}>
                                {t('wdwo.beer-7')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Wdwo;