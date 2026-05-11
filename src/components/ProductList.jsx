import ProductCard from './ProductCard.jsx';
import { PRODUCTS } from '../data/products.js';

function ProductList({ searchQuery, onClearSearch }){
    const filteredProducts = PRODUCTS.filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    
    const handleAddToCart = (product) => {
      console.log("🛒 Added to cart:", product.name, product);
    };

    return(
     <section className="Products">
       <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>All Products</h2>
       <div className="product-grid">
         {filteredProducts.length > 0 ? (
           filteredProducts.map(p => (
             <ProductCard key={p.id} product={p} onAddToCart={handleAddToCart} />
           ))
         ) : (
           <div className="empty-state">
             <p className="special-placeholder">No products match your search.</p>
             <button className="btn-secondary clear-search-btn" onClick={onClearSearch}>
               Clear search
             </button>
           </div>
         )}
       </div>
     </section>
    )
}

export default ProductList