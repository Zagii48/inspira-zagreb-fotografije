import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Usluge from "./pages/Usluge";
import Kontakt from "./pages/Kontakt";
import FAQ from "./pages/FAQ";
import Portreti from "./pages/gallery/Portreti";
import Lifestyle from "./pages/gallery/Lifestyle";
import Boudoir from "./pages/gallery/Boudoir";
import VjencanjaiEventi from "./pages/gallery/VjencanjaiEventi";
import NotFound from "./pages/NotFound";
import Cookies from "./pages/Cookies";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/usluge" element={<Usluge />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/galerija/portreti" element={<Portreti />} />
          <Route path="/galerija/lifestyle" element={<Lifestyle />} />
          <Route path="/galerija/boudoir" element={<Boudoir />} />
          <Route path="/galerija/vjencanja-eventi" element={<VjencanjaiEventi />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
