import initTranslations from '../../app/i18n';
import Image from 'next/image';
import HeroImg from '@/public/aboutUs.webp';
import { lora } from '@/fonts';
import { inter } from '@/fonts';

const AboutUs = async ({ lng }) => {
    const { t } = await initTranslations(lng, ['aboutUs']);
    return (
        <section className='pt-[92px] bg-black-600'>
            <div className='px-[16px] '>
                <h2 className={`${lora.className} mb-[40px] text-medium text-[36px] leading-[1.2] text-yellow-500`}>
                    {t('aboutUs.title')}
                </h2>
                <p className={`${inter.className} mb-[20px] text-normal text-[16px] leading-[1.3] text-white-500`}>
                    {t('aboutUs.text-1')}
                </p>
                <p className={`${inter.className} mb-[80px] text-normal text-[16px] leading-[1.3] text-white-500`}>
                    {t('aboutUs.text-2')}
                </p>
            </div>
            <div>
                <Image src={HeroImg} alt="glass of beer" height={569} />
            </div>
        </section>
    );
};

export default AboutUs;