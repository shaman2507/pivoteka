import LocationLink from "../ui/location";
import Logo from "../ui/logo";
import ChangeLang from "./change-lang";
import MenuBtn from "./menu-btn";
import Navigation from "./navigation";

const Header = ({ lng }) => {
    return (
        <header className="w-[328px] md:w-[688px] xl:w-[1160px] xlr:w-[1280px] mx-auto mb-[12px] z-50 top-0 left-0 w-full ">
            <div className="flex justify-between">
                <Navigation lng={lng}  />
                <LocationLink className="md:hidden" />
                
                <Logo className={'w-[80px] h-[80px] md:hidden'} />
                <div className="flex md:hidden">
                    <MenuBtn lng={lng} />
                </div>

                <div className="hidden md:flex justify-between w-[55%]">
                    <div className="flex">
                        <Logo className={'w-[80px] h-[80px]'} />
                    </div>
                    <div className="md:flex justify-between gap-[32px]">
                        <LocationLink className="md:flex" />
                        <MenuBtn lng={lng} />
                        <div className="hidden xl:flex">
                            <ChangeLang lng={lng} />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;