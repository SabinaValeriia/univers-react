import React from 'react';
import Product from './Product';

class Products extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [
        { id: 1, name: 'Product 1', category: 'Category 1', price: 10 },
        { id: 2, name: 'Product 2', category: 'Category 2', price: 20 },
        { id: 3, name: 'Product 3', category: 'Category 1', price: 30 },
        { id: 4, name: 'Product 4', category: 'Category 2', price: 40 },
      ],
      productCount: 0,
    };
  }

  componentDidMount() {
    this.setState({ productCount: this.state.productCount + 1 });
  }

  render() {
    const { products, productCount } = this.state;

    return (
      <div>
        <p>Number of displayed products: {productCount}</p>
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            category={product.category}
            price={product.price}
          />
        ))}
      </div>
    );
  }
}

export default Products;
