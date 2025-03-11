import initTranslations from '../../app/i18n';

const Taste = async ({ lng }) => { 
    const { t } = await initTranslations(lng, ['taste']);
    return (
        <section>
            <div>
                
            </div>
        </section>
    );
};