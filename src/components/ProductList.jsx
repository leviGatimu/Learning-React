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
     <section className="py-16 px-6 bg-white">
       <div className="container mx-auto">
         <div className="flex items-center justify-between mb-12">
           <h2 className="text-3xl font-black text-gray-900 tracking-tight">All Products</h2>
           <span className="text-gray-500 text-sm font-medium">{filteredProducts.length} items found</span>
         </div>

         {filteredProducts.length > 0 ? (
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
             {filteredProducts.map(p => (
               <ProductCard key={p.id} product={p} onAddToCart={handleAddToCart} />
             ))}
           </div>
         ) : (
           <div className="bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200 py-20 px-6 text-center">
             <div className="bg-white w-16 h-16 rounded-full shadow-sm flex items-center justify-center mx-auto mb-4">
               <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
               </svg>
             </div>
             <p className="text-xl font-bold text-gray-900 mb-2">No products match your search</p>
             <p className="text-gray-500 mb-8">Try adjusting your filters or search terms to find what you're looking for.</p>
             <button 
               className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800 transition-colors"
               onClick={onClearSearch}
             >
               Clear search
             </button>
           </div>
         )}
       </div>
     </section>
    )
}

export default ProductList;