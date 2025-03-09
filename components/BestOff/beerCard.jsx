import Image from 'next/image';
import initTranslations from '../../app/i18n';
import beerCardData from './beerCardData';

const BeerCard = async ({ lng, cardTitle, cardPrice }) => {
    const { t } = await initTranslations(lng, ['bestOff']);
    return (
        <div>
            <div>
                <Image src={beerCardData.image} />
            </div>
            <div>
                <h4>{cardTitle}</h4>
                <p>{cardPrice}</p>
            </div>
            
        </div>
    );
};

export default BeerCard;