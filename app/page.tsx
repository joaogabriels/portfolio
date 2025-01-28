export default function Home() {
  return (
    <main>
      <section className="h-screen w-full bg-[linear-gradient(to_right,#c3c7cb_1px,transparent_1px),linear-gradient(to_bottom,#c3c7cb_1px,transparent_1px)] bg-[size:16px_16px]">
        <div className="container mx-auto p-10 h-full flex items-center justify-center">
          <div className="bg-base-50 h-full w-full p-10 border-4 border-neutral-900 shadow-card rounded-lg flex items-center justify-center">
            <div>
              <h1 className="max-lg:text-4xl text-8xl">João Evangelista</h1>
              <h2 className="max-lg:text-2xl text-6xl">
                Desenvolvedor de software
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen bg-base-100">
        <div className="border-y-4 border-y-neutral-900 py-4 bg-base-50 overflow-hidden flex gap-10">
          <div className="animate-infinite-scroll flex gap-10">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={`experiencia_first_${i}`} className="text-4xl">
                Experiência
              </div>
            ))}
          </div>

          <div className="animate-infinite-scroll flex gap-10" aria-hidden>
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={`experiencia_second_${i}`} className="text-4xl">
                Experiência
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="h-screen">
        <div className="border-y-4 border-y-neutral-900 py-4 bg-base-50 overflow-hidden flex gap-10">
          <div className="animate-reverse-infinite-scroll flex gap-10 whitespace-nowrap">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={`sobre_mim_first_${i}`} className="text-4xl">
                Sobre mim
              </div>
            ))}
          </div>

          <div className="animate-reverse-infinite-scroll flex gap-10 whitespace-nowrap" aria-hidden>
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={`sobre_mim_second_${i}`} className="text-4xl">
                Sobre mim
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="h-screen">
        <div className="border-y-4 border-y-neutral-900 py-4 bg-base-50 overflow-hidden flex gap-10">
          <div className="animate-infinite-scroll flex gap-10">
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={`contato_first_${i}`} className="text-4xl">
                Contato
              </div>
            ))}
          </div>

          <div className="animate-infinite-scroll flex gap-10" aria-hidden>
            {Array.from({ length: 15 }).map((_, i) => (
              <div key={`contato_second_${i}`} className="text-4xl">
                Contato
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
