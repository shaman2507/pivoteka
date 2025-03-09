"use client";

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
            <h2>
                {t('bestOff.title')}
            </h2>
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
                                title={t(card.title)}
                                price={t(card.price)}
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