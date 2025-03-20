import initTranslations from '../../app/i18n';
import { lora } from '@/fonts';

const Wdwo = async ({ lng }) => { 
    const { t } = await initTranslations(lng, ['wdwo']);
    return (
        <section className='w-[328px] pt-[100px] mx-auto'>
            <h2 className={`${lora.className} mb-[40px] flex text-center font-medium text-[36px] leading-[1.2] text-black-600`}>
                {t('wdwo.title')}
            </h2>
            <div className='mb-[12px]'>
                <div className='mb-[12px] w-[328px] h-[158px] rounded-[12px] bg-[url(/offer-wheat.webp)] bg-cover bg-no-repeat '>
                    <div className='w-full h-full flex justify-center items-center rounded-[12px] bg-black-400'>
                        <div className='w-full h-[52px] flex justify-center items-center bg-black-400'>
                            <p className={`${lora.className} font-medium text-[28px] leading-[1.0] text-orange-600`}>
                                {t('wdwo.beer-1')}
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex gap-[12px]'>
                    <div className='w-[158px] h-[158px] flex justify-center items-center rounded-[12px] bg-[url(/offer-sour.webp)] bg-cover bg-no-repeat'>
                        <div className='w-full h-full flex justify-center items-center rounded-[12px] bg-black-400'>
                            <div className='w-full h-[52px] flex justify-center items-center bg-black-400'>
                                <p className={`${lora.className} font-medium text-[28px] leading-[1.0] text-orange-600`}>
                                    {t('wdwo.beer-2')}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='w-[158px] h-[158px] flex justify-center items-center rounded-[12px] bg-[url(/offer-gose.webp)] bg-cover bg-no-repeat'>
                        <div className='w-full h-full flex justify-center items-center rounded-[12px] bg-black-400'>
                            <div className='w-full h-[52px] flex justify-center items-center bg-black-400'>
                                <p className={`${lora.className} font-medium text-[28px] leading-[1.0] text-orange-600`}>
                                    {t('wdwo.beer-3')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-[12px]'>
                <div className='w-[328px] h-[238px] flex justify-center items-center rounded-[12px] bg-[url(/offer-lambic.webp)] bg-cover bg-no-repeat'>
                    <div className='w-full h-full flex justify-center items-center rounded-[12px] bg-black-400'>
                        <div className='w-full h-[52px] flex justify-center items-center bg-black-400'>
                            <p className={`${lora.className} font-medium text-[28px] leading-[1.0] text-orange-600`}>
                                {t('wdwo.beer-4')}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mb-[100px]'>
                <div className='flex mb-[12px] gap-[12px]'>
                    <div className='flex gap-[12px]'>
                        <div className='w-[158px] h-[158px] flex justify-center items-center rounded-[12px] bg-[url(/offer-ipa.webp)] bg-cover bg-no-repeat'>
                            <div className='w-full h-full flex justify-center items-center rounded-[12px] bg-black-400'>
                                <div className='w-full h-[52px] flex justify-center items-center bg-black-400'>
                                    <p className={`${lora.className} font-medium text-[28px] leading-[1.0] text-orange-600`}>
                                        {t('wdwo.beer-5')}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='w-[158px] h-[158px] flex justify-center items-center rounded-[12px] bg-[url(/offer-lager.webp)] bg-cover bg-no-repeat'>
                            <div className='w-full h-full flex justify-center items-center rounded-[12px] bg-black-400'>
                                <div className='w-full h-[52px] flex justify-center items-center bg-black-400'>
                                    <p className={`${lora.className} font-medium text-[28px] leading-[1.0] text-orange-600`}>
                                        {t('wdwo.beer-6')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-[328px] h-[158px] flex justify-center items-center rounded-[12px] bg-[url(/offer-stout.webp)] bg-cover bg-no-repeat'>
                    <div className='w-full h-full flex justify-center items-center rounded-[12px] bg-black-400'>
                        <div className='w-full h-[52px] flex justify-center items-center bg-black-400'>
                            <p className={`${lora.className} font-medium text-[28px] leading-[1.0] text-orange-600`}>
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