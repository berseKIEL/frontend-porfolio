import AppLanguage from "@/components/AppLanguage";
import { Page } from "@/types/layout";
import Head from "next/head";
import React from "react";

const LandingPage: Page = () => {
  return (
    <>
      <Head>
        <title> Creador De porfolios de Exequiel Barco</title>
      </Head>
      <div>
        <h1> El creador de porfolios </h1>
      </div>
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