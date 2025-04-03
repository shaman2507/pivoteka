import Link from 'next/link';
import { IoLocationSharp } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import { inter } from '@/fonts';

const LocationFooter = ({ className, onClick }) => {
    return (
        <div className='mt-[52px] flex flex-col gap-[12px]'>
            <Link className={`${className} flex`} href="https://maps.app.goo.gl/3vWqMVqiBofgAFiu9" onClick={onClick}>
                <IoLocationSharp className="text-yellow-500 hover:text-yellow-600 active:text-yellow-700 disabled:text-yellow-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200" size="24" />
                <p className={`${inter.className} pl-[4px] my-auto font-medium text-[16px] leading-[1.2] text-white-500`}>Budva</p>
            </Link>
            <Link className={`${className} flex`} href="tel:+382222222222" onClick={onClick}>
                <FaPhone className="text-yellow-500 hover:text-yellow-600 active:text-yellow-700 disabled:text-yellow-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200" size="24" />
                <p className={`${inter.className} pl-[4px] my-auto font-medium text-[16px] leading-[1.2] text-white-500`}>+382222222222</p>
            </Link>
        </div>
    );
};

export default LocationFooter;