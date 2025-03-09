import Image from 'next/image';
import initTranslations from '../../app/i18n';
import { inter } from '@/fonts';

const BeerCard = async ({ lng, image, imageAlt, cardTitle, cardPrice, cardSize }) => {
    const { t } = await initTranslations(lng, ['bestOff']);
    return (
        <div className='flex flex-col justify-center w-[328px]'>
            <div className='w-[328px] h-[420px] '>
                <Image src={image} alt={t(imageAlt)} width={328} height={420} />
            </div>
            <div className='flex flex-col'>
                <h4 className={`${inter.className}mx-auto mt-[24px] mb-[56px] font-medium text-[20px] leading-[1.2] text-black-600`}>
                    {t(cardTitle)}
                </h4>
                <div className='mx-auto mb-[40px]'>
                    <p className={`${inter.className} font-medium text-[28px] text-black-600`}>
                        {t(cardPrice)}
                    </p>
                    <p className={`${inter.className} font-medium text-[18px] leading-[1.2] text-black-600`}>
                        {t(cardSize)}
                    </p>
                </div>
                
            </div>
            
        </div>
    );
};

export default BeerCard;