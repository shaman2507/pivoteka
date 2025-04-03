import Image from 'next/image';
import { useState, useEffect } from 'react';
import initTranslations from '../../app/i18n';

const BrandCard = ({ lng, image, imageAlt = 'Brand logo' }) => { 
    const [t, setT] = useState(() => (key) => key);

    useEffect(() => {
        async function loadTranslations() {
            const { t } = await initTranslations(lng, ['brands']);
            setT(() => t);
        }
        loadTranslations();
    }, [lng]);

    return (
        <div className='w-[120px] h-[122px] flex flex-col justify-center items-center'>
            <Image 
                src={image} 
                alt={t(imageAlt) || 'Brand logo'}
                width={120} 
                height={120} 
                className="content-center"
            />
        </div>
    );
};

export default BrandCard;
