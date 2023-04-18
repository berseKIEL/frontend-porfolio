import React from 'react';
import { Page } from '@/types/layout'

const LoginPage: Page = () => {
  return <h1> Login page </h1>;
};

LoginPage.getLayout = function getLayout(page) {
  return <React.Fragment>{page}</React.Fragment>;
};

export default LoginPage;
