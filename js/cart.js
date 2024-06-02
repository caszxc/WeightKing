document.addEventListener("DOMContentLoaded", function() {
    loadCart();
});

function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const cartItemElement = document.createElement('div');
        cartItemElement.className = 'cart-item';
        cartItemElement.innerHTML = `
            <div class="cart-product">
                <input type="checkbox" class="item-checkbox">
                <img src="${item.image}" alt="${item.name}" />
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>Variation: ${item.variation}</p>
                </div>
            </div>
            <div class="cart-quantity">
                <button class="quantity-decrease">-</button>
                <input type="text" value="${item.quantity}" class="quantity-input">
                <button class="quantity-increase">+</button>
            </div>
            <div class="cart-price">Price: ${item.price}</div>
            <div class="cart-action"><button class="delete">Delete</button></div>
        `;

        cartItemsContainer.appendChild(cartItemElement);
    });

    updateTotalPrice();
    updateCheckoutButton();

    // Event listener for select all checkbox
    document.querySelector('.select-all-checkbox').addEventListener('change', function() {
        const itemCheckboxes = document.querySelectorAll('.item-checkbox');
        itemCheckboxes.forEach(checkbox => {
            checkbox.checked = this.checked;
        });
        updateTotalPrice();
        updateCheckoutButton();
    });

    // Event listener for individual item checkboxes
    document.querySelectorAll('.item-checkbox').forEach(checkbox => {
        checkbox.addEventListener('change', () => {
            updateTotalPrice();
            updateCheckoutButton();
        });
    });

    // Event listener for individual delete buttons
    document.querySelectorAll('.delete').forEach(button => {
        button.addEventListener('click', function() {
            const cartItem = this.closest('.cart-item');
            const itemName = cartItem.querySelector('.cart-item-details h3').textContent;
            removeItemFromCart(itemName);
            cartItem.remove();
            updateTotalPrice();
            updateCheckoutButton();
        });
    });

    // Event listener for delete selected items button
    document.querySelector('.selected-delete').addEventListener('click', function() {
        const selectedCheckboxes = document.querySelectorAll('.item-checkbox:checked');
        selectedCheckboxes.forEach(checkbox => {
            const cartItem = checkbox.closest('.cart-item');
            const itemName = cartItem.querySelector('.cart-item-details h3').textContent;
            removeItemFromCart(itemName);
            cartItem.remove();
        });
        updateTotalPrice();
        updateCheckoutButton();
    });

    // Event listeners for quantity change buttons and inputs
    document.querySelectorAll('.quantity-decrease').forEach(button => {
        button.addEventListener('click', function() {
            const input = this.nextElementSibling;
            let quantity = parseInt(input.value);
            if (quantity > 1) {
                quantity--;
                input.value = quantity;
                updateItemQuantity(input);
            }
        });
    });

    document.querySelectorAll('.quantity-increase').forEach(button => {
        button.addEventListener('click', function() {
            const input = this.previousElementSibling;
            let quantity = parseInt(input.value);
            quantity++;
            input.value = quantity;
            updateItemQuantity(input);
        });
    });

    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', function() {
            let quantity = parseInt(this.value);
            if (quantity < 1) {
                quantity = 1;
                this.value = quantity;
            }
            updateItemQuantity(this);
        });
    });

    // Event listener for checkout button
    document.querySelector('.checkout').addEventListener('click', function() {
        checkoutSelectedItems();
    });
}

function removeItemFromCart(itemName) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart = cart.filter(item => item.name !== itemName);
    localStorage.setItem('cart', JSON.stringify(cart));
}

function updateItemQuantity(input) {
    const cartItem = input.closest('.cart-item');
    const itemName = cartItem.querySelector('.cart-item-details h3').textContent;
    const newQuantity = parseInt(input.value);

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemIndex = cart.findIndex(item => item.name === itemName);

    if (itemIndex !== -1) {
        cart[itemIndex].quantity = newQuantity;
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    updateTotalPrice();
}

function updateTotalPrice() {
    const itemCheckboxes = document.querySelectorAll('.item-checkbox:checked');
    let totalPrice = 0;
    itemCheckboxes.forEach(checkbox => {
        const cartItem = checkbox.closest('.cart-item');
        const itemPrice = cartItem.querySelector('.cart-price').textContent.replace('Price: ₱', '').replace(',', '');
        const itemQuantity = cartItem.querySelector('.cart-quantity input').value;
        totalPrice += parseFloat(itemPrice) * parseInt(itemQuantity);
    });
    document.getElementById('total-price').textContent = totalPrice.toFixed(2);
}

function updateCheckoutButton() {
    const itemCheckboxes = document.querySelectorAll('.item-checkbox:checked');
    const checkoutButton = document.querySelector('.checkout');
    if (itemCheckboxes.length > 0) {
        checkoutButton.disabled = false;
    } else {
        checkoutButton.disabled = true;
    }
}

function checkoutSelectedItems() {
    // Check if the user is logged in
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser) {
        alert('You must be logged in to proceed to checkout.');
        window.location.href = 'login.html';
        return;
    }

    const selectedCheckboxes = document.querySelectorAll('.item-checkbox:checked');
    const selectedItems = [];

    selectedCheckboxes.forEach(checkbox => {
        const cartItem = checkbox.closest('.cart-item');
        const itemName = cartItem.querySelector('.cart-item-details h3').textContent;
        const itemImage = cartItem.querySelector('img').src;
        const itemPrice = parseFloat(cartItem.querySelector('.cart-price').textContent.replace('Price: ₱', '').replace(',', ''));
        const itemQuantity = parseInt(cartItem.querySelector('.cart-quantity input').value);
        const itemVariation = cartItem.querySelector('.cart-item-details p').textContent.replace('Variation: ', '');

        selectedItems.push({
            name: itemName,
            image: itemImage,
            price: itemPrice,
            quantity: itemQuantity,
            variation: itemVariation
        });
    });

    localStorage.setItem('selectedCartItems', JSON.stringify(selectedItems));
    window.location.href = 'checkout.html';
}

