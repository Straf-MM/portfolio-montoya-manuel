import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { ThemeProvider } from "./contexts/ThemeContext";
import BtsSio from "./pages/BtsSio";
import Competences from "./pages/Competences";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import LegalNotice from "./pages/LegalNotice";
import Stage1 from "./pages/Stage1";
import Stage2 from "./pages/Stage2";
import Stages from "./pages/Stages";
import TechWatch from "./pages/TechWatch";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navigation />
      <main className="flex-1">
        <Switch>
          <Route path={"/"} component={Home} />
          <Route path={"/bts-sio"} component={BtsSio} />
          <Route path={"/stages"} component={Stages} />
          <Route path={"/stage1"} component={Stage1} />
          <Route path={"/stage2"} component={Stage2} />
          <Route path={"/veille"} component={TechWatch} />
          <Route path={"/competences"} component={Competences} />
          <Route path={"/contact"} component={Contact} />
          <Route path={"/mentions-legales"} component={LegalNotice} />
          <Route path={"/404"} component={NotFound} />
          {/* Final fallback route */}
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light" switchable>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
