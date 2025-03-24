'use client';

import { lora } from '@/fonts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import initTranslations from '../../app/i18n';
import beerCardData from './beerCardData';
import BeerCard from './beerCard';
import { SwiperBtn } from '../Buttons/SwiperBtn';

const BestOff = async ({ lng }) => {
    const { t } = await initTranslations(lng, ['bestOff']);
    return (
        <section className='mb-[100px]'>
            <div className='flex justify-center md:justify-between md:items-center mt-[100px] md:mt-[124px] mb-[40px] md:mb-[44px]'>
                <h2 className={`${lora.className} font-medium text-[36px] md:text-[40px] xl:text-[64px] leading-[1.2] md:leading-[1.0] text-black-600`}>
                    {t('bestOff.title')}
                </h2>
                <div className='hidden md:flex'>
                    <SwiperBtn />
                </div>
            </div>
            
            <div className='mx-auto w-[328px] md:w-full h-[616px] md:h-full'>
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
                    {beerCardData.map((card, index) => (
                        <SwiperSlide key={index}>
                            <BeerCard
                                key={index} 
                                lng={lng} 
                                image={card.image} 
                                imageAlt={card.imageAlt}
                                cardTitle={card.title} 
                                cardPrice={card.price}
                                cardSize={card.size}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className='mb-[100px] md:mb-[120px] md:hidden'>
                    <SwiperBtn />
                </div>
            </div>
        </section>
    );
};

export default BestOff;