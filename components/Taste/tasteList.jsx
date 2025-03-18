import initTranslations from '../../app/i18n';
import { inter } from '@/fonts';

const TasteList = async ({ lng, tasteTitle, tasteText, tasteTextSub }) => { 
    const { t } = await initTranslations(lng, ['taste']);
    return (
        <div className='flex flex-col  w-[328px] md:w-[336px] xl:w-[272px] xlr:w-[304px] h-[244px] xl:h-[248px] p-[32px] rounded-[8px] bg-white-600'>
            <div className='flex '>
                <h4 className={`${inter.className}mx-auto mb-[16px] font-medium text-[20px] xl:text-[24px] leading-[1.2] text-orange-600`}>
                    {t(tasteTitle)}
                </h4>
            </div>
            
            <div className='flex flex-col justify-between items-baseline gap-[16px]'>
                <div>
                    <p className={`${inter.className} font-normal text-[14px] leading-[1.3] text-white-500`}>
                        {t(tasteText)}
                    </p>
                </div>
                <div >
                    <p className={`${inter.className} font-normal text-[14px] leading-[1.3] text-white-500`}>
                        {t(tasteTextSub)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default TasteList;