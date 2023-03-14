import React, { useState } from "react";
import "../css/Menu.css";

const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    /* eslint-disable */
    <div className="menu-container">
      <button onClick={toggleMenu}>Меню</button>
      {menuOpen && (
        <ul className="menu">
          <li>
            <a href="#">Главная</a>
          </li>
          <li>
            <a href="#">О нас</a>
          </li>
          <li>
            <a href="#">Контакты</a>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Menu;
