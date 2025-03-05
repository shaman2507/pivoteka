/*This element is example, It can switch language*/
//import LanguageChanger from "@/components/Internationalization/LanguageChanger";
//import ExampleClient from "@/components/Internationalization/ExampleClient";

import Header from "@/components/Header";
import Hero from "@/components/Hero";

//file's name, you can add other files in other components
const i18nNamespaces = ['translation'];

export default async function Home({ params: { lng }}) {
  return (
    <div className="px-[16px] py-[12px] flex flex-col h-[1000px] bg-[url('/hero.webp')] bg-cover bg-no-repeat md:px-[38px] md:bg-[url('/hero-tablet.webp')]  xl:px-[80px] xl:bg-[url('/hero-desktop.webp')] ">
      <Header lng={lng} />
      <Hero lng={lng} />
    </div>
  );
}