import { Decorations, Icon } from "./_components/Atoms/Decorations";
import {Carousel} from "./_components/Atoms/Carousel";
import { servicios } from "./constants";

import Link from "next/link";

export default function Home() {

  const images = [
    '/images/601.png',
    '/images/602.png',
    '/images/603.png',
    '/images/604.png',
    '/images/605.png'
  ];
  
  return (
    <main className="h-fit pb-32">
      {/* Inicio */}
      <section className="grid md:grid-cols-2 md:text-left h-screen flex-col items-start justify-start "> 
        <div className="md:flex md:shrink-0 min-h-screen flex flex-col items-start justify-start">
          <img 
            src="/images/Collage.png" alt="imagen" 
            />
        </div>
          <div className="-mt-20 md:mt-12 md:flex md:shrink-0 flex flex-col items-start justify-start p-10  ">
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
              <Decorations color1='fifth' color2='third' className='hidden md:block lg:block xl:block md:left-[40rem] lg:left-[50rem] xl:top-[26rem] xl:left-[65rem] -z-20 '/>
              <Decorations color1='fifth' color2='third' className='absolute top-[38rem] left-[20rem] lg:hidden md:hidden xl:hidden'/>
              </div>
          </div>
        </section>
        
        <div className="mt-60 md:shrink-0 flex md:mb-32 md:-mt-52">
          <Decorations color1='third' color2='fourth' className='relative right-[30rem] md:right-[30rem] md:-top-5 lg:right-[30rem] lg:top-1 xl:right-[30rem] xl:top-20 h-fit -z-20'/>
          <h1 className="text-4xl font-bold sm:-ml-80 md:-mt-8 md:-ml-80 md:w-[40rem] lg:right-[30rem] lg:mt-5 xl:right-[30rem] xl:mt-32 block ">
            El Instituto Queretano para la Atención de Enfermedades Congénitas (IQUEC) 
          </h1>
        </div>
      

      {/* Misión / Visión */}
      <section className="grid md:grid-cols-2 md:text-left min-h-screen flex-col items-start justify-start"> 
        <div className="md:flex md:shrink-0 min-h-screen flex flex-col items-start justify-start ">
            <img 
              src="/images/elipse1.png" alt="imagen" className="w-[95%] top-[2%] md:-mt-20 xl:-mt-24"
            />
            <Decorations color1='third' color2='fourth' className='relative left-[65rem] -z-20 md:left-[35rem] md:mt-60 lg:mt-8 xl:-mt-24 xl:left-[65rem]'/>
        </div>
        <div className="sm:-mt-32 sm:ml-16 md:-mt-11 md:-ml-20 md:flex md:shrink-0 flex flex-col items-start justify-start lg:-mt-20">
          <h1 className="text-4xl font-bold ml-5 md:ml-[30%] -mt-[3%] w-[100%] xl:mt-8">
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

      <section className="grid md:grid-cols-2 md:text-left min-h-screen flex-col items-start justify-start">
        <div className="sm:flex sm:shrink-0 sm:mt-10 md:flex md:shrink-0 min-h-screen flex flex-col items-start justify-start md:-mt-32 xl:-mt-44">
          <h1 className="text-4xl font-bold sm:ml-20 sm:mt-[1%] w-[100%] z-50  md:ml-[110%]">
              Visión
            </h1>
            <p className="text-2xl sm:ml-20  md:ml-[110%] mt-[5%] w-[75%] overflow-wrap: break-word text-justify"> 
              Nuestra meta es alcanzar estándares de calidad en el protocolo de atención, así como
              desarrollar proyectos de investigación para mejorar la atención multidisciplinaria.
            </p>
            <p className="text-2xl sm:ml-20 md:ml-[110%] mt-[5%] w-[75%] overflow-wrap: break-word text-justify"> 
              Deseamos seguir siendo una fundación económicamente autosustentable para poder trabajar
              con finanzas transparentes y no depender de donativos, los cuales pueden ser variables.
            </p>
          <h1 className="text-4xl text-[#FF4141] font-bold ml-5 md:ml-[95%] mt-[7%] w-[100%] overflow-wrap: break-word text-center xl:mt-[3%] xl:ml-[95%]">
            ¡Sigue sonriendo con <br></br>nosotros!
          </h1>
          <div className="max-w-lg sm:-mt-[10%] sm:ml-24 border-blue-600 border-[14px] border-solid rounded-md md:-mt-[29rem] lg:-mt-[82%] xl:-mt-[60%]">
            <Carousel images={images} />
          </div>
          <button className="rounded-md bg-[#FF4141] text-slate-200 text-lg w-28 h-8 shadow-xl hover:bg-red-500 sm:ml-[40%] sm:mt-[5%] md:ml-[48%] lg:mt-[5%] lg:ml-[45%] xl:mt-20 xl:ml-[138%] ">Donar</button>
        </div>
      </section>

      {/* Organigrama */}
      <div className="flex flex-col items-center p-5 h-screen text-bold text-6xl poppins">
        <div className="flex h-fit items-center">
          <img src={'icons/simplelogo.png'} className="size-20"/>Organigrama
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
