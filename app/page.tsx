import Link from "next/link";

import { LucideGithub, LucideLinkedin } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="relative w-full h-full overflow-hidden">
        <div className="absolute top-0 left-10 size-[200px] bg-red-500 rounded-full z-0 blur-2xl animate-blob opacity-25 mix-blend-soft-light animation-delay-1" />
        <div className="absolute top-0 right-10 size-[1000px] bg-purple-500 rounded-full z-0 blur-2xl animate-blob opacity-25 mix-blend-soft-light animation-delay-2" />
        <div className="absolute top-2/4 right-10 size-[1000px] bg-yellow-500 rounded-full z-0 blur-2xl animate-blob opacity-25 mix-blend-soft-light animation-delay-1" />
        <div className="absolute top-2/4 left-10 size-[1000px] bg-purple-500 rounded-full z-0 blur-2xl animate-blob opacity-25 mix-blend-soft-light animation-delay-2" />
        <div className="absolute bottom-0 right-10 size-[1000px] bg-red-500 rounded-full z-0 blur-2xl animate-blob opacity-25 mix-blend-soft-light animation-delay-1" />

        <div className="relative container mx-auto my-10 p-10 border border-neutral-800 rounded-xl bg-neutral-950/50 backdrop-blur-sm w-screen max-md:px-4 max-md:my-4">
          <section className="h-screen w-full flex items-center justify-between gap-4 max-lg:flex-col max-md:items-start max-md:justify-center">
            <div className="space-y-4">
              <h1 className="max-lg:text-3xl max-lg:max-w-72 text-6xl max-w-xl font-semibold leading-tight">
                Olá! Me chamo João Evangelista.
              </h1>

              <h2 className="max-lg:text-lg max-lg:max-w-96 text-xl text-base-500 max-w-lg">
                Sou um{" "}
                <span className="gradient-text animate-gradient-text">
                  desenvolvedor de software
                </span>
                , e é um prazer te conhecer!
              </h2>
            </div>

            <div className="flex flex-col gap-4 max-md:flex-row">
              <Link
                href="https://github.com/joaogabriels"
                target="_blank"
                className="hover:text-base-200 transition-colors"
              >
                <LucideGithub className="w-6 h-6" />
              </Link>

              <Link
                href="https://linkedin.com/in/joaogabrielse"
                target="_blank"
                className="hover:text-base-200 transition-colors"
              >
                <LucideLinkedin className="w-6 h-6" />
              </Link>
            </div>
          </section>

          <section className="h-full w-full flex justify-between items-start gap-4 max-lg:flex-col max-lg:items-center">
            <div className="space-y-4">
              <h2 className="text-xl text-base-500">Sobre mim</h2>

              <div className="space-y-4 text-xl w-4/5 max-md:text-md max-md:w-full">
                <p>
                  Desenvolvedor de graduando em Sistemas de Informação (último
                  ano).
                </p>

                <p>
                  Atuo profissionalmente no desenvolvimento web desde 2022, onde já
                  tive a oportunidade de trabalhar com diversas tecnologias e
                  me conectar com diversas pessoas.
                </p>

                <p>
                  Vamos conversar!
                </p>
              </div>
            </div>

            <Image
              src="/joaoevangelista.jpg"
              alt="João Evangelista"
              width={400}
              height={400}
              className="rounded-xl"
              quality={100}
            />
          </section>
        </div>
      </div>
    </main>
  );
}
