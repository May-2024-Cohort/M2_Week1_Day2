import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />


    <div>
      <h2>Product Title</h2>
      <img src="imageSrc" alt="" />
      <p>Price:$</p>
    </div>
  </React.StrictMode>,
)





/* 
    1. Create a ProductListing component
    2. should have the following values:

     <div>
      <h2>Product Title</h2>
      <img src="imageSrc" alt="" />
      <p>Price:$</p>
    </div>

    data:
        Product 1:

            Title: "Wireless Headphones"
            Picture URL: "https://m.media-amazon.com/images/I/61TXenWNoQL._AC_SX679_.jpg"
            Price: $199
        Product 2:

            Title: "Smartwatch"
            Picture URL: "https://m.media-amazon.com/images/I/61yZgFFL0iL._AC_SX679_.jpg"
            Price: $299
        Product 3:

            Title: "Bluetooth Speaker"
            Picture URL: "https://m.media-amazon.com/images/I/61+sKi1viEL._AC_SX569_.jpg"
            Price: $99
*/
