import initTranslations from '../../app/i18n';
import { lora } from '@/fonts';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { SwiperBtn } from '../Buttons/SwiperBtn';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Brands = async ({ lng }) => { 
    const { t } = await initTranslations(lng, ['brands']);
    return (
        <section className='w-[328px] md:w-[688px] xl:w-[1160px] xlr:w-[1280px] pt-[100px]'>
            <h2 className={`${lora.className} font-medium text-[36px] leading-[1.2] mb-[40px] text-black-600`}>
                {t('brands.title')}
            </h2>
            <div>
                <Swiper
                    wrapperClass="!items-stretch"
                    className='h-[244px]'
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