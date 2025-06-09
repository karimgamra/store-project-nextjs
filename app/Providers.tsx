"use-client";

import React, { ReactNode } from "react";
import { ThemeProvider } from "./Theme-provider";
import { Toaster } from "@/components/ui/toaster";
const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Toaster />
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableColorScheme
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </>
  );
};

export default Providers;
