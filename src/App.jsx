import './App.css'
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import ProductList  from './components/ProductList.jsx';
import { useState } from 'react';
import ProductCard from './components/ProductCard.jsx';
import { PRODUCTS } from './data/products.js';

function App() {
  const [showSpecial, setShowSpecial] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const handleAddToCart = (product) => {
    console.log("🛒 Added to cart:", product.name, product);
  };
  const specialProduct = PRODUCTS[0];
  return (
   <>
     <Header searchQuery={searchQuery} onSearchChange={setSearchQuery} />
     <Hero />
     <section className="Special-Section">
      <h2 className="section-title">Today's Special</h2>
      <div className="special-action">
        <button type='button' className="btn-secondary" onClick={() => setShowSpecial(true)}>View special</button>
      </div>
      <div className="special-content">
        { showSpecial ? (
          <ProductCard product={specialProduct} onAddToCart={handleAddToCart} />
        ) : (
          <p className="special-placeholder">No special product shown yet.</p>
        )}
      </div>
     </section>
     <ProductList searchQuery={searchQuery} />
     <Footer />
   </>
  )
}

export default App