import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {
  addProduct,
  removeProduct,
  filterProducts,
} from "../actions/productActions";
import React from "react";
function ProductList() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  const handleAddProduct = () => {
    const product = { name: "New Product", price: 10 };
    dispatch(addProduct(product));
  };

  const handleRemoveProduct = (id) => {
    dispatch(removeProduct(id));
  };

  const handleFilterProducts = (event) => {
    const filterText = event.target.value;
    dispatch(filterProducts(filterText));
  };

  return (
    <div>
      <button onClick={handleAddProduct}>Add Product</button>
      <ul>
        {products &&
          products.map((product) => (
            <li key={product.id}>
              {product.name} - {product.price}
              <button onClick={() => handleRemoveProduct(product.id)}>
                Remove
              </button>
            </li>
          ))}
      </ul>
      <input
        type="text"
        onChange={handleFilterProducts}
        placeholder="Filter products"
      />
    </div>
  );
}

export default ProductList;
