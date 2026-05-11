function ProductCard({ product, onAddToCart }) {
  return (
    <div className={`product-card ${!product.inStock ? 'out-of-stock' : ''}`}>
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
        {!product.inStock && (
          <div className="stock-badge">Out of stock</div>
        )}
      </div>

      <div className="product-info">
        <h3 className="product-title">{product.name}</h3>

        <p className="product-price">
          {new Intl.NumberFormat("en-RW", {
            style: "currency",
            currency: "RWF",
          }).format(product.priceRwf || product.price)}
        </p>
      </div>
      <button 
        className="btn-secondary add-to-cart-btn" 
        onClick={() => onAddToCart && onAddToCart(product)}
        disabled={!product.inStock}
      >
        {product.inStock ? 'Add to cart' : 'Unavailable'}
      </button>
    </div>
  );
}

export default ProductCard;