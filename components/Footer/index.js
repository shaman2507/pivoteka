import initTranslations from '../../app/i18n';
import Logo from '../ui/logo';

const Footer = async ({ lng }) => { 
    const { t } = await initTranslations(lng, ['footer']);
    return (
        <footer>
            <div>
                <div>
                    <Logo />
                    <div>
                        <Link href="#">
                            {t('footer.about-us')}
                        </Link>
                        <Link href="#">
                            {t('footer.beer')}
                        </Link>
                        <Link href="#">
                            {t('footer.promotions')}
                        </Link>
                        <Link href="#">
                            {t('footer.contacts')}
                        </Link>
                    </div>
                    <div>
                       <h3>{t('footer.find')}</h3> 
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;