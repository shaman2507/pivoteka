import Image from 'next/image';
import Link from 'next/link';

const Logo = ({ className, onClick }) => {
    return (
        <Link href="/" className={`block relative ${className}`} onClick={onClick} >
            <Image
                priority={true}
                src="/logo.svg"
                fill
                sizes="100px"
                alt="Pivoteka logo"
                className=" object-contain"
            />
        </Link>
    );
};

export default Logo;