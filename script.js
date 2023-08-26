// Sample products data
const products = [
    { name: 'Product 1', price: 19.99 },
    { name: 'Product 2', price: 29.99 },
    // Add more products here
];

// Function to display products
function displayProducts() {
    const productsSection = document.querySelector('.products');
    
    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price}</p>
            <button>Add to Cart</button>
        `;
        
        productsSection.appendChild(productCard);
    });
}

// Call the function to display products
displayProducts();
