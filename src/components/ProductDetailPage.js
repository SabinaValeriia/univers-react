import React, { useState } from 'react';
import "../css/Comment.css";

function ProductDetailPage(props) {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState('');
  const [priceInUAH, setPriceInUAH] = useState(props.price);
  const [priceInUSD, setPriceInUSD] = useState(convertUAHtoUSD(props.price));

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const content = e.target.content.value;
    const newComment = { name, content };
    setComments([...comments, newComment]);
    setCommentText('');
    console.log(content);
    alert(`Ваш відгук: "${content}" додано успішно!`);
  };

  const handleCommentChange = (e) => {
    setCommentText(e.target.value);
  };

  const handlePriceInUAHChange = (e) => {
    const newPriceInUAH = parseFloat(e.target.value);
    setPriceInUAH(newPriceInUAH);
    setPriceInUSD(convertUAHtoUSD(newPriceInUAH));
  };

  const handlePriceInUSDChange = (e) => {
    const newPriceInUSD = parseFloat(e.target.value);
    setPriceInUSD(newPriceInUSD);
    setPriceInUAH(convertUSDtoUAH(newPriceInUSD));
  };

  return (
    <div>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <h2>Price</h2>
      <label htmlFor="priceInUAH">Price in UAH:</label>
      <input
        type="number"
        id="priceInUAH"
        value={priceInUAH}
        onChange={handlePriceInUAHChange}
      />
      <label htmlFor="priceInUSD">Price in USD:</label>
      <input
        type="number"
        id="priceInUSD"
        value={priceInUSD}
        onChange={handlePriceInUSDChange}
      />
      <h2>Comments</h2>
      <ul>
        {comments.map((comment, index) => (
          <li key={index}>
            <h3>{comment.name}</h3>
            <p>{comment.content}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="content">Comment:</label>
        <textarea
          id="content"
          name="content"
          value={commentText}
          onChange={handleCommentChange}
          required
        ></textarea>
        <button type="submit">Add Comment</button>
      </form>
    </div>
  );
}

function convertUAHtoUSD(uah) {
  const exchangeRate = 0.027;
  return uah * exchangeRate;
}

function convertUSDtoUAH(usd) {
  const exchangeRate = 36.5;
  return usd * exchangeRate;
}

export default ProductDetailPage;
