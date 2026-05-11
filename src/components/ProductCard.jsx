function ProductCard({ product, onAddToCart }) {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img
          src={product.image}
          alt={product.name}
          className="product-image"
        />
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
      <button className="btn-secondary add-to-cart-btn" onClick={() => onAddToCart && onAddToCart(product)}>
        Add to cart
      </button>
    </div>
  );
}

export default ProductCard;