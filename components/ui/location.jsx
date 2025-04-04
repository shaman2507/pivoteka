import Link from 'next/link';
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { inter } from '@/fonts';

const LocationLink = ({ className, onClick }) => {
    return (
        <div className='flex items-center gap-[24px]'>
            <Link className={`${className}`} href="https://maps.app.goo.gl/3vWqMVqiBofgAFiu9" onClick={onClick}>
                <IoLocationSharp className="text-yellow-500 hover:text-yellow-600 active:text-yellow-700 disabled:text-yellow-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200" size="24" />
                <p className={`${inter.className} hidden xl:flex pl-[4px] text-white-500 hover:text-yellow-600`}>Budva</p>
            </Link>
            <Link className={`${className}`} href="tel:+382222222222" onClick={onClick}>
                <FaPhone className="text-yellow-500 hover:text-yellow-600 active:text-yellow-700 disabled:text-yellow-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200" size="24" />
                <p className={`${inter.className} hidden xl:flex pl-[4px] text-white-500 hover:text-yellow-600`}>+382222222222</p>
            </Link>
        </div>
    );
};

export default LocationLink;