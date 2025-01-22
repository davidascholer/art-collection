import { ThemeProvider } from "@/theme/ThemeProvider";

import { ReactNode } from "react";

interface ThemeProviderProps {
  children: ReactNode;
}

function AppThemeProvider({ children }: ThemeProviderProps) {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      {children}
    </ThemeProvider>
  );
}

export default AppThemeProvider;
