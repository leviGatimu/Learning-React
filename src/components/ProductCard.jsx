function ProductCard({ product, onAddToCart }) {
  return (
    <div className={`group bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col ${!product.inStock ? 'grayscale opacity-75' : ''}`}>
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {!product.inStock && (
          <div className="absolute top-4 right-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
            OUT OF STOCK
          </div>
        )}
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-simba transition-colors">
          {product.name}
        </h3>

        <p className="text-xl font-black text-gray-900 mb-6">
          {new Intl.NumberFormat("en-RW", {
            style: "currency",
            currency: "RWF",
            maximumFractionDigits: 0
          }).format(product.priceRwf || product.price)}
        </p>

        <button 
          className={`mt-auto w-full py-3 px-4 rounded-xl font-bold transition-all duration-200 ${
            product.inStock 
              ? 'bg-simba text-white hover:bg-orange-600 shadow-md hover:shadow-lg active:scale-95' 
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
          onClick={() => onAddToCart && onAddToCart(product)}
          disabled={!product.inStock}
        >
          {product.inStock ? 'Add to cart' : 'Unavailable'}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;