import React, { useState } from 'react';

function Product({ id, name, price, onSelect }) {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectChange = () => {
    setIsSelected(!isSelected);
    onSelect(id, !isSelected);
  };

  return (
    <div>
      <input type="checkbox" checked={isSelected} onChange={handleSelectChange} />
      <span>{name} (${price})</span>
    </div>
  );
}

export default Product;
