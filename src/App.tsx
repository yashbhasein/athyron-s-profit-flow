import React, { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Dynamic, route-based page loader using Vite's import.meta.glob
const modules = import.meta.glob("./pages/**/*.tsx");

const pageNameMap: Record<string, string> = {
  "": "Index",
  solution: "SolutionPage",
  impact: "ImpactPage",
  team: "TeamPage",
  contact: "ContactPage",
};

const resolveImporter = (pathname: string) => {
  const parts = pathname.split("/").filter(Boolean);
  let site = "";
  let route = "";

  if (parts.length === 0) {
    route = "";
  } else if (pageNameMap[parts[0]]) {
    route = parts[0];
  } else {
    site = parts[0];
    route = parts[1] || "";
  }

  const pageKey = pageNameMap[route] ?? (route ? route[0].toUpperCase() + route.slice(1) : "Index");

  const candidates: string[] = [];
  if (site) {
    candidates.push(`./pages/sites/${site}/${pageKey}.tsx`);
    candidates.push(`./pages/sites/${site}/${route === "" ? "Index" : pageKey}.tsx`);
  }
  candidates.push(`./pages/${pageKey}.tsx`);
  candidates.push(`./pages/${route === "" ? "Index" : pageKey}.tsx`);

  const found = candidates.find((c) => !!modules[c]);
  return found ? modules[found] : null;
};

const DynamicRoute = ({ pathname }: { pathname: string }) => {
  const importer = resolveImporter(pathname);
  if (!importer) return <NotFound />;
  const LazyComp = React.lazy(importer as () => Promise<{ default: React.ComponentType<any> }>);
  return (
    <Suspense fallback={<div className="p-8">Loading...</div>}>
      <LazyComp />
    </Suspense>
  );
};

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="*" element={<DynamicRoute pathname={location.pathname} />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Using HashRouter makes deep links work without server-side rewrites; change back to BrowserRouter for production with proper rewrites. */}
      <HashRouter>
        <AnimatedRoutes />
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;