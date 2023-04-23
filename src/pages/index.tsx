import LandingMain from "@/components/landing/LandingMain";
import { Page } from "@/types/layout";
import Head from "next/head";

const LandingPage: Page = () => {
  return (
    <>
      <Head>
        <title> Landing Tecnologias Kiel </title>
      </Head>
      <LandingMain/>
    </>
   );
}
 
export default LandingPage;