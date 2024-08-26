import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  void api.post.getLatest.prefetch();

  return (

    <main className="">
    {/*<main className="relative flex min-h-screen flex-col items-center justify-center bg-gray text-black">*/}
        
        {/*Space for navbar*/}
        <section className="h-20 invisible"></section>
        {/*<section className="h-16 invisible"></section>*/}

        <div className="h-16 w-1/3 bg-red-600 rounded-full"></div>
        <div className="h-16 w-[40%] bg-blue-500 rounded-full"></div>

        <section>

            <img src="images/donations/team_photo_donations_cropped.jpeg" 
            className="border-[2rem] border-blue-700 rounded-[1.7rem] w-auto mx-3"/>

            <span>
                <h1 className="font-extrabold text-5xl text-center">
                    ¡Muchas gracias!
                </h1>
                <br></br>
                <div>
                    <p className="font-bold text-center text-3xl">
                        Tu donativo nos servirá para ayudar a niños de todo Querétaro,
                        puedes realizar tu donativo al siguiente número de cuenta:
                    </p>
                </div>
                <br></br>
                <div>
                    <button className="px-8 py-2 text-xl font-bold rounded-full border border-gray-600 hover:text-white hover:bg-gray-500 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-gray-700 focus:ring-offset-2">
                    {// falta agregar que copie el numero cuando se haga clic en el boton
                    }
                    2345676543234543
                    </button>
                </div>
            </span>
        </section>

        <div className="h-14 w-[45%] bg-red-600 rounded-full"></div>
        <div className="h-14 w-[45%] bg-blue-500 rounded-full"></div>
        <div className="h-14 w-[45%] bg-yellow-300 rounded-full"></div>

        {/* 
        <div className="grid grid-rows-28 grid-cols-24 items-center text-center text-lg text-white font-light">
            <div className="row-start-2 row-span-8 col-start-3 col-span-7 w-10/12 mx-auto">
                <img className="mx-auto" src="images/donations/team_photo_donations.jpeg"></img>
            </div>
            <div className="row-start-2 col-start-10 col-span-13">
                <p className="text-indigo-600 text-3xl align-text-top font-bold">
                ¿QUÉ ES?
                </p>
            </div>
            <div className="row-start-4 row-span-7 col-start-10 col-span-13 text-justify text-black">
                <p>
                El Concurso Internacional de Programación Universitaria, ICPC por sus siglas en inglés,
                es un concurso de programación algorítmica para estudiantes universitarios.
                Equipos de tres, que representan a su universidad, trabajan para resolver los problemas
                del mundo real, fomentando la colaboración, la creatividad, la innovación y la capacidad
                de desempeñarse bajo presión. A través del entrenamiento y la competencia, los equipos
                se desafían entre sí para elevar el nivel de lo posible. En pocas palabras, es el
                concurso de programación más antiguo, más grande y más prestigioso del mundo.
                </p>
            </div>
        </div>
        */}
    </main>
  );
}
