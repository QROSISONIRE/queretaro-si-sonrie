import { Decorations, Icon } from "./_components/Atoms/Decorations";
import { servicios } from "./constants";

import Link from "next/link";

export default function Home() {

  return (
    <main className="h-fit pb-32">
      {/* Inicio */}
      <section className="grid md:grid-cols-2 md:text-left h-screen flex-col items-start justify-start "> 
        <div className="md:flex md:shrink-0 min-h-screen flex flex-col items-start justify-start">
          <img 
            src="/images/Collage.png" alt="imagen" 
            />
        </div>
          <div className="md:flex md:shrink-0 flex flex-col items-start justify-start p-10 mt-20 ">
            <img
              src="/images/mainTitle.png"
              />
              <div className="bottom-0 left-0 flex space-x-4 m-10"> 
              <Link href="https://www.instagram.com/qrosisonrie/">
                <img
                  src="icons/logoInstagram.png"
                  className="w-8 h-8" 
                />
              </Link>
              <Link href="https://www.facebook.com/p/Queretaro-Si-Sonrie-100064085523281/?locale=es_LA">
                <img
                  src="icons/logoFacebook.png"
                  className="w-8 h-8"
                />
              </Link>
              <Decorations color1='fifth' color2='third' className='absolute top-[23rem] left-[65rem] -z-20'/>
              </div>
          </div>
        </section>
        
        <div className="md:shrink-0 flex mb-32">
          <Decorations color1='third' color2='fourth' className='relative right-[30rem] -z-20 -top-5 h-fit'/>
          <h1 className="text-4xl font-bold md:-ml-96  w-[50rem] block ">
            El Instituto Queretano para la Atención de Enfermedades Congénitas (IQUEC) 
          </h1>
        </div>
      

      {/* Misión / Visión */}
      <section className="grid md:grid-cols-2 md:text-left min-h-screen flex-col items-start justify-start"> 
        <div className="md:flex md:shrink-0 min-h-screen flex flex-col items-start justify-start ">
            <img 
              src="/images/elipse1.png" alt="imagen" className="w-[95%] top-[2%]"
            />
            <Decorations color1='third' color2='fourth' className='relative left-[65rem] -z-20 '/>
         </div>
         <div className="md:flex md:shrink-0 flex flex-col items-start justify-start">
          <h1 className="text-4xl font-bold ml-5 md:ml-[30%] -mt-[3%] w-[100%]">
            Conócenos...
          </h1>
          <p className="text-2xl ml-5 md:ml-[15%] mt-[5%] w-[75%] overflow-wrap: break-word text-justify"> 
            Nuestra misión es atender a todos los pacientes con fisura labio palatina que se encuentren radicando 
            en la ciudad de Querétaro, teniendo acceso a un tratamiento multidisciplinario de alta calidad, llevado 
            a cabo por especialistas calificados en el protocolo de atención. Para ello, todo nuestro personal médico 
            y dental es voluntario en el proyecto, donando sus honorarios médicos.
          </p>
         </div>
      </section>

      {/* Organigrama */}
      <div className="flex flex-col items-center p-5 h-screen text-bold text-6xl poppins">
        <div className="flex h-fit items-center">
          <img src={'icons/simpleLogo.png'} className="size-20"/>Organigrama
        </div>
        <hr className="w-11/12 mt-5 border-2 border-black"/>
      </div>
    {/* Servicios */}
        {/* <Decorations color1='fifth' color2='third' className='top-[50rem] -ml-[20rem] -z-20' rotation="-45" /> */}
      <section className="h-screen p-10 w-full">
        <h1 className="text-6xl poppins text-center mb-10">Servicios</h1>

        <section className="h-screen">
          
            <Decorations color1={"fourth"} color2={""} color3="fifth" className={"-rotate-45 top-[360vh] -right-24"}/>
            <Decorations color1={"third"} color2={"fourth"} color3="fifth" className={"-rotate-45 top-[320vh] -left-36"}/>
            {/* <Decorations color1={"third"} color2={"fourth"} color3="fifth" className={"top-[400vh] right-[30rem] -rotate-45 border-2 border-red-600 w-32"}/> */}
          <section className="h-screen flex flex-col gap-10 flex-wrap items-center">
              {servicios.map((servicio, i) => (
                <div key={i}>
                  <div className="flex items-center gap-5">
                    <Icon/>
                    <span>
                      <h2 className="poppins">{servicio.titulo}</h2>
                      <span className="inter block w-96">{servicio.descripción}</span>
                    </span>
                  </div>
                </div>
              ))}
              </section>
            </section>
        </section>

    </main>
  );
}