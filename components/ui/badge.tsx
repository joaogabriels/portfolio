import * as React from "react";

import { cn } from "@/lib/utils";

export type BadgeProps = React.HTMLAttributes<HTMLDivElement>;

function Badge({ className, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border-none px-2.5 py-1 text-xs font-semibold bg-neutral-900",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
