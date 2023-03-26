import "./App.css";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import HeroSection from "./components/HeroSection.js";
import HooksComponent from "./components/HooksComponent.js";
import Products from "./components/Products.js";
import ProductDetailPage from "./components/ProductDetailPage.js";
import Product from "./components/Product.js";
import ShoppingList from "./components/ShoppingList.js";
import Menu from "./components/Menu.js";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import { useState } from "react";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Routes} from 'react-router-dom';
import { createContext, useContext } from "react";
import Dialog from "./components/Dialog";
import Animation from "./components/Animation";
import SecondaryButton from "./components/SecondaryButton"
import AdminPage from "./components/AdminPage"
import AuthModal from "./components/AuthModal"

import ImageUpload from "./components/ImageUpload";
import CustomButton from "./components/CustomButton";
import NewProductForm from "./components/NewProductForm"
import TableComponent from "./components/TableComponent";
import Login from "./components/Login";
import SignupForm from "./components/SignupForm";
import NumberForm from "./components/NumberForm";
/* eslint-disable */
const productsData = [
  { id: 1, name: "Product 1", price: 10 },
  { id: 2, name: "Product 2", price: 20 },
  { id: 3, name: "Product 3", price: 30 },
];

const UserContext = createContext();
const handleEdit = (record) => {
  // код для редагування запису
};

const handleDelete = (id) => {
  // код для видалення запису з ідентифікатором id
};

const LanguageContext = createContext();


function UserName() {
  const { name } = useContext(UserContext); 
  return <p>Name: {name}</p>;
}


function Language() {
  const { language } = useContext(LanguageContext); 
  return <p>Language: {language}</p>;
}

function App() {
  const exchangeRate = 27; // курс долара до гривні
  const product = {
    title: "Product Name",
    description: "This is a description of the product.",
    price: 500, // в гривнях
  };
  const convertCurrency = (amount) => {
    return (amount / exchangeRate).toFixed(2); // конвертуємо гривні в долари
  };

  const productInDollars = {
    ...product,
    price: convertCurrency(product.price),
  };
  const products = [
    { id: 1, name: "Product 1", category: "Category 1" },
    { id: 2, name: "Product 2", category: "Category 2" },
    { id: 3, name: "Product 3", category: "Category 1" },
    { id: 4, name: "Product 4", category: "Category 3" },
    { id: 5, name: "Product 5", category: "Category 2" },
  ];
  const categories = [
    { id: 1, name: "Category 1" },
    { id: 2, name: "Category 2" },
    { id: 3, name: "Category 3" },
  ];
  const [shoppingList, setShoppingList] = useState([
    { id: 1, name: "Apple", category: "Fruit" },
    { id: 2, name: "Banana", category: "Fruit" },
    { id: 3, name: "Carrot", category: "Vegetable" },
    { id: 4, name: "Broccoli", category: "Vegetable" },
  ]);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemSelected = (itemId) => {
    const selectedItems = [...selectedItems];
    const itemIndex = selectedItems.indexOf(itemId);

    if (itemIndex >= 0) {
      selectedItems.splice(itemIndex, 1);
    } else {
      selectedItems.push(itemId);
    }

    setSelectedItems(selectedItems);
  };
  const [selectedProducts, setSelectedProducts] = useState([]);

  const handleProductSelect = (productId) => {
    const productIndex = selectedProducts.indexOf(productId);
    if (productIndex > -1) {
      setSelectedProducts(selectedProducts.filter((id) => id !== productId));
    } else {
      setSelectedProducts([...selectedProducts, productId]);
    }
  };

  const { isLoggedIn } = useState([]);

  return (
    <div className="App">
      <Header selectedItemsCount={selectedItems.length} />
      <ShoppingList items={shoppingList} onItemSelected={handleItemSelected} />
      <Menu></Menu>
      <HeroSection></HeroSection>
      {/* <BrowserRouter>
        <Routes>
          <Route component={Products} />
        </Routes>
    </BrowserRouter> */}
      <ProductDetailPage
        title={product.title}
        description={product.description}
        product={productInDollars}
      />

      <h1>Shopping List</h1>
      <div>
        {productsData.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            onSelect={handleProductSelect}
          />
        ))}
      </div>
      <p>Selected products: {selectedProducts.length}</p>
      <nav>
        <ul>
          {categories.map((category) => (
            <li key={category.id}>{category.name}</li>
          ))}
        </ul>
      </nav>
      <main>
        {products
          .filter(
            (product) =>
              selectedProducts.length === 0 ||
              selectedProducts.some(
                (id) =>
                  product.category ===
                  categories.find((category) => category.id === id).name
              )
          )
          .map((product) => (
            <div key={product.id}>
              <input
                type="checkbox"
                checked={selectedProducts.includes(product.id)}
                onChange={() => handleProductSelect(product.id)}
              />
              {product.name} ({product.category})
            </div>
          ))}
      </main>
      <HooksComponent></HooksComponent>
      <div>
        <UserContext.Provider value={{ name: "John" }}>
          <LanguageContext.Provider value={{ language: "en" }}>
            <UserName />
            <Language />
          </LanguageContext.Provider>
        </UserContext.Provider>
      </div>
      <Dialog></Dialog>
      <Animation></Animation>
      <SecondaryButton></SecondaryButton>
      <AdminPage></AdminPage>
      <AuthModal></AuthModal>
      <NewProductForm></NewProductForm>
      <ImageUpload></ImageUpload>
      <CustomButton></CustomButton>
      <TableComponent  />
      <Login></Login>
      <SignupForm></SignupForm>
      <NumberForm></NumberForm>
      <Footer></Footer>
    </div>
  );
}

export default App;
