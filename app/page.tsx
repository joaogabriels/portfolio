import Link from "next/link";

import {
  Laugh,
  LucideGithub,
  LucideLinkedin,
  TerminalSquare,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function Home() {
  const WORK_TECHNOLOGIES = [
    "JavaScript",
    "TypeScript",
    "React",
    "HTML",
    "CSS",
    "Tailwind",
    "NextJS",
    "React Testing Library",
    "Jest",
    "Vitest",
    "NodeJS",
    "Express",
    "Vercel",
    "Docker",
    "Git",
    "Jira",
    "Wordpress",
  ];

  const HOBBY_TECHNOLOGIES = ["Python", "C++", "AWS", "Firebase", "Figma"];

  return (
    <main>
      <div className="relative w-full h-full overflow-hidden">
        <div className="absolute top-0 left-10 size-[1000px] bg-red-500 rounded-full z-0 blur-2xl animate-blob opacity-35 mix-blend-soft-light animation-delay-1" />
        <div className="absolute top-0 right-10 size-[1000px] bg-purple-500 rounded-full z-0 blur-2xl animate-blob opacity-50 mix-blend-soft-light animation-delay-2" />
        <div className="absolute top-2/4 right-10 size-[1000px] bg-yellow-500 rounded-full z-0 blur-2xl animate-blob opacity-50 mix-blend-soft-light animation-delay-1" />
        <div className="absolute top-2/4 left-10 size-[1000px] bg-purple-500 rounded-full z-0 blur-2xl animate-blob opacity-50 mix-blend-soft-light animation-delay-2" />
        <div className="absolute bottom-0 right-10 size-[1000px] bg-red-500 rounded-full z-0 blur-2xl animate-blob opacity-50 mix-blend-soft-light animation-delay-1" />

        <div className="relative container mx-auto my-10 p-10 border border-neutral-800 rounded-xl bg-neutral-950/50 backdrop-blur-sm w-screen max-md:px-4 max-md:my-4 space-y-4">
          <section className="h-screen w-full flex items-center justify-between gap-4 max-lg:flex-col max-md:items-start max-md:justify-center">
            <div className="space-y-4">
              <h1 className="max-lg:text-3xl max-lg:max-w-full text-6xl max-w-screen-sm font-semibold leading-tight">
                Olá! Me chamo João Evangelista
                <span className="gradient-text animate-gradient-text">.</span>
              </h1>

              <h2 className="max-lg:text-lg max-lg:max-w-full text-xl text-base-500 max-w-lg">
                Sou{" "}
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
                className="hover:text-orange-500 transition-colors"
              >
                <LucideGithub className="size-5" />
              </Link>

              <Link
                href="https://linkedin.com/in/joaogabrielse"
                target="_blank"
                className="hover:text-orange-500 transition-colors"
              >
                <LucideLinkedin className="size-5" />
              </Link>
            </div>
          </section>

          <section className="grid grid-cols-2 gap-4 max-lg:grid-cols-1">
            <div className="space-y-4">
              <h2 className="text-xl text-base-500">Sobre mim</h2>

              <div className="space-y-4 text-xl max-md:text-md  max-md:w-full">
                <p>Sou graduando em Sistemas de Informação (último ano).</p>

                <p>
                  Atuo profissionalmente no desenvolvimento web desde 2022,
                  tendo trabalhado com diversas tecnologias e me conectado com
                  muitas pessoas.
                </p>

                <p>Vamos conversar!</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="space-y-4">
                <div className="flex justify-start items-center gap-4">
                  <TerminalSquare className="size-6 text-orange-500" />

                  <h3>Utilizado no trabalho</h3>
                </div>

                <div className="flex gap-4 flex-wrap max-w-md">
                  {WORK_TECHNOLOGIES.map((technology) => (
                    <Badge key={technology}>{technology}</Badge>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex justify-start items-center gap-4">
                  <Laugh className="size-6 text-orange-500" />

                  <h3>Utilizado por hobby</h3>
                </div>

                <div className="flex gap-4 flex-wrap max-w-1/2">
                  {HOBBY_TECHNOLOGIES.map((technology) => (
                    <Badge key={technology}>{technology}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="h-full w-full flex justify-between items-start gap-4 max-lg:flex-col max-lg:items-start">
            <div className="space-y-4">
              <h2 className="text-xl text-base-500">Experiências</h2>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
