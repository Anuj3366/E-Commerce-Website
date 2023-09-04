const mysql = require('mysql2');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const connection = mysql.createConnection({
    host: 'sql12.freesqldatabase.com',
    user: 'sql12644271',
    password: 'ete29dLQPY',
    database: 'sql12644271'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
    } else {
        console.log('Connected to MySQL');
    }
});

app.use(express.static('public'));

// API route to retrieve product data from the database
app.get('/api/products', (req, res) => {
    // Implement code to fetch product data from MySQL
    // Send the data as a JSON response
});

// API route for user registration
app.post('/api/register', (req, res) => {
    const { username, email, password } = req.body;
    
    // Implement code to insert user data into the 'users' table in MySQL
    // Respond with success or error status
});

// API route for adding an item to the cart
app.post('/api/add-to-cart', (req, res) => {
    const { itemId } = req.body;
    
    // Implement code to add an item to the user's cart in MySQL
    // Respond with success or error status
});

// API route for clearing the cart
app.post('/api/clear-cart', (req, res) => {
    const { userId } = req.body;
    
    // Implement code to clear the user's cart in MySQL
    // Respond with success or error status
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});



function opencart() {
    let overlay = document.getElementsByClassName('overlay')[0];
    overlay.style.display = "flex";
}

function closecart() {
    let overlay = document.getElementsByClassName('overlay')[0];
    overlay.style.display = "none";
}

let totalAmount = 0;
let cart = [];

function getCartFromLocalStorage() {
  const cartData = localStorage.getItem('cart');
  if (cartData) {
    return JSON.parse(cartData);
  }
  return [];
}

function saveCartToLocalStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));
}

function updateCartDisplay() {
  let cartItems = document.querySelector('.cart_items');
  cartItems.innerHTML = '';

  cart.forEach((item, i) => {
    let newItem = document.createElement('div');
    newItem.classList.add('order_item');
    newItem.id = `order_id_${i}`;
    newItem.innerHTML = `
      <button type="button" class="remove_item" onclick="remove_item(${i})">&#x2715;</button>
      <div class="item_info">
        <div class="item_name">${item.name}</div>
        <div class="item_price">Rs ${item.price.toFixed(2)}</div>
      </div>
    `;
    cartItems.appendChild(newItem);
  });

  let total = document.querySelector('.cart_total');
  total.textContent = `Total: Rs ${totalAmount.toFixed(2)}`;
}

function addToCart(i) {
  let details = document.querySelectorAll('.item')[i];
  let itemName = details.querySelector('h4').textContent;
  let itemPrice = parseFloat(details.querySelector('h3').textContent.replace('Rs ', '').replace(',', ''));

  let newItem = { name: itemName, price: itemPrice };
  cart.push(newItem);
  totalAmount += itemPrice;
  saveCartToLocalStorage();
  updateCartDisplay();
  opencart();
}

function remove_item(i) {
  let price = cart[i].price;
  totalAmount -= price;
  cart.splice(i, 1);
  saveCartToLocalStorage();
  updateCartDisplay();
}

function initializeCart() {
  cart = getCartFromLocalStorage();
  totalAmount = cart.reduce((total, item) => total + item.price, 0);
  updateCartDisplay();
}

function clearCart(){
  for (let i = cart.length - 1; i >= 0; i--) {
      let price = cart[i].price;
      totalAmount -= price;
      cart.splice(i, 1);
  }
  saveCartToLocalStorage();
  updateCartDisplay();
}


document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.getElementById("search-input");
  const searchButton = document.getElementById("search-button");

  function handleSearch() {
      const searchText = searchInput.value.trim().toLowerCase();
      searchPage(searchText);
  }

  searchButton.addEventListener("click", handleSearch);

  searchInput.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
          handleSearch();
          event.preventDefault();
      }
  });

  function searchPage(searchText) {
      const allTextElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6, span, div");

      allTextElements.forEach(function (element) {
          const elementText = element.textContent.toLowerCase();
          if (elementText.includes(searchText)) {
              element.scrollIntoView({ behavior: "smooth", block: "center" });
              element.classList.add("highlight");
          } else {
              element.classList.remove("highlight");
          }
      });
  }
});




window.onload = initializeCart;
