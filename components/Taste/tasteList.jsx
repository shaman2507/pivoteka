import initTranslations from '../../app/i18n';
import { inter } from '@/fonts';

const TasteList = async ({ lng, tasteTitle, tasteText, tasteTextSub }) => { 
    const { t } = await initTranslations(lng, ['taste']);
    return (
        <div className='flex flex-col justify-center w-[328px]'>
            
            <div className='flex flex-col'>
                <div className='flex justify-center'>
                    <h4 className={`${inter.className}mx-auto mt-[24px] mb-[36px] font-medium text-[20px] xl:text-[24px] leading-[1.2] text-black-600`}>
                        {t(tasteTitle)}
                    </h4>
                </div>
                
                <div className='mx-auto mb-[40px] flex items-baseline'>
                    <div>
                        <p className={`${inter.className} font-medium text-[28px] md:text-[32px] xl:text-[40px] text-black-600`}>
                            {t(tasteText)}
                        </p>
                    </div>
                    <div>
                        <p className={`${inter.className} font-medium text-[18px] md:text-[20px] xl:text-[24px] leading-[1.2] text-black-600`}>
                            {t(tasteTextSub)}
                        </p>
                    </div>
                    
                </div>
                
            </div>
                    
        </div>
    );
};

export default TasteList;