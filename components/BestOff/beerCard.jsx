import Image from 'next/image';
import initTranslations from '../../app/i18n';
import { inter } from '@/fonts';

const BeerCard = async ({ lng, image, imageAlt, cardTitle, cardPrice, cardSize }) => {
    const { t } = await initTranslations(lng, ['bestOff']);
    return (
        <div className='flex flex-col justify-center w-[328px]'>
            <div className='w-[328px] xl:w-[300px] h-[420px] xl:h-[400px] flex justify-center'>
                <Image src={image} alt={t(imageAlt)} width={300} height={400}  />
            </div>
            <div className='flex flex-col'>
                <div className='flex justify-center'>
                    <h4 className={`${inter.className}mx-auto mt-[24px] mb-[36px] font-medium text-[20px] xl:text-[24px] leading-[1.2] text-black-600`}>
                        {t(cardTitle)}
                    </h4>
                </div>
                
                <div className='mx-auto mb-[40px] flex items-baseline'>
                    <div>
                        <p className={`${inter.className} font-medium text-[28px] md:text-[32px] xl:text-[40px] text-black-600`}>
                            {t(cardPrice)}
                        </p>
                    </div>
                    <div>
                        <p className={`${inter.className} font-medium text-[18px] md:text-[20px] xl:text-[24px] leading-[1.2] text-black-600`}>
                            {t(cardSize)}
                        </p>
                    </div>
                    
                </div>
                
            </div>
            
        </div>
    );
};

export default BeerCard;