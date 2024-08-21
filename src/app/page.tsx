
import Link from "next/link";
import { Decorations, Icon } from "./_components/Atoms/Decorations";

export default function Home() {

  return (
    <main className="relative min-h-screen items-center justify-center md:overflow-x-hidden">
      {/* Inicio */}
      <section className="grid md:grid-cols-2 md:text-left min-h-screen flex-col items-start justify-start"> 
        <div className="md:flex md:shrink-0 min-h-screen flex flex-col items-start justify-start">
          <img 
            src="/images/Collage.png" alt="imagen" 
            />
        </div>
          <div className="md:flex md:shrink-0 min-h-screen flex flex-col items-start justify-start p-10 mt-20">
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
        <div className="md:flex md:shrink-0 flex flex-col items-start justify-start">
          <Decorations color1='third' color2='fourth' className='top-[37rem] -ml-[30rem] -z-20'/>
          <h1 className="text-4xl font-bold ml-5 md:ml-96 -mt-[23%] w-[100%] overflow-wrap: break-word">
            El Instituto Queretano para la Atención de Enfermedades Congénitas (IQUEC) 
          </h1>
        </div>
      </section>

      {/* Misión / Visión */}
      <section className="grid md:grid-cols-2 md:text-left min-h-screen flex-col items-start justify-start"> 
        <div className="md:flex md:shrink-0 min-h-screen flex flex-col items-start justify-start">
            <img 
              src="/images/elipse1.png" alt="imagen" className="w-[95%] top-[2%]"
            />
            <Decorations color1='third' color2='fourth' className='top-[42%] ml-[70%] -z-20'/>
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
      <section className="h-screen p-10 w-full">
        <h1 className="text-6xl poppins text-center mb-20">Servicios</h1>
        {/* <Decorations color1='fifth' color2='third' className='top-[50rem] -ml-[20rem] -z-20' rotation="-45" /> */}
        <Icon/>
      </section>
    </main>
  );
}
