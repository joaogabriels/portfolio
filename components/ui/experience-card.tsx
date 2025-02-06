import Image from "next/image";

import { cn } from "@/lib/utils";

export type BadgeProps = React.HTMLAttributes<HTMLDivElement> & {
  title: string;
  description: string;
  imageSrc: string;
  dateRange: string;
};

function ExperienceCard({
  className,
  dateRange,
  description,
  imageSrc,
  title,
  ...props
}: BadgeProps) {
  return (
    <div
      className={cn("flex items-stretch justify-start gap-4 py-4 max-md:flex-col", className)}
      {...props}
    >
      <Image
        src={imageSrc}
        alt={title}
        width={100}
        height={100}
        className="rounded-xl"
      />

      <div className="space-y-4">
        <div className="flex justify-between items-center gap-4 w-full max-md:flex-col max-md:items-start max-md:gap-0">
          <p className="font-bold">{title}</p>

          <p className="text-base-500">{dateRange}</p>
        </div>



        <p>{description}</p>
      </div>
    </div>
  );
}

export { ExperienceCard };
