'use client';

import initTranslations from '../../app/i18n';
import { lora } from '@/fonts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { SwiperBtn } from '../Buttons/SwiperBtn';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import TasteList from './tasteList';
import tasteListData from './tasteListData';

const Taste = async ({ lng }) => { 
    const { t } = await initTranslations(lng, ['taste']);
    return (
        <section className='mt-[100px] h-[660px] bg-black-500'>
            <div className='flex  flex-col justify-center '>
                <h2 className={`${lora.className} mx-auto mt-[100px] mb-[40px] w-[328px] font-medium text-[36px] md:text-[40px] xl:text-[64px] text-center leading-[1.2] md:leading-[1.0] text-orange-600`}>
                    {t('taste.title')}
                </h2>
                <div className='hidden md:flex'>
                    <SwiperBtn />
                </div>

                <div className='mx-auto w-[328px] md:w-full h-[244px] md:h-full bg-white-600'>
                    <Swiper
                        wrapperClass="!items-stretch"
                        className='mx-auto'
                        autoHeight={true}
                        modules={[Navigation]}
                        loop={true}
                        spaceBetween={20}
                        slidesPerView={1}
                        breakpoints={{
                            768: {
                            slidesPerView: 2,
                            },
                            1280: {
                            slidesPerView: 4,
                            },
                        }}
                        navigation={{
                            nextEl: '.s-button-next',
                            prevEl: '.s-button-prev',
                        }}
                    >
                        {tasteListData.map((taste, index) => (
                            <SwiperSlide key={index}>
                                <TasteList
                                    key={index} 
                                    lng={lng}
                                    tasteTitle={taste.title} 
                                    tasteText={taste.text}
                                    tasteTextSub={taste.textSub}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className='mb-[100px] md:mb-[120px] md:hidden'>
                        <SwiperBtn />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Taste;