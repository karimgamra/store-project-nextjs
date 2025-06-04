"use-client";

import React, { ReactNode } from "react";
import { ThemeProvider } from "./Theme-provider";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
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
