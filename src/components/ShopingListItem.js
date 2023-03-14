function ShoppingListItem(props) {
  const { item, onItemSelected } = props;

  const handleCheckboxChange = (event) => {
    onItemSelected(item.id);
  };

  return (
    <div>
      <label>
        <input type="checkbox" onChange={handleCheckboxChange} />
        {item.name}
      </label>
    </div>
  );
}

  export default ShoppingListItem;