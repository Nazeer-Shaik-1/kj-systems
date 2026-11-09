import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SmoothScroll } from './components/common/SmoothScroll';
import { ScrollToTop } from './components/common/ScrollToTop';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';

// Pages
import { Home } from './pages/Home';
import { About } from './pages/About';
import { FeaturesPage } from './pages/FeaturesPage';
import { PricingPage } from './pages/PricingPage';
import { BlogListing } from './pages/BlogListing';
import { BlogPost } from './pages/BlogPost';
import { ContactPage } from './pages/ContactPage';
import { CareersPage } from './pages/CareersPage';
import { DownloadPage } from './pages/DownloadPage';
import { ChangelogPage } from './pages/ChangelogPage';
import { LicensePage } from './pages/LicensePage';
import { EarlyAccessPage } from './pages/EarlyAccessPage';
import { NotFound } from './pages/NotFound';

export const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <SmoothScroll>
        <div className="min-h-screen flex flex-col bg-[#fcfcfc] text-[#111111] antialiased">
          {/* Top persistent navigation */}
          <Navbar />

          {/* Main content routes */}
          <main className="flex-1">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/features" element={<FeaturesPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/blog" element={<BlogListing />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/download" element={<DownloadPage />} />
              <Route path="/changelog" element={<ChangelogPage />} />
              <Route path="/license" element={<LicensePage />} />
              <Route path="/early-access" element={<EarlyAccessPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>

          {/* Bottom global footer */}
          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
};

export default App;
