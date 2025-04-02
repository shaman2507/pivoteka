import Image from 'next/image';
import initTranslations from '../../app/i18n';

const BrandCard = async ({ lng, image, imageAlt }) => { 
    const { t } = await initTranslations(lng, ['brand']);
    return (
        <div className='w-[120px] h-[122px] flex flex-col justify-center items-center'>
            <Image src={image} alt={t(imageAlt)} width={120} height={120} className={`content-center `} />
        </div>
    );
};

export default BrandCard;