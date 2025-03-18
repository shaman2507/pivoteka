/*This element is example, It can switch language*/
//import LanguageChanger from "@/components/Internationalization/LanguageChanger";
//import ExampleClient from "@/components/Internationalization/ExampleClient";

import BestOff from "@/components/BestOff";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Taste from "@/components/Taste";

//file's name, you can add other files in other components
const i18nNamespaces = ['translation'];

export default async function Home({ params: { lng }}) {
  return (
    <>
      <div className="px-[16px] md:px-[38px] xl:px-[80px] py-[12px] flex flex-col h-[1000px] bg-[url('/hero.webp')] bg-cover bg-no-repeat  md:bg-[url('/hero-tablet.webp')] xl:bg-[url('/hero-desktop.webp')] ">
        <Header lng={lng} />
        <Hero lng={lng} />
      </div>
      <div className="px-[16px] md:px-[38px] xl:px-[80px]">
        <BestOff lng={lng} />
      </div>
      <div className="h-[660px] bg-[url(/taste-the-world-bg-mob.webp)] md:bg-[url(/taste-the-world-bg-tablet.webp)] xl:bg-[url(/taste-the-world-bg-desktop.webp)] bg-cover bg-no-repeat">
        <Taste lng={lng} />
      </div>
      
    </>
    
  );
}