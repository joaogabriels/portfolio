import * as React from "react";

import { cn } from "@/lib/utils";

export type BlobProps = React.HTMLAttributes<HTMLDivElement>;

function BlobContainer({
  className,
  children,
  ...props
}: BlobProps) {
  return (
    <div
      className={cn("relative w-full h-full overflow-hidden", className)}
      {...props}
    >
      <div className="absolute top-0 left-10 size-[1000px] bg-red-500 rounded-full z-0 blur-2xl animate-blob opacity-35 mix-blend-soft-light animation-delay-1" />
      <div className="absolute top-0 right-10 size-[1000px] bg-purple-500 rounded-full z-0 blur-2xl animate-blob opacity-50 mix-blend-soft-light animation-delay-2" />
      <div className="absolute top-2/4 right-10 size-[1000px] bg-yellow-500 rounded-full z-0 blur-2xl animate-blob opacity-50 mix-blend-soft-light animation-delay-1" />
      <div className="absolute top-2/4 left-10 size-[1000px] bg-purple-500 rounded-full z-0 blur-2xl animate-blob opacity-50 mix-blend-soft-light animation-delay-2" />
      <div className="absolute bottom-0 right-10 size-[1000px] bg-red-500 rounded-full z-0 blur-2xl animate-blob opacity-50 mix-blend-soft-light animation-delay-1" />

      {children}
    </div>
  );
}

export { BlobContainer };
