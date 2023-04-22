import Link from 'next/link';
import { Button } from 'primereact/button';
import { Ripple } from 'primereact/ripple';
import { classNames } from 'primereact/utils';
import { useRef, useState } from 'react';
import styles from '@/styles/landing.module.css';
import { NodeRef } from '@/types/layout';
import { StyleClass } from 'primereact/styleclass';

const LandingNavBar = () => {
  const [isHidden, setIsHidden] = useState(false);
  const menuRef = useRef<HTMLElement | null>(null);

  const toggleMenuItemClick = () => {
    setIsHidden((prevState) => !prevState);
  };

  return (
    <header className="py-4 px-4 mx-0 md:mx-6 lg:mx-8 lg:px-8 flex align-items-center justify-content-between relative lg:static">
      <StyleClass
        nodeRef={menuRef as NodeRef}
        selector="@next"
        enterClassName="hidden"
        leaveToClassName="hidden"
        hideOnOutsideClick
      >
        <Link href="/" className="lg:absolute flex lg:w-10 align-items-center justify-content-center z-4">
          <h1
            className={`text-900 font-medium text-center text-6xl line-height-3 text-primary-500 ${styles.textBreathing}`}
          >
            Kiel
          </h1>
        </Link>
        <i
          ref={menuRef}
          className="pi pi-bars text-4xl cursor-pointer block lg:hidden text-700"
        ></i>
      </StyleClass>
      <div
        className={classNames(
          'align-items-center surface-0 flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full left-0 px-6 lg:px-0 z-2 lg:border-none border-bottom-2 border-yellow-500',
          { hidden: isHidden }
        )}
        style={{ top: '100%' }}
      >
        <ul className="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row cursor-pointer">
          <li>
            <a
              href="#home"
              onClick={toggleMenuItemClick}
              className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3"
            >
              <span>Home</span>
              <Ripple />
            </a>
          </li>
          <li>
            <a
              href="#blog"
              onClick={toggleMenuItemClick}
              className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3"
            >
              <span>Blog</span>
              <Ripple />
            </a>
          </li>
          <li>
            <a
              href="#porfolio"
              onClick={toggleMenuItemClick}
              className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3"
            >
              <span>Porfolio</span>
              <Ripple />
            </a>
          </li>
          <li>
            <a
              href="#Contacto"
              onClick={toggleMenuItemClick}
              className="p-ripple flex m-0 md:ml-5 px-0 py-3 text-900 font-medium line-height-3"
            >
              <span>Contacto</span>
              <Ripple />
            </a>
          </li>
        </ul>
        <div className="flex justify-content-between lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0">
          <Button
            label="Login"
            text
            rounded
            className="border-none font-light line-height-2 text-primary-500 font-bold"
          ></Button>
          <Button
            label="Registro"
            rounded
            className="border-none ml-5 font-light line-height-2 bg-primary-500 text-black font-bold"
          ></Button>
        </div>
      </div>
    </header>
  );
};

export default LandingNavBar;
