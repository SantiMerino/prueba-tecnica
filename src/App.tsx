import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AllPro from './pages/AllProduct';
import ProductDetail from './pages/ProductDetail';
import FavoritesPage from './pages/FavProduct';
import RecentlyViewedPage from './pages/RecentProduct';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <main>
          <Routes>
            {/* All the products page showcase */}
            <Route path="/" element={<AllPro />} />
            <Route path="/producto/:id" element={<ProductDetail />} />
            <Route path="/favoritos" element={<FavoritesPage />} />
            <Route path="/recientes" element={< RecentlyViewedPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;