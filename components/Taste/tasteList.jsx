import initTranslations from '../../app/i18n';
import { inter } from '@/fonts';

const TasteList = async ({ lng, tasteTitle, tasteText, tasteTextSub }) => { 
    const { t } = await initTranslations(lng, ['taste']);
    return (
        <div className='flex flex-col justify-center w-[328px]'>
            
            <div className='flex flex-col p-[32px]'>
                <div className='flex '>
                    <h4 className={`${inter.className}mx-auto mb-[16px] font-medium text-[20px] xl:text-[24px] leading-[1.2] text-orange-600`}>
                        {t(tasteTitle)}
                    </h4>
                </div>
                
                <div className='mx-auto flex flex-col items-baseline gap-[16px]'>
                    <div>
                        <p className={`${inter.className} font-normal text-[16px] md:text-[32px] xl:text-[40px] leading-[1.3] text-white-500`}>
                            {t(tasteText)}
                        </p>
                    </div>
                    <div className='mb-[32px]'>
                        <p className={`${inter.className} font-normal text-[16px] md:text-[20px] xl:text-[24px] leading-[1.3] text-white-500`}>
                            {t(tasteTextSub)}
                        </p>
                    </div>
                </div>
                
            </div>
                    
        </div>
    );
};

export default TasteList;