import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";

export const SwiperBtn = () => {
    return (
        <div className="mb-[100px] flex justify-center gap-[24px]">
            <div className="s-button-prev w-[48px] h-[48px] flex justify-center items-center rounded-full bg-yellow-500">
                <BsArrowLeft />
            </div>
            <div className="s-button-next w-[48px] h-[48px] flex justify-center items-center rounded-full bg-yellow-500">
                <BsArrowRight />
            </div>
            
        </div>
    );
};