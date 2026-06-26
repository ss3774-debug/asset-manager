import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustedBy } from './components/TrustedBy';
import { Features } from './components/Features';
import { Pricing } from './components/Pricing';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

const queryClient = new QueryClient();

function LandingPage() {
  return (
    <div className="dark min-h-[100dvh] w-full flex flex-col bg-[#050818] text-white font-sans">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustedBy />
        <Features />
        <Pricing />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

function NotFound() {
  return (
    <div className="dark min-h-[100dvh] flex flex-col items-center justify-center bg-[#050818] text-white font-sans">
      <h1 className="text-4xl font-bold mb-4">404 - Not Found</h1>
      <p className="text-gray-400">The page you're looking for doesn't exist.</p>
      <a href="/" className="mt-8 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-colors">
        Go Home
      </a>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={LandingPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
        <Router />
      </WouterRouter>
    </QueryClientProvider>
  );
}

export default App;
