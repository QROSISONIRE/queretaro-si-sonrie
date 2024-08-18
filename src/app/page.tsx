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
    </main>
  );
}
