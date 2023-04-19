import React from 'react';
import { Page } from '@/types/types';
import Image from 'next/image';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Checkbox } from 'primereact/checkbox';
import { Button } from 'primereact/button';
import AppLanguage from '@/components/AppLanguage';
import styles from '@/styles/login.module.css';
import Head from 'next/head';
import Link from 'next/link';

const LoginPage: Page = () => {
  return (
    <div>
      <Head>
        <title> Login </title>
      </Head>
      <div className="surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden p-filled">
        <div
          style={{
            borderRadius: '56px',
            padding: '0.3rem',
            background:
              'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)',
          }}
        >
          <div
            className="w-full flex flex-column align-items-center surface-card md:py-6 py-8 px-6 sm:px-8"
            style={{ borderRadius: '53px' }}
          >
            <Image
              src="/LogoTransparent.png"
              alt="Logo Exequiel Barco Cropped"
              width={150}
              height={150}
              className={`flex-shrink-0 mb-4 ${styles.glowImage} hidden md:block`}
            />
            <div className="text-center md:mb-3 mb-5">
              <div className="text-900 text-3xl font-medium mb-2">
                Panel Administrativo
              </div>
              <span className="text-600 font-medium">
                Inicie sesión para continuar
              </span>
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-900 text-xl font-medium mb-2"
              >
                Email
              </label>
              <InputText
                id="email"
                type="text"
                placeholder="Correo eletronico"
                className="w-full md:w-30rem mb-5"
                style={{ padding: '1rem' }}
              />
              <label
                htmlFor="contraseña"
                className="block text-900 font-medium text-xl mb-2"
              >
                Contraseña
              </label>
              <Password
                inputId="contraseña"
                placeholder="Contraseña"
                toggleMask
                className="w-full mb-5"
                inputClassName="w-full p-3 md:w-30rem"
              ></Password>
              <div className="flex align-items-center justify-content-between mb-5 gap-5">
                <div className="flex align-items-center">
                  <Checkbox
                    checked={false}
                    inputId="recuerdame"
                    className="mr-2"
                  ></Checkbox>
                  <label htmlFor="rememberme1">Recordarme</label>
                </div>
              </div>
              <Button
                label="Iniciar sesión"
                className="w-full p-3 text-xl"
              ></Button>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.goBack}`}>
        <Link href="/">← Volver al porfolio</Link>
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
