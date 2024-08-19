
import { Decorations, Icon } from "./_components/Atoms/Decorations";

export default function Home() {

  return (
    <>
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
    </>
    
  );
}
