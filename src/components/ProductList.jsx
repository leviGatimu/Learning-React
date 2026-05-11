import ProductCard from './ProductCard.jsx';

function ProductList({ products, loading, error, searchQuery, onClearSearch, onAddToCart }){
    const filteredProducts = products.filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) {
      return (
        <section className="py-24 flex flex-col items-center justify-center bg-white">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-simba mb-4"></div>
          <p className="text-gray-500 font-bold animate-pulse">Stocking our shelves...</p>
        </section>
      );
    }

    if (error) {
      return (
        <section className="py-24 flex flex-col items-center justify-center bg-white px-6">
          <div className="bg-red-50 p-8 rounded-[2rem] border border-red-100 max-w-md text-center">
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-black text-gray-900 mb-2">Connection Error</h3>
            <p className="text-gray-600 mb-6">We couldn't reach the warehouse. Please check your internet connection and try again.</p>
            <button 
              onClick={() => window.location.reload()}
              className="bg-gray-900 text-white px-8 py-3 rounded-xl font-bold hover:bg-gray-800 transition-all"
            >
              Retry Connection
            </button>
          </div>
        </section>
      );
    }

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
               <ProductCard key={p.id} product={p} onAddToCart={onAddToCart} />
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