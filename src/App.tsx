import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        {/* Product Card Showcase */}
        <div className='h-20'>
          <ProductCard />

        </div>
        <main>
          <Routes>

          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;