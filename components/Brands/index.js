'use client';

import initTranslations from '../../app/i18n';
import { lora } from '@/fonts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { SwiperBtn } from '../Buttons/SwiperBtn';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BrandCard from './brandCard';
import brandsCardData from './brandsCardData';

const Brands = async ({ lng }) => { 
    const { t } = await initTranslations(lng, ['brands']);
    return (
        <section className='w-[328px] md:w-[688px] xl:w-[1160px] xlr:w-[1280px] mx-auto pt-[100px]'>
            <h2 className={`${lora.className} font-medium text-[36px] leading-[1.2] mb-[40px] text-black-600`}>
                {t('brands.title')}
            </h2>
            <div className='hidden md:flex'>
                <SwiperBtn />
            </div>
            <div>
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
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 4,
                        },
                        1440: {
                            slidesPerView: 6,
                        },
                    }}
                    navigation={{
                        nextEl: '.s-button-next',
                        prevEl: '.s-button-prev',
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
                <div className='mt-[40px] mb-[100px] md:hidden '>
                    <SwiperBtn />
                </div>
            </div>
        </section>
    );
};

export default Brands;