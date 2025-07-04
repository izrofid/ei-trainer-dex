import "./App.css";
import TrainerDex from "./components/trainer-dex";

import { ThemeProvider } from "@/components/theme-provider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <TrainerDex/>
    </ThemeProvider>
  );
}

export default App;
