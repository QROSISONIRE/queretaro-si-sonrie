import Image from "next/image";
import { HydrateClient } from "~/trpc/server";
import Map from "../_components/atoms/map";
import { Inter } from "next/font/google";
import ContactForm from "../_components/organisms/ContactForm";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"], // 400 es regular y 700 es bold
  style: "normal",
});

export default function ContactPage() {
  return (
    <HydrateClient>
      <div className={` h-auto w-full ${inter.className}`}>
        <Image
          src="/banner.jpg"
          alt="Banner"
          layout="responsive"
          width={1554}
          height={661}
          className="object-cover"
        />
        {/* Adjusted width, height, top, and transform for smaller size */}
        <div className="absolute left-1/2 top-[80%] flex h-[40%] w-[40%] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center rounded-2xl border border-white/20 bg-white bg-opacity-30 p-5 text-center text-black shadow-lg backdrop-blur-lg">
          <h1 className="mb-3 text-3xl font-bold sm:text-5xl">¡Comunícate!</h1>
          <p className="font-regular text-base leading-relaxed sm:text-lg">
            Escríbenos un mensaje o llámanos para resolver cualquier duda que
            tengas.
          </p>
        </div>
        
      </div>

      <section className="flex h-[500px] w-full pt-12">
        <div className="flex flex-1 items-center justify-end p-5">
          <div className="h-full max-h-[80%] w-full max-w-[90%]">
            <Map />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <div className="h-full max-h-[80%] w-full max-w-[90%]">
            <ContactForm />
          </div>
        </div>
      </section>
      
    </HydrateClient>
  );
}
