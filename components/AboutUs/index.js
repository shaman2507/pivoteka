import initTranslations from '../../app/i18n';
import Image from 'next/image';
import HeroImg from '@/public/aboutUs.webp';
import HeroImgTablet from '@/public/aboutUs-tablet.webp';
import HeroImgDesktop from '@/public/aboutUs-desk.webp';
import { lora } from '@/fonts';
import { inter } from '@/fonts';

const AboutUs = async ({ lng }) => {
    const { t } = await initTranslations(lng, ['aboutUs']);
    return (
        <section id="about-us" className='flex flex-col xl:flex-row bg-black-600'>
            <div className='pt-[92px] md:pt-[120px] xlr:pt-[160px] px-[16px] md:px-[128px] xl:px-[80px] pb-[80px] xl:pb-[120px] xl:w-[50%]'>
                <h2 className={`${lora.className} mb-[40px] xl:mb-[52px] text-medium text-[36px] md:text-[40px] xl:text-[64px] leading-[1.2] md:leading-[1.0] text-yellow-500`}>
                    {t('aboutUs.title')}
                </h2>
                <p className={`${inter.className} mb-[20px] xl:mb-[24px] text-normal text-[16px] leading-[1.3] text-white-500`}>
                    {t('aboutUs.text-1')}
                </p>
                <p className={`${inter.className}  text-normal text-[16px] leading-[1.3] text-white-500`}>
                    {t('aboutUs.text-2')}
                </p>
            </div>
            <div className='xl:w-[50%]'>
                <Image src={HeroImg} alt="glass of beer" height={569} className='md:hidden' />
                <Image src={HeroImgTablet} alt='glass of beer' height={569} className='hidden md:flex xl:hidden' />
                <Image src={HeroImgDesktop} alt='glass of beer' width={710} height={569} className='hidden xl:flex xlr:hidden' />
                <Image src={HeroImgDesktop} alt='glass of beer' width={960} height={569} className='hidden xlr:flex' />
            </div>
        </section>
    );
};

export default AboutUs;