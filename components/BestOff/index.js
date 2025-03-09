"use client";

import { lora } from '@/fonts';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import initTranslations from '../../app/i18n';
import beerCardData from './beerCardData';
import BeerCard from './beerCard';
import { SwiperBtn } from '../Buttons/SwiperBtn';

const BestOff = async ({ lng }) => {
    const { t } = await initTranslations(lng, ['bestOff']);
    return (
        <section>
            <div className='flex justify-center mt-[100px] mb-[40px]'>
                <h2 className={`${lora.className} font-medium text-[36px] leading-[1.2] text-black-600`}>
                    {t('bestOff.title')}
                </h2>
            </div>
            
            <div>
                <Swiper
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
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div>
                    <SwiperBtn />
                </div>
            </div>
        </section>
    );
};

export default BestOff;