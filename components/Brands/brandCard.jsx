import Image from 'next/image';
import initTranslations from '../../app/i18n';

const BrandCard = async ({ lng, image, imageAlt }) => { 
    const { t } = await initTranslations(lng, ['brand']);
    return (
        <div className='flex flex-col justify-center  min-w-[328px] '>
            <Image src={image} alt={t(imageAlt)} width={120} height={120} className={`mr-[12px] content-center `} />
        </div>
    );
};

export default BrandCard;