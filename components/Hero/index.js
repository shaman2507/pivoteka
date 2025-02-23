import initTranslations from '@/app/i18n';
import { lora } from '@/fonts';

const Hero = async ({ lng }) => {
    const { t } = await initTranslations(lng, ['hero']);
    return (
        <section className='mt-[80px]'>
            <div className='flex justify-center'>
                <h1 className={`${lora.className} text-center font-medium text-5xl text-orange-600`}>
                    {t('hero.title')}
                </h1>
            </div>
        </section>
    );
};

export default Hero;