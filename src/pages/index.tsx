import AppLanguage from "@/components/AppLanguage";
import LandingFooter from "@/components/landing/LandingFooter";
import LandingMain from "@/components/landing/LandingMain";
import LayoutLanding from "@/layout/layoutlanding";
import { Page } from "@/types/layout";
import Head from "next/head";
import React from "react";

const LandingPage: Page = () => {
  return (
    <>
      <Head>
        <title> Landing Tecnologias Kiel </title>
      </Head>
      <LayoutLanding>
        <LandingMain/>
      </LayoutLanding>
    </>
   );
}

LandingPage.getLayout = function getLayout(page) {
  return (
    <React.Fragment>
      <AppLanguage/>
      {page}
    </React.Fragment>
  )
}
 
export default LandingPage;