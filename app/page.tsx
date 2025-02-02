export default function Home() {
  return (
    <main>
      <section className="h-screen w-full">
        <div className="container mx-auto p-10 h-full flex items-center justify-between">
          <div className="space-y-4">
            <h1 className="max-lg:text-3xl max-lg:max-w-72 text-6xl max-w-xl font-semibold leading-tight">
              Olá! Me chamo João Evangelista.
            </h1>

            <h2 className="max-lg:text-lg max-lg:max-w-72 text-xl text-base-500 max-w-lg">
              Sou um <span className="gradient-text animate-gradient-text">desenvolvedor de software</span>, e é um prazer te conhecer!
            </h2>
          </div>
        </div>
      </section>
    </main>
  );
}
