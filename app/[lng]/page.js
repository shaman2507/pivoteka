/*This element is example, It can switch language*/
//import LanguageChanger from "@/components/Internationalization/LanguageChanger";
//import ExampleClient from "@/components/Internationalization/ExampleClient";

import Header from "@/components/Header";
import Hero from "@/components/Hero";

//file's name, you can add other files in other components
const i18nNamespaces = ['translation'];

export default async function Home({ params: { lng }}) {
  return (
    <div className="flex flex-col px-[16px] py-[12px] h-screen bg-[url('/hero.webp')]">
      <Header lng={lng} />
      <Hero lng={lng} />
    </div>
  );
}