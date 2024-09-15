import React from "react";
import { Button, buttonVariants } from "./button";
import type { VariantProps } from "class-variance-authority";

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
  VariantProps<typeof buttonVariants>  {
  asChild?: boolean
}

const Link: React.FC<LinkProps> = ({ href, children, ...props }) => {
  return (
    <Button variant={props.variant} asChild>
      <a {...props} href={href}>{children}</a>
    </Button>
  );
};

export { Link };