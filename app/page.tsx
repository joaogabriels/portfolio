import Link from "next/link";
import {
  ArrowDown,
  Laugh,
  LucideGithub,
  LucideLinkedin,
  TerminalSquare,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { BlobContainer } from "@/components/ui/blob-container";
import { ExperienceCard } from "@/components/ui/experience-card";

export default function Home() {
  const WORK_TECHNOLOGIES = [
    "JavaScript",
    "TypeScript",
    "React",
    "HTML",
    "Vue",
    "CSS",
    "Tailwind",
    "NextJS",
    "NuxtJS",
    "Jest",
    "Vitest",
    "NodeJS",
    "Express",
    "NestJS",
    "Vercel",
    "Docker",
    "Git",
    "Wordpress",
  ];

  const HOBBY_TECHNOLOGIES = [
    "Python",
    "C++",
    "AWS",
    "Firebase",
    "PostgreSQL",
    "Figma",
    ".NET",
    "C#",
    "MySQL",
    "Jiu-Jitsu",
    "DJing",
    "Reading",
  ];

  const WORK_EXPERIENCES = [
    {
      title: "Protecnologia",
      description:
        "Desenvolvo e mantenho projetos web, focando em performance e qualidade. Crio interfaces modernas e responsivas, integro APIs e aplico práticas avançadas para otimizar a experiência do usuário.",
      date_range: "Dez 2024 - Atualmente",
      image_src: "/protecnologia.jpeg",
    },
    {
      title: "Notificações Inteligentes",
      description:
        "Atuei na manutenção de sistemas legados, implementando soluções de rastreamento e métricas. Participei da modernização da página principal, aplicando práticas de UX e SEO para melhorar a experiência do usuário.",
      date_range: "Out 2024 - Dez 2024",
      image_src: "/notificacoesinteligentes.png",
    },
    {
      title: "Witure",
      description:
        "Minha primeira experiência foi focada na criação de interfaces dinâmicas e intuitivas. Trabalhei na implementação de uma dashboard e um checkout, transformando requisitos em soluções ágeis e eficientes.",
      date_range: "Mai 2022 - Out 2024",
      image_src: "/witure.svg",
    },
  ];

  return (
    <main>
      <BlobContainer>
        <div className="relative container mx-auto my-10 p-10 border border-neutral-800 rounded-xl bg-neutral-950/50 backdrop-blur-sm w-screen max-lg:my-0 max-lg:p-5 max-lg:border-none max-xl:my-5 space-y-10">
          <section className="relative h-screen w-full flex items-center justify-between gap-4 max-md:flex-col max-md:items-start max-md:justify-center">
            <div className="space-y-4">
              <h1 className="max-sm:text-3xl max-md:max-w-full text-6xl max-w-screen-sm font-semibold leading-tight">
                Olá! Me chamo João Evangelista
                <span className="gradient-text animate-gradient-text">.</span>
              </h1>

              <h2 className="max-sm:text-lg max-md:max-w-full text-xl text-base-500 max-w-lg">
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

            <div className="absolute max-md:bottom-20 bottom-24 left-0 text-base-500">
              <ArrowDown className="size-5 animate-bounce" />
            </div>
          </section>

          <section className="grid grid-cols-2 gap-4 max-lg:grid-cols-1 max-md:gap-8">
            <div className="space-y-4">
              <h2 className="text-xl text-base-500">Sobre mim</h2>

              <div className="space-y-4 max-md:text-md max-md:w-full">
                <p>Sou graduando em Sistemas de Informação (último ano).</p>

                <p>
                  Atuo profissionalmente no desenvolvimento web desde 2022,
                  tendo trabalhado com diversas tecnologias e me conectado com
                  muitas pessoas.
                </p>

                <p>Vamos conversar!</p>
              </div>
            </div>

            <div className="flex flex-col items-start justify-between gap-4">
              <div className="space-y-4">
                <div className="flex justify-start items-center gap-4">
                  <TerminalSquare className="size-6 text-orange-500" />

                  <h3>Utilizado no trabalho</h3>
                </div>

                <div className="flex gap-4 flex-wrap">
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

                <div className="flex gap-4 flex-wrap">
                  {HOBBY_TECHNOLOGIES.map((technology) => (
                    <Badge key={technology}>{technology}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className="h-full w-full flex flex-col space-y-4">
            <h2 className="text-xl text-base-500">Experiências</h2>

            <div className="space-y-4 divide-y divide-neutral-800 divide-dashed">
              {WORK_EXPERIENCES.map((experience) => (
                <ExperienceCard
                  key={experience.title}
                  title={experience.title}
                  description={experience.description}
                  imageSrc={experience.image_src}
                  dateRange={experience.date_range}
                />
              ))}
            </div>
          </section>

          <section className="grid grid-cols-4 gap-4 max-lg:grid-cols-1 max-md:gap-8">
            <div className="space-y-4 col-span-3">
              <h2 className="text-xl text-base-500">Contato</h2>

              <div className="space-y-4">
                <p>
                  Estou disponível para qualquer forma de contato. Seja para
                  conversar sobre tecnologia, trabalho ou apenas para bater um
                  papo. Você pode encontrar meu currículo{" "}
                  <a href="https://1drv.ms/b/c/503ed045a4ac63b5/Eac7hwVZOUFCpAYrz12i5_cBTMDMzTVagK_TdPwLMP9i_g?e=eQ3jrw" className="hover:text-orange-500 transition-colors cursor-pointer font-semibold" target="_blank">
                    aqui.
                  </a>
                </p>

                <p>
                  Me mande uma mensagem no email: {" "}
                  <a href="mailto:joaogabrielsevangelista@mgail.com" className="hover:text-orange-500 transition-colors cursor-pointer font-semibold" target="_blank">
                    joaogabrielsevangelista@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 max-md:flex-row items-end justify-end max-md:justify-start max-md:items-center col-span-1">
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
        </div>
      </BlobContainer>
    </main>
  );
}
