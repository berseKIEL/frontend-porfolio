import React from 'react';
import { Page } from '@/types/layout';
import Image from 'next/image';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import AppLanguage from '@/layout/AppLanguage';

const LoginPage: Page = () => {
  return (
    <div className="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden">
      <div
        style={{
          borderRadius: '56px',
          padding: '0.3rem',
          background:
            'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)',
        }}
      >
        <div
          className="w-full flex flex-column align-items-center surface-card py-8 px-5 sm:px-8"
          style={{ borderRadius: '53px' }}
        >
          <Image
            src="/LogoTransparent.png"
            alt="Logo Exequiel Barco Cropped"
            width={150}
            height={150}
            className="flex-shrink-0 mb-4"
          />
          <div className="text-center mb-5">
            <div className="text-900 text-3xl font-medium mb-3">
              Panel Administrativo
            </div>
            <span className="text-600 font-medium">
              Inicie Sesión para continuar
            </span>
          </div>
          <div>
            <label
              htmlFor="email1"
              className="block text-900 text-xl font-medium mb-2"
            >
              Email
            </label>
            <InputText
              id="email1"
              type="text"
              placeholder="Email address"
              className="w-full md:w-30rem mb-5"
              style={{ padding: '1rem' }}
            />

            <label
              htmlFor="password1"
              className="block text-900 font-medium text-xl mb-2"
            >
              Password
            </label>
            <Password
              inputId="password1"
              placeholder="Password"
              toggleMask
              className="w-full mb-5"
              inputClassName="w-full p-3 md:w-30rem"
            ></Password>

            <div className="flex align-items-center justify-content-between mb-5 gap-5">
              <div className="flex align-items-center">
                <Checkbox
                  checked={false}
                  inputId="rememberme1"
                  className="mr-2"
                ></Checkbox>
                <label htmlFor="rememberme1">Remember me</label>
              </div>
              <a
                className="font-medium no-underline ml-2 text-right cursor-pointer"
                style={{ color: 'var(--primary-color)' }}
              >
                Forgot password?
              </a>
            </div>
            <Button
              label="Sign In"
              className="w-full p-3 text-xl"
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
};

LoginPage.getLayout = function getLayout(page) {
  return (
    <React.Fragment>
      <AppLanguage />
      {page}
    </React.Fragment>
  );
};

export default LoginPage;
