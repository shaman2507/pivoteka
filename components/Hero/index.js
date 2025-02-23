import initTranslations from '@/app/i18n';

const Hero = async ({ lng }) => {
    const { t } = await initTranslations(lng, ['hero']);
    return (
        <section>
            <div>
                <h1>
                    {t('hero.title')}
                </h1>
            </div>
        </section>
    );
};

export default Hero;