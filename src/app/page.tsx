
import { Decorations, Icon } from "./_components/Atoms/Decorations";

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
      <div className="h-screen p-10">
        <Decorations color1='fifth' color2='third' className='top-[50rem] -ml-[20rem] -z-20' rotation="-45" />
        <Icon/>
      </div>
    </main>
  );
}
