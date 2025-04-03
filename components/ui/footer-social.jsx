import { ImFacebook2 } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { BsTelegram } from "react-icons/bs";
import Link from "next/link";

const FooterSocial = ({ className, onClick }) => {
    return (
        <div className='flex mt-[12px] gap-[24px]'>
            <Link className={`${className} flex justify-center w-[24px] h-[24px]`} href="https://www.facebook.com/Pivoteka77CG" onClick={onClick}>
                <ImFacebook2 className="text-yellow-500 hover:text-yellow-600 active:text-yellow-700 disabled:text-yellow-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200" size="24" />
            </Link>
            <Link className={`${className} flex justify-center w-[24px] h-[24px]`} href="https://www.instagram.com/pivoteka_cg/" onClick={onClick}>
                <RiInstagramFill className="text-yellow-500 hover:text-yellow-600 active:text-yellow-700 disabled:text-yellow-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200" size="24" />
            </Link>
            <Link className={`${className} flex justify-center w-[24px] h-[24px]`} href="https://t.me/pivoteka_cg" onClick={onClick}>
                <BsTelegram className="text-yellow-500 hover:text-yellow-600  active:text-yellow-700 disabled:text-yellow-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200" size="24" />
            </Link>
        </div>
    );
};

export default FooterSocial;