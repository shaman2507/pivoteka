import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export const SwiperBtn = ({ uniqueId }) => {
    return (
        <div className="flex justify-center gap-[24px]">
            <div className={`s-button-prev-${uniqueId} w-[48px] h-[48px] flex justify-center items-center rounded-full bg-yellow-500 cursor-pointer`}>
                <BsArrowLeft />
            </div>
            <div className={`s-button-next-${uniqueId} w-[48px] h-[48px] flex justify-center items-center rounded-full bg-yellow-500 cursor-pointer`}>
                <BsArrowRight />
            </div>
            
        </div>
    );
};