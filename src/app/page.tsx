import { Decorations, Icon } from "./_components/atoms/Decorations";
import { servicios } from "./constants";

export default function Home() {

  return (
    <main className="relative min-h-screen items-center justify-center">

      <section className="grid md:grid-cols-2 md:text-left min-h-screen flex-col items-start justify-start"> 
        <div className="md:flex md:shrink-0 min-h-screen flex flex-col items-start justify-start">
          <img 
            src="/images/Collage.png" alt="imagen" 
            />
        </div>
      </section>

      <section className="grid md:grid-cols-2 md:text-left min-h-screen flex-col items-start justify-start"> 
        <div className="md:flex md:shrink-0 min-h-screen flex flex-col items-start justify-start">
            <img 
              src="/images/elipse.png" alt="imagen" 
              />
          </div>
      </section>

      {/* Organigrama */}
      <div className="flex flex-col items-center p-5 h-screen text-bold text-6xl poppins">
        <div className="flex h-fit items-center">
          <img src={'icons/simpleLogo.png'} className="size-20"/>rganigrama
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
