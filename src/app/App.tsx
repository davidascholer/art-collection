import { ThemeProvider } from "@/ui/theme/ThemeProvider";
import RouterManager from "@/features/router/RouterManager";
import Routes from "@/app/Routes";
import ReduxProvider from "@/features/toolkit/state/ReduxProvider";

function App() {
  return (
    <ReduxProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <RouterManager>
          <Routes />
        </RouterManager>
      </ThemeProvider>
    </ReduxProvider>
  );
}

export default App;
