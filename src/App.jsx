import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Footer from './components/Footer.jsx';
import ProductList  from './components/ProductList.jsx';
import { useState, useEffect } from 'react';
import ProductCard from './components/ProductCard.jsx';
import CartModal from './components/CartModal.jsx';

// Replace with your actual MockAPI URL
const API_URL = "https://67bc876eed7147ed8158509d.mockapi.io/products";

function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showSpecial, setShowSpecial] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("simba-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  useEffect(() => {
    localStorage.setItem("simba-cart", JSON.stringify(cart));
  }, [cart]);

  const handleAddToCart = (product) => {
    setCart(prev => [...prev, product]);
  };

  const handleRemoveFromCart = (index) => {
    setCart(prev => prev.filter((_, i) => i !== index));
  };

  const specialProduct = products.length > 0 ? products[0] : null;

  return (
   <div className="min-h-screen bg-gray-50 flex flex-col">
     <Header 
        searchQuery={searchQuery} 
        onSearchChange={setSearchQuery} 
        cartCount={cart.length}
        onOpenCart={() => setIsCartOpen(true)}
     />
     <main className="flex-grow">
       <Hero />

       <section className="py-16 px-6 bg-orange-50/50">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl font-black text-gray-900 mb-2">Today's Special</h2>
              <p className="text-gray-600">Don't miss out on our featured pick for today!</p>
            </div>
            {!showSpecial && !loading && !error && (
              <button 
                type='button' 
                className="mt-6 md:mt-0 bg-simba text-white px-8 py-3 rounded-full font-bold shadow-lg shadow-simba/20 hover:bg-orange-600 transition-all hover:scale-105 active:scale-95" 
                onClick={() => setShowSpecial(true)}
              >
                Reveal Special
              </button>
            )}
          </div>

          <div className="max-w-sm mx-auto">
            {loading ? (
              <div className="flex justify-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-simba"></div>
              </div>
            ) : error ? (
              <div className="bg-red-50 text-red-600 p-6 rounded-3xl text-center border border-red-100">
                <p className="font-bold">Oops! Something went wrong.</p>
                <p className="text-sm">{error}</p>
              </div>
            ) : showSpecial && specialProduct ? (
              <div className="animate-in fade-in zoom-in duration-500">
                <ProductCard product={specialProduct} onAddToCart={handleAddToCart} />
              </div>
            ) : (
              <div className="h-64 border-2 border-dashed border-orange-200 rounded-3xl flex items-center justify-center bg-white/50">
                <p className="text-orange-300 font-medium italic">
                  {error ? "Couldn't load special deal" : "Click reveal to see today's deal..."}
                </p>
              </div>
            )}
          </div>
        </div>
       </section>

       <ProductList 
          products={products}
          loading={loading}
          error={error}
          searchQuery={searchQuery} 
          onClearSearch={() => setSearchQuery("")} 
          onAddToCart={handleAddToCart}
       />
     </main>
     <Footer />

     {isCartOpen && (
       <CartModal 
         cart={cart} 
         onClose={() => setIsCartOpen(false)} 
         onRemove={handleRemoveFromCart}
       />
     )}
   </div>
  )
}

export default App