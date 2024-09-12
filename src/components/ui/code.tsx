import { codeToHtml } from "shiki";
import type { CodeToHastOptions, BundledLanguage, BundledTheme } from "shiki";

import React, { useEffect } from "react";
import { cn } from "@/lib/utils";

export interface CodeProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string;
  lang?: BundledLanguage;
  theme?: BundledTheme;
  options?: Partial<CodeToHastOptions>;
}

function Code({
  className,
  code,
  lang = "typescript",
  theme = "dark-plus",
  options,
  ...props
}: CodeProps) {
  const [html, setHtml] = React.useState<string>('');

  useEffect(() => {
    async function renderCode() {
      const out = await codeToHtml(code, {
        lang,
        theme,
        ...options,
      });
      setHtml(out);
    }
    renderCode();
  }, [code, lang, theme, options]);

  return (
    <div
      className={cn(className)}
      dangerouslySetInnerHTML={{ __html: html }}
      {...props}
    />
  );
}

export { Code };
