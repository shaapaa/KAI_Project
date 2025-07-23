import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Sidebar from "@/components/Sidebar";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex">
          {/* Sidebar tetap di kiri */}
          <Sidebar />

          {/* Main layout: header tetap + konten */}
          <div className="flex-1 flex flex-col">
            {/* Header tetap di atas */}
            <Header />

            {/* Konten utama */}
            <main className="pt-20 px-6 pb-6 bg-gray-50 min-h-screen overflow-y-auto ml-0 md:ml-64">
            <Routes>
              <Route path="/*" element={<Index />} />
              <Route path="/404" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
