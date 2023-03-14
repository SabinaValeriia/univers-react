import React from "react";

function ProductCard({ title, description, image }) {
  return (
    <div className="product-card">
      <div className="product-image">
        <img src={image} alt={title} />
      </div>
      <div className="product-details">
        <h3>{title}</h3>
        <p>{description}</p>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;
