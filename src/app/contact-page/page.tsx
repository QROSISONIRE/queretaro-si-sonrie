import Image from "next/image";
import { HydrateClient } from "~/trpc/server";
import Map from "../_components/atoms/map";
import { Inter } from "next/font/google";
import ContactForm from "../_components/organisms/ContactForm";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  style: "normal",
});

export default function ContactPage() {
  return (
    <HydrateClient>
      <div className={`h-auto w-full ${inter.className}`}>
        <Image
          src="/banner.jpg"
          alt="Banner"
          layout="responsive"
          width={1554}
          height={661}
          className="object-cover"
        />
        <div className="relative left-1/2 top-[80%] flex h-[40%] w-[80%] -translate-x-1/2 -translate-y-1/2 transform flex-col items-center justify-center rounded-2xl border border-white/20 bg-white bg-opacity-30 p-4 text-center text-black shadow-lg backdrop-blur-lg sm:h-[35%] sm:w-[70%] md:h-[30%] md:w-[60%] lg:h-[25%] lg:w-[50%] xl:h-[20%] xl:w-[40%]">
          <h1 className="mb-3 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            ¡Comunícate!
          </h1>
          <p className="font-regular text-sm leading-relaxed sm:text-base md:text-lg lg:text-xl">
            Escríbenos un mensaje o llámanos para resolver cualquier duda que
            tengas.
          </p>
        </div>
      </div>

      <section className="flex w-full flex-col items-center justify-center space-y-5 md:flex-row md:space-y-0 md:space-x-5">
        <div className="w-full max-w-[90%] flex-1 p-5 sm:max-w-[70%] md:max-w-[50%] flex items-center justify-center">
            <Map />
        </div>
        <div className="w-full max-w-[90%] flex-1 px-5 sm:max-w-[70%] md:max-w-[45%] md:px-10 lg:px-20">
            <ContactForm />
        </div>
      </section>
    </HydrateClient>
  );
}
