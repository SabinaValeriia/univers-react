import ShoppingListItem from "../components/ShopingListItem"
import React from 'react'
  
function ShoppingList(props) {
    const { items, onItemSelected } = props;
  
    return (
      <div>
        {items.map((item) => (
          <ShoppingListItem key={item.id} item={item} onItemSelected={onItemSelected} />
        ))}
      </div>
    );
  }
  
  export default ShoppingList;
  