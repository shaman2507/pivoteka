import Header from '@/components/Header';
import initTranslations from '../../i18n';
import { inter, lora } from '@/fonts';
import Link from 'next/link';

const NotFound = async ({ lng }) => {
    const { t } = await initTranslations(lng, ['notFound']);
    return (
        <> 
            <div className='w-screen h-screen bg-[url(/not-found-mob.webp)] md:bg-[url(/not-found-tablet.webp)] xl:bg-[url(/not-found.webp)] bg-cover bg-no-repeat'>
                <div className='w-screen h-screen flex flex-col bg-black-200'>
                    <Header />
                    <div className='my-auto flex flex-col items-center'>
                        <h1 className={`${lora.className} font-semibold text-[100px] md:text-[120px] leading-[1.1] text-yellow-500`}>404</h1>
                        <p className={`${inter.className} mt-[24px] font-normal md:font-medium text-[16px] md:text-[20px] xl:text-[24px] leading-[1.3] md:leading-[1.2] text-white-500`}>{t('not-found.error')}</p>
                        <Link href="/" className='w-[328px] md:w-[174px] h-[44px] mt-[24px] flex rounded-full bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 disabled:bg-yellow-700 disabled:opacity-30 disabled:cursor-not-allowed transition-colors duration-200 cursor-pointer'>
                            <p className='mx-auto my-auto font-medium text-[16px] leading-[1.2]'>{t('not-found.button')}</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NotFound;