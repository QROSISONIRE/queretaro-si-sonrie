<<<<<<< HEAD
import Link from "next/link";
import { LatestPost } from "~/app/_components/post";
import { getServerAuthSession } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

export default async function Home() {
  const hello = await api.post.hello({ text: "from tRPC" });
  const session = await getServerAuthSession();

  void api.post.getLatest.prefetch();

  return (
      <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white">
        <Link href="/team">
          <button className="bg-blue-500 text-white py-2 px-4 rounded">
            Go to Team
          </button>
        </Link>
      </main>
  );
}
=======
export default function Home() {

  return (
    
    <div className="h-[100rem] bg-red-50">
      Inicio
    </div>
    
  );
}
>>>>>>> main
