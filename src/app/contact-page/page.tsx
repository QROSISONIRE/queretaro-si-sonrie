import Image from 'next/image';
import { HydrateClient } from "~/trpc/server";
import Map from '../_components/atoms/map';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '700'], // 400 es regular y 700 es bold
  style: 'normal',
});

export default function ContactPage() {
  return (
    <HydrateClient>
        <div className={`relative w-full h-auto ${inter.className}`}>
            <Image
                src="/banner.jpg"
                alt="Banner"
                layout="responsive"
                width={1554}
                height={661} 
                className="object-cover"
            />
            {/* Adjusted width, height, top, and transform for smaller size */}
            <div className="absolute top-[90%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-white bg-opacity-30 rounded-2xl backdrop-blur-lg border border-white/20 shadow-lg p-5 flex flex-col items-center justify-center text-center text-black">
                <h1 className="text-3xl sm:text-5xl mb-3 font-bold">¡Comunícate!</h1>
                <p className="text-base sm:text-lg leading-relaxed font-regular">Escríbenos un mensaje o llámanos para resolver cualquier duda que tengas.</p>
            </div>
        </div>

        <section className="flex w-full h-[500px] pt-12">
            <div className="flex-1 flex items-center justify-center p-5">
                <div className="w-full h-full max-w-[90%] max-h-[80%]">
                    <Map />
                </div>
            </div>
            <div className="flex-1 flex items-center justify-center">
                <h2 className="text-2xl font-bold">Forms</h2>
            </div>
        </section>
    </HydrateClient>
  );
}
