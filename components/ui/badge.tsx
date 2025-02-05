import * as React from "react";

import { cn } from "@/lib/utils";

export type BadgeProps = React.HTMLAttributes<HTMLDivElement>;

function Badge({ className, ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border-none px-2.5 pb-1 pt-2 text-xs font-semibold leading-2 bg-neutral-900 text-foreground",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
