import AboutUs from "@/components/AboutUs";
import BestOff from "@/components/BestOff";
import Brands from "@/components/Brands";
import Contacts from "@/components/Contacts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Taste from "@/components/Taste";
import TopDeal from "@/components/TopDeals";
import Wdwo from "@/components/Wdwo";

const i18nNamespaces = ['translation'];

export default async function Home({ params: { lng }}) {
  return (
    <>
      <div className="relative w-full h-[1000px] bg-[url('/hero.webp')] md:bg-[url('/hero-tablet.webp')] xl:bg-[url('/hero-desktop.webp')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-black-400">
          <Header lng={lng} />
          <Hero lng={lng} />
        </div>
      </div>

      <div className="w-[328px] md:w-[688px] xl:w-[1160px] xlr:w-[1280px] mx-auto">
        <BestOff lng={lng} />
      </div>
      <div className="h-[660px] bg-[url(/taste-the-world-bg-mob.webp)] md:bg-[url(/taste-the-world-bg-tablet.webp)] xl:bg-[url(/taste-the-world-bg-desktop.webp)] bg-cover bg-no-repeat">
        <Taste lng={lng} />
      </div>
      <AboutUs  lng={lng} />
      <Wdwo lng={lng} />
      <Brands lng={lng} />
      <TopDeal lng={lng} />
      <Contacts lng={lng} />
      <div className=" h-[749px] md:h-[310px] xl:h-[334px] bg-[url(/footer-mob.webp)] md:bg-[url(/footer-tabl-desk.webp)] bg-cover bg-no-repeat">
        <Footer lng={lng} />
      </div>
      
    </>
    
  );
}