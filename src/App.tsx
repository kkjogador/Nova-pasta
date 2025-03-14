
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import Shop from "./pages/Shop";
import Ratings from "./pages/Ratings";
import Workshop from "./pages/Workshop";
import AboutUs from "./pages/AboutUs";

function App() {
  const queryClient = new QueryClient();
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/entrar" element={<Login />} />
            <Route path="/inscrever-se" element={<Register />} />
            <Route path="/loja" element={<Shop />} />
            <Route path="/avalie-nos" element={<Ratings />} />
            <Route path="/workshop" element={<Workshop />} />
            <Route path="/sobre-nos" element={<AboutUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
