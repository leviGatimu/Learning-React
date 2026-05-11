import './App.css'
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import ProductCard from './components/ProductCard.jsx';
import { PRODUCTS } from './data/products.js';
import { useState } from 'react';

function App() {
  const [showSpecial, setShowSpecial] = useState(false);
  
  // Let's use the first product as the special product
  const specialProduct = PRODUCTS[0];

  return (
   <>
     <Header />
     <Hero />
     <section className="Special-Section">
      <h2 className="section-title">Today's Special</h2>
      <div className="special-action">
        <button type='button' className="btn-secondary" onClick={() => setShowSpecial(true)}>View special</button>
      </div>
      <div className="special-content">
        { showSpecial ? (
          <ProductCard product={specialProduct} />
        ) : (
          <p className="special-placeholder">No special product shown yet.</p>
        )}
      </div>
     </section>
     <section className="Products">
       <section className="Special-Section">
     <h2 className="section-title">Products</h2>
       <div className="product-grid">
         {PRODUCTS.map(p => (
           <ProductCard key={p.id} product={p} />
         ))}
       </div>
       </section>
     </section>
     
     <Footer />
   </>
  )
}

export default App