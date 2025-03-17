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
        <section className='mt-[100px] h-[660px] bg-black-500 md:px-[40px]'>
            <div className='flex flex-col md:flex-row mb-[40px] md:mb-[44px] pt-[100px] md:pt-[120px] md:items-center justify-center md:justify-between'>
                <h2 className={`${lora.className} w-[328px] md:w-[380px] font-medium text-[36px] md:text-[40px] xl:text-[64px] text-center md:text-left leading-[1.2] md:leading-[1.0] text-orange-600`}>
                    {t('taste.title')}
                </h2>
                <div className='hidden md:flex'>
                    <SwiperBtn />
                </div>
            </div>
            <div className='mx-auto w-[328px] md:w-[688px] h-[244px] md:mb-[120px]'>
                <Swiper
                    wrapperClass="!items-stretch"
                    className='mx-auto h-[244px]'
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
                <div className='mt-[40px] mb-[100px] md:hidden '>
                    <SwiperBtn />
                </div>
            </div>
        </section>
    );
};

export default Taste;