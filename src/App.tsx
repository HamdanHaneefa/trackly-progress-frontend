import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { usePageTracking } from './hooks/usePageTracking';
import Header from './components/Header';
import Footer from './components/Footer';
import Product from './pages/Product';
import ProductDetail from './pages/ProductDetail';
import Contact from './pages/Contact';

function AppInner() {
  useSmoothScroll();
  usePageTracking();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Product />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppInner />
    </Router>
  );
}

export default App;
