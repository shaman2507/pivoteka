import Link from 'next/link';
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";

const LocationLink = ({ className, onClick }) => {
    return (
        <div className='flex items-center gap-[24px]'>
            <Link className={`${className}`} href="https://maps.app.goo.gl/3vWqMVqiBofgAFiu9" onClick={onClick}>
                <IoLocationSharp color="orange" size="24" />
            </Link>
            <Link className={`${className}`} href="tel:+382222222222" onClick={onClick}>
                <FaPhone color="orange" size="24" />
            </Link>
        </div>
    );
};

export default LocationLink;