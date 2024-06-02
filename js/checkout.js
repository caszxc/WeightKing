document.addEventListener("DOMContentLoaded", function() {
    loadCheckout();
    loadUserProfile();
});

const SHIPPING_FEE = 50.00; // Define a constant for the shipping fee

function loadCheckout() {
    const selectedCartItems = JSON.parse(localStorage.getItem('selectedCartItems')) || [];
    const productsListContainer = document.querySelector('.products-list');
    const orderTotalContainer = document.querySelector('.order-total');
    const merchandiseSubtotalContainer = document.getElementById('merchandise-subtotal');
    const shippingTotalContainer = document.getElementById('shipping-total');
    const totalPaymentContainer = document.querySelector('.total-payment');

    productsListContainer.innerHTML = '';
    let merchandiseSubtotal = 0;
    let totalItems = 0;

    selectedCartItems.forEach(item => {
        const productItemElement = document.createElement('div');
        productItemElement.className = 'product-item';
        productItemElement.innerHTML = `
            <div class="product-details">
                <div class="name-img-container">
                    <img src="${item.image}" alt="${item.name}">
                    <span class="product-name">${item.name}</span>
                </div>
                <div class="variation-container">
                    <p>Variation: ${item.variation}</p>
                </div>
                <div class="quantity-container">
                    <div>${item.quantity}</div>
                </div>
                <div>₱${item.price.toFixed(2)}</div>
            </div>
        `;

        productsListContainer.appendChild(productItemElement);

        merchandiseSubtotal += item.price * item.quantity;
        totalItems += item.quantity;
    });

    orderTotalContainer.textContent = `Order total(${totalItems} items): ₱${merchandiseSubtotal.toFixed(2)}`;
    merchandiseSubtotalContainer.textContent = `₱${merchandiseSubtotal.toFixed(2)}`;
    shippingTotalContainer.textContent = `₱${SHIPPING_FEE.toFixed(2)}`;
    totalPaymentContainer.textContent = `₱${(merchandiseSubtotal + SHIPPING_FEE).toFixed(2)}`;

    document.querySelector('.place-order-btn').addEventListener('click', function() {
        alert('Order placed successfully!');
    });
}


function loadUserProfile() {
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
        document.getElementById('name').textContent = loggedInUser.name;
        document.getElementById('address').textContent = loggedInUser.address;
        document.getElementById('phone').textContent = loggedInUser.phone;
    }
}
