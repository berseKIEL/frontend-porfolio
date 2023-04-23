import { loadPorfolio } from "@/lib/ServerFunctions";
import Image from "next/image";
import { Button } from "primereact/button";

const LandingMain = () => {
    return ( 
        <main className="main my-7 px-6 flex flex-column align-items-center justify-content-center">
            <div className={`grid grid-nogutter surface-0 text-800 bg-no-repeat bg-cover bg-center border-circle`}>
                <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center">
                    <section>
                        <span className="block text-6xl font-bold mb-1">Barco Exequiel</span>
                        <div className="text-6xl text-primary font-bold mb-3"> Full Stack Developer </div>
                        <p className="mt-0 mb-4 text-700 line-height-3">
                            Bienvenidos a mi <strong>Proyecto Personal</strong>. Mi nombre es Exequiel, aunque me suelen llamar <strong>Kiel</strong> o <strong>Soni</strong>. Este lugar, contiene información relacionada a mi vida profesional de desarrollador como proyectos, blogs, y más.
                        </p>
                        <Button label="Contacto" type="button" className="mr-3 p-button-raised" />
                        <Button label="Ver Porfolio" type="button" className="p-button-outlined" />
                    </section>
                </div>
                <div className="col-12 md:col-6 overflow-hidden">
                    <Image src="/Logo.jpg" height={400} width={450} alt="hero-1" className="md:ml-auto hidden md:block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
                </div>
            </div>
        </main>
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