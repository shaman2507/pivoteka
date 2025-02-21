/*This element is example, It can switch language*/
//import LanguageChanger from "@/components/Internationalization/LanguageChanger";
//import ExampleClient from "@/components/Internationalization/ExampleClient";

import Header from "@/components/Header";

//file's name, you can add other files in other components
const i18nNamespaces = ['translation'];

export default async function Home({ params: { lng }}) {
  return (
    <>
      <Header lng={lng} />
    </>
  );
}
