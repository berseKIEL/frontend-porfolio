import { loadPorfolio } from "@/lib/ServerFunctions";
import Image from "next/image";
import Link from "next/link";
import { Button } from "primereact/button";

const LandingMain = () => {
    return ( 
        <div className={`grid grid-nogutter surface-0 text-800 bg-no-repeat bg-cover bg-center border-circle`}>
            <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center">
                <section>
                    <span className="block text-6xl font-bold mb-1">Barco Exequiel</span>
                    <div className="text-6xl text-primary font-bold mb-3"> Full Stack Developer </div>
                    <p className="mt-0 mb-4 text-700 line-height-3">
                        Bienvenidos a mi <strong>Proyecto Personal</strong>. Mi nombre es Exequiel, aunque me suelen llamar <strong>Kiel</strong> o <strong>Soni</strong>. Este lugar, contiene información relacionada a mi vida profesional de desarrollador como proyectos, blogs, y más.
                    </p>
                    <Link href={'/contact'}><Button label="Contacto" type="button" className="mr-3 p-button-raised" /></Link>
                    <Link href={'/porfolio'}><Button label="Ver Porfolio" type="button" className="p-button-outlined" /></Link>
                </section>
            </div>
            <div className="col-12 md:col-6 overflow-hidden flex align-items-center">
                <Image src="/LogoTransparent.png" height={350} width={350} alt="hero-1" className="md:ml-auto hidden md:block max-w-full max-h-full" />
            </div>
        </div>
     );
}

export async function getStaticProps() {
    const porfolio = await loadPorfolio()

    return {
        props: {
            porfolio
        },
    }
}

export default LandingMain;