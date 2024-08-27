import Link from "next/link";

import { LatestPost } from "~/app/_components/post";
import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";
import { Decorations, Icon } from "~/app/_components/Atoms/Decorations";
import CopyToClipboard from "~/app/_components/Atoms/copyToClipboard";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  void api.post.getLatest.prefetch();

  return (

    <main className="">
    {/*<main className="relative flex min-h-screen flex-col items-center justify-center bg-gray text-black">*/}
        
        {/*Space for navbar*/}
        <section className="h-10 invisible"></section>

        {/*<section className="h-16 invisible"></section>*/}

        <div className="grid lg:grid-cols-2 grid-rows-[10px,550px,500px,100px] lg:grid-rows-[10px,650px,270px] mx-36">
          <section className="row-start-2 mt-32 lg:mt-16 ml-0 lg:-ml-10">
            <img src="images/donations/team_photo_donations_cropped.jpeg"
            className="border-[2rem] border-blue-700 rounded-[1.7rem] w-auto m-auto max-h-[500px] lg:max-h-[650px]"/>
          </section>
          <section className="lg:col-start-2 row-start-3 lg:row-start-2 mt-28 lg:mt-14 mx-8 lg:mx-0 lg:ml-16 p-10 max-w-[30rem] lg:max-w-[40rem] flex flex-col items-center">
            <div className="m-auto">
              <h1 className="font-extrabold text-5xl text-center">
                ¡Muchas gracias!
              </h1>
              <br></br>
              <br></br>
              <div>
                <p className="font-bold text-center text-xl m-auto">
                  Tu donativo nos servirá para ayudar a niños de todo Querétaro.
                  Dona al siguiente número de cuenta:
                </p>
              </div>
              <br></br>
              <br></br>
              <div className="flex flex-col align-middle">
                <CopyToClipboard text="2345676543234543" />
              </div>
            </div>
          </section>
        </div>

        {/*
          Upper decoration
        */}
        <div className="h-16 w-[45rem] bg-third rounded-full absolute -right-64 -z-10 top-[7rem]"></div>
        <div className="h-16 w-[45rem] bg-fifth rounded-full absolute -right-36 -z-10 top-[10rem]"></div>

        {/*
          Lower decoration
        <div className="h-16 w-[45rem] bg-third rounded-full absolute -left-64 z-10 top-[100vh]"></div>
        <div className="h-16 w-[45rem] bg-fifth rounded-full absolute -left-36 z-10 top-[110vh]"></div>
        <div className="h-16 w-[45rem] bg-fourth rounded-full absolute -left-36 z-10 top-[120vh]"></div>
        */}
        <Decorations color1={"third"} color2={"fifth"} color3="fourth" className={"top-[50rem] left-[30rem] z-10"}/>

    </main>
  );
}
