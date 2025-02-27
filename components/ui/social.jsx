import { ImFacebook2 } from "react-icons/im";
import { RiInstagramFill } from "react-icons/ri";
import { BsTelegram } from "react-icons/bs";
import Link from "next/link";

const Social = ({ className, onClick }) => {
    return (
        <div className='flex flex-col gap-[40px]'>
            <Link className={`${className}`} href="https://www.facebook.com/Pivoteka77CG" onClick={onClick}>
                <ImFacebook2 color="orange" size="20" />
            </Link>
            <Link className={`${className}`} href="https://www.instagram.com/pivoteka_cg/" onClick={onClick}>
                <RiInstagramFill color="orange" size="24" />
            </Link>
            <Link className={`${className}`} href="https://t.me/pivoteka_cg" onClick={onClick}>
                <BsTelegram color="orange" size="22" />
            </Link>
        </div>
    );
};

export default Social;