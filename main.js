//selectors
const cartContainer = document.querySelector('.cart-container');
const productList = document.querySelector('.product-list');

//Event listeners
function eventListeners() {
    window.addEventListener('DOMContentLoaded', () => {
        loadJSON()
    })
    //when toggle navbar is clicked
    document.querySelector('.navbar-toggler').addEventListener('click', () => {
        document.querySelector('.navbar-collapse').classList.toggle('show-navbar')
    });

    //hide/show cart container 
    document.getElementById('cart-btn').addEventListener('click', () => {
        cartContainer.classList.toggle('show-cart-container')
    })
}

//fetch product items from json file
function loadJSON() {
    fetch('furniture.json')
    .then(response => response.json())
    .then(data => {
        let html = '';
        data.forEach(product => {
            html += `
            <div class="product-item">
            <div class="product-img">
                <img src="${product.imageSrc}" alt="bed">
                <button type="button" class="add-to-cart-btn">
                    <i class="fas fa-shopping-cart"></i>Add to Cart
                </button>
            </div>
            <div class="product-content">
                <h3 class="product-name">${product.name}</h3>
                <span class="product-category">${product.category}</span>
                <p class="product-price">$${product.price}</p>
            </div>
        </div>
            `;
        });
        productList.innerHTML = html;
    });
    
}



eventListeners()