import Link from 'next/link';

const LandingFooter = () => {
  return (
    <footer className="lg:mt-4 lg:mb-0 my-4 px-4 mx-0 lg:mx-8">
      <div className="text-center md:text-left">
        <div className="col-12 flex flex-column lg:flex-row text-center justify-content-center align-content-center lg:gap-5">
          <h2 className='flex align-items-center justify-content-center'> © Barco Exequiel - 2023 </h2>
          <div className="flex align-items-center justify-content-center gap-5 lg:gap-4">
            <Link href={'https://github.com/berseKIEL'} target='_blank' className="p-ripple flex align-items-center m-0 px-0 lg:py-4 text-center text-900 font-medium line-height-3">
                <i className="pi pi-github text-4xl text-primary-500"></i>
            </Link>
            <Link href={'mailto:exebarco280320@gmail.com'} target='_blank' className="p-ripple flex align-items-center m-0 px-0 lg:py-4 text-center text-900 font-medium line-height-3">
            <i className="pi pi-envelope text-4xl text-primary-500"></i>
            </Link>
            <Link href={'https://www.linkedin.com/in/exequielbarco/'} target='_blank' className="p-ripple flex align-items-center m-0 px-0 lg:py-4 text-center text-900 font-medium line-height-3">
                <i className="pi pi-linkedin text-4xl text-primary-500"></i>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
