let totalAmount = 0;

function opencart() {
    let overlay = document.getElementsByClassName('overlay')[0];
    overlay.style.display = "flex";
}

function closecart() {
    let overlay = document.getElementsByClassName('overlay')[0];
    overlay.style.display = "none";
}

function addToCart(i) {
  let details = document.querySelectorAll('.item')[i];

  let itemName = details.querySelector('h4').textContent;
  let itemPrice = details.querySelector('h3').textContent;

  let cartItems = document.querySelector('.cart_items');

  let newItem = document.createElement('div');
  newItem.classList.add('order_item');
  newItem.id = `order_id_${i}`;
  newItem.innerHTML = `
      <button type="button" class="remove_item" onclick="remove_item(${i})">&#x2715;</button>
      <div class="item_info">
        <div class="item_name">${itemName}</div>
        <div class="item_price">${itemPrice}</div>
      </div>
  `;

  cartItems.appendChild(newItem);
  let price = parseFloat(itemPrice.replace('Rs ', '').replace(',', ''));
  totalAmount += price;
  
  let total = document.querySelector('.cart_total');
  total.textContent = `Total: Rs ${totalAmount.toFixed(2)}`;
}

function remove_item(i) {
    let item = document.getElementById(`order_id_${i}`);
    let price = parseFloat(item.querySelector('.item_price').textContent.replace('Rs ', '').replace(',', ''));
    totalAmount -= price;
    item.remove();
    let total = document.querySelector('.cart_total');
    total.textContent = `Total: Rs ${totalAmount.toFixed(2)}`;
}

