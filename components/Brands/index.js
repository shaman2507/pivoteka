'use client';

import initTranslations from '../../app/i18n';
import { lora } from '@/fonts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { SwiperBtn } from '../Buttons/SwiperBtn';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { useState, useEffect } from 'react';
import BrandCard from './brandCard';
import brandsCardData from './brandsCardData';

const Brands = ({ lng }) => { 
    const [t, setT] = useState(() => (key) => key);
    const uniqueId = "brands";
    
    useEffect(() => {
        async function loadTranslations() {
            const { t } = await initTranslations(lng, ['brands']);
            setT(() => t);
        }
        loadTranslations();
    }, [lng]);


    return (
        <section className='w-[328px] md:w-[688px] xl:w-[1160px] xlr:w-[1280px] mx-auto pt-[100px] md:pt-[120px]'>
            <div className='md:flex md:justify-between md:items-center'>
                <h2 className={`${lora.className} font-medium text-[36px] md:text-[40px] xl:text-[64px] leading-[1.2] md:leading-[1.2] mb-[40px] text-black-600`}>
                    {t('brands.title')}
                </h2>
                <div className='hidden md:flex justify-baseline'>
                    <SwiperBtn uniqueId={uniqueId} />
                </div>
            </div>
            
            <div className='mb-[100px] md:mb-[120px]'>
                <Swiper
                    wrapperClass="!items-stretch"
                    className='h-[120px] items-center'
                    autoHeight={true}
                    modules={[Navigation]}
                    loop={true}
                    spaceBetween={64}
                    slidesPerView={2}
                    breakpoints={{
                        768: {
                            slidesPerView: 4,
                        },
                        1280: {
                            slidesPerView: 6,
                        },
                        1440: {
                            slidesPerView: 7,
                        },
                    }}
                    navigation={{
                        nextEl: `.s-button-next-${uniqueId}`,
                        prevEl: `.s-button-prev-${uniqueId}`,
                    }}
                >
                    {brandsCardData.map((brand, index) => (
                        <SwiperSlide key={index}>
                            <BrandCard
                                key={index} 
                                image={brand.image} 
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='mt-[40px] md:hidden '>
                    <SwiperBtn uniqueId={uniqueId} />
                </div>
            </div>
        </section>
    );
};

export default Brands;