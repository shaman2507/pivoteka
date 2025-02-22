import LocationLink from "../ui/location";
import Logo from "../ui/logo";
import MenuBtn from "./menu-btn";
import Navigation from "./navigation";

const Header = ({ lng }) => {
    return (
        <header className="fixed z-50 top-0 left-0 w-full bg-white">
            <div className="min-w-[328px] mx-auto px-[16px] py-[12px] flex">
                <Navigation lng={lng} />
                <LocationLink />
                <Logo className={'w-[80px] h-[80px]'} />
                <MenuBtn lng={lng} />
            </div>
        </header>
    );
};

export default Header;