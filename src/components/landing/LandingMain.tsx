import Image from "next/image";
import { Button } from "primereact/button";

const LandingMain = () => {
    return ( 
        <main className="main px-6 flex flex-column align-items-center justify-content-center">
            
            <div className="grid grid-nogutter surface-0 text-800">
                <div className="col-12 md:col-6 p-6 text-center md:text-left flex align-items-center ">
                    <section>
                        <span className="block text-6xl font-bold mb-1">Barco Exequiel</span>
                        <div className="text-6xl text-primary font-bold mb-3"> Full Stack Developer </div>
                        <p className="mt-0 mb-4 text-700 line-height-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                        <Button label="Learn More" type="button" className="mr-3 p-button-raised" />
                        <Button label="Live Demo" type="button" className="p-button-outlined" />
                    </section>
                </div>
                <div className="col-12 md:col-6 overflow-hidden">
                    <Image src="/Logo2.jpg" height={200} width={500} alt="hero-1" className="md:ml-auto block md:h-full" style={{ clipPath: 'polygon(8% 0, 100% 0%, 100% 100%, 0 100%)' }} />
                </div>
            </div>
    
        </main>
     );
}
 
export default LandingMain;