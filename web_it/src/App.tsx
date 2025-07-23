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

          {/* Main content area (bergeser ke kanan dari sidebar) */}
          <main className="ml-64 w-full min-h-screen overflow-y-auto bg-gray-50 p-6">
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