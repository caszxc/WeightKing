/* basta para mahanap yung category and product tas iload */

document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const productId = urlParams.get('productId');
    if (category && productId) {
        loadProduct(category, productId);
    }

    document.getElementById('add-to-cart-btn').addEventListener('click', addToCart);
    document.getElementById('buy-now-btn').addEventListener('click', buyNow);
});

/* mga laman ng product*/

const products = {
    free_weights: { 
        product1: {
            name: "Medicine Ball",
            variations: {
                "Small": 3000,
                "Medium": 3500,
                "Large": 4000,
            },
            noRatings: "200 Ratings",
            sold: "0 Sold",
            shipping: "Metro Manila",
            shippingFee: "₱40",
            category: "Weight King > Shop Now > Free Weights",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "Medicine Balls boast a durable PVC rubber construction with a textured surface for maximum grip and control."+
            "A great cross trainer for any sport, the ball combines strength training, cardio, flexibility and dynamic muscle training! Available in : 4, 6, 8, 10, 12, 16, 20, & 25lbs.",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/freeweights-balls.jpeg",
                thumb1: "images/product-img/freeweights-balls.jpeg",
                thumb2: "images/product-img/freeweights-band.jpeg",
                thumb3: "images/product-img/freeweights-bar.jpeg"
            }
        },

        product2: {
            name: "Band",
            variations: {
                "Standard": 5000,
                //pede pa dagdagan
            },
            noRatings: "200 Ratings",
            sold: "0 Sold",
            shipping: "Metro Manila",
            shippingFee: "₱40",
            category: "Weight King > Shop Now > Free Weights",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "This is a great product.",
            rating: 1,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/freeweights-band.jpeg",
                thumb1: "images/product-img/freeweights-band.jpeg",
                thumb2: "images/product-img/freeweights-band.jpeg",
                thumb3: "images/product-img/freeweights-band.jpeg"
            }
        },

        product3: {
            name: "Bar",
            variations: {
                "Small": 3000,
                "Medium": 3500,
                "Large": 4000,
            },
            noRatings: "200 Ratings",
            sold: "0 Sold",
            shipping: "Metro Manila",
            shippingFee: "₱40",
            category: "Weight King > Shop Now > Free Weights",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "This is a great product.",
            rating: "1 out of 5",
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/freeweights-bar.jpeg",
                thumb1: "images/product-img/freeweights-bar.jpeg",
                thumb2: "images/product-img/freeweights-bar.jpeg",
                thumb3: "images/product-img/freeweights-bar.jpeg"
            }
        },


        product4: {
            name: "Bench Rack",
            variations: {
                "Small": 3000,
                "Medium": 3500,
                "Large": 4000,
            },
            noRatings: "200 Ratings",
            sold: "0 Sold",
            shipping: "Metro Manila",
            shippingFee: "₱40",
            category: "Weight King > Shop Now > Free Weights",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "This is a great product.",
            rating: 4,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/freeweights-benchrack.jpeg",
                thumb1: "images/product-img/freeweights-benchrack.jpeg",
                thumb2: "images/product-img/freeweights-benchrack.jpeg",
                thumb3: "images/product-img/freeweights-benchrack.jpeg"
            }
        },


        product5: {
            name: "Kettlebell",
            variations: {
                "Small": 3000,
                "Medium": 3500,
                "Large": 4000,
            },
            noRatings: "200 Ratings",
            sold: "0 Sold",
            shipping: "Metro Manila",
            shippingFee: "₱40",
            category: "Weight King > Shop Now > Free Weights",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "This is a great product.",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/freeweights-Kettlebell.jpeg",
                thumb1: "images/product-img/freeweights-Kettlebell.jpeg",
                thumb2: "images/product-img/freeweights-Kettlebell.jpeg",
                thumb3: "images/product-img/freeweights-Kettlebell.jpeg"
            }
        },


        product6: {
            name: "Dumbell Rack",
            variations: {
                "Small": 3000,
                "Medium": 3500,
                "Large": 4000,
            },
            noRatings: "200 Ratings",
            sold: "0 Sold",
            shipping: "Metro Manila",
            shippingFee: "₱40",
            category: "Weight King > Shop Now > Free Weights",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "This is a great product.",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/freeweights-lalagyan.jpeg",
                thumb1: "images/product-img/freeweights-lalagyan.jpeg",
                thumb2: "images/product-img/freeweights-lalagyan.jpeg",
                thumb3: "images/product-img/freeweights-lalagyan.jpeg"
            }
        },

        product7: {
            name: "Plates",
            variations: {
                "Small": 3000,
                "Medium": 3500,
                "Large": 4000,
            },
            noRatings: "200 Ratings",
            sold: "0 Sold",
            shipping: "Metro Manila",
            shippingFee: "₱40",
            category: "Weight King > Shop Now > Free Weights",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "This is a great product.",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/freeweights-plates.jpeg",
                thumb1: "images/product-img/freeweights-plates.jpeg",
                thumb2: "images/product-img/freeweights-plates.jpeg",
                thumb3: "images/product-img/freeweights-plates.jpeg"
            }
        },

        product8: {
            name: "Barbell",
            variations: {
                "Small": 3000,
                "Medium": 3500,
                "Large": 4000,
            },
            noRatings: "200 Ratings",
            sold: "0 Sold",
            shipping: "Metro Manila",
            shippingFee: "₱40",
            category: "Weight King > Shop Now > Free Weights",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "This is a great product.",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/freeweights-barbell.jpeg",
                thumb1: "images/product-img/freeweights-barbell.jpeg",
                thumb2: "images/product-img/freeweights-barbell.jpeg",
                thumb3: "images/product-img/freeweights-barbell.jpeg"
            }
        }

    },

    machines: {
        product1: {
            name: "Leg Extension Machine",
            variations: {
                "Small": 3000,
                "Medium": 3500,
                "Large": 4000,
            },
            noRatings: "200 Ratings",
            sold: "0 Sold",
            shipping: "Metro Manila",
            shippingFee: "₱40",
            category: "Weight King > Shop Now > Free Weights",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "This is a great product.",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/freeweights-balls.jpeg",
            }
        },

        //ibang product pa

    }, 

    calisthenics: {
        product1: {
            name: "Stationary Bicycle",
            variations: {
                "Small": 3000,
                "Medium": 3500,
                "Large": 4000,
            },
            noRatings: "200 Ratings",
            sold: "0 Sold",
            shipping: "Metro Manila",
            shippingFee: "₱40",
            category: "Weight King > Shop Now > Free Weights",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "This is a great product.",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/freeweights-balls.jpeg",
                thumb1: "images/product-img/freeweights-balls.jpeg",
                thumb2: "images/product-img/freeweights-band.jpeg",
                thumb3: "images/product-img/freeweights-bar.jpeg"
            }
        },

        //ibang product pa

    },

    cardio:{
        product1: {
            name: "Air Bike",
            variations: {
                "Small": 3000,
                "Medium": 3500,
                "Large": 4000,
            },
            noRatings: "200 Ratings",
            sold: "0 Sold",
            shipping: "Metro Manila",
            shippingFee: "₱40",
            category: "Weight King > Shop Now > Free Weights",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "This is a great product.",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/freeweights-balls.jpeg",
                thumb1: "images/product-img/freeweights-balls.jpeg",
                thumb2: "images/product-img/freeweights-band.jpeg",
                thumb3: "images/product-img/freeweights-bar.jpeg"
            }
        },

        //ibang product pa
        
    },

    gears: {
        product1: {
            name: "Weight Lifting Belt",
            variations: {
                "Small": 3000,
                "Medium": 3500,
                "Large": 4000,
            },
            noRatings: "200 Ratings",
            sold: "0 Sold",
            shipping: "Metro Manila",
            shippingFee: "₱40",
            category: "Weight King > Shop Now > Free Weights",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "This is a great product.",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/freeweights-balls.jpeg",
                thumb1: "images/product-img/freeweights-balls.jpeg",
                thumb2: "images/product-img/freeweights-band.jpeg",
                thumb3: "images/product-img/freeweights-bar.jpeg"
            }
        },

        //ibang product pa
        
    }
};

/*taga load */
function loadProduct(category, productId) {
    const product = products[category][productId];
    
    // Populate variation dropdown
    const variationSelect = document.getElementById('variation-select');
    variationSelect.innerHTML = '';
    for (const variation in product.variations) {
        const option = document.createElement('option');
        option.value = variation;
        option.textContent = variation;
        variationSelect.appendChild(option);
    }

    // Set a default selected variation
    const defaultVariation = Object.keys(product.variations)[0];
    variationSelect.value = defaultVariation;

    // Update price based on selected variation
    document.getElementById('product-price').textContent = `₱${product.variations[defaultVariation]}`;

    variationSelect.addEventListener('change', function() {
        const selectedVariation = this.value;
        document.getElementById('product-price').textContent = `₱${product.variations[selectedVariation]}`;
    });

    // Load other product details
    document.getElementById('main-image').src = product.images.main;
    if (product.images.thumb1) {
        document.getElementById('thumb1').src = product.images.thumb1;
        document.getElementById('thumb1').style.display = 'inline-block';
    }
    if (product.images.thumb2) {
        document.getElementById('thumb2').src = product.images.thumb2;
        document.getElementById('thumb2').style.display = 'inline-block';
    }
    if (product.images.thumb3) {
        document.getElementById('thumb3').src = product.images.thumb3;
        document.getElementById('thumb3').style.display = 'inline-block';
    }
    
    document.getElementById('product-name').textContent = product.name;
    document.getElementById('no-ratings').textContent = product.noRatings;
    document.getElementById('product-sold').textContent = product.sold;
    document.getElementById('product-shipping').textContent = product.shipping;
    document.getElementById('product-shipping-fee').textContent = product.shippingFee;
    
    document.getElementById('product-category').textContent = product.category;
    document.getElementById('product-brand').textContent = product.brand;
    document.getElementById('product-condition').textContent = product.condition;
    document.getElementById('product-stock').textContent = product.stock;
    document.getElementById('product-ships-from').textContent = product.shipsFrom;
    
    document.getElementById('product-description').textContent = product.description;
    renderRating(product.rating);
    document.getElementById('product-reviews').textContent = product.reviews;

    // Add event listeners for thumbnail clicks
    if (product.images.thumb1) {
        document.getElementById('thumb1').addEventListener('click', function() {
            document.getElementById('main-image').src = product.images.thumb1;
        });
    }
    if (product.images.thumb2) {
        document.getElementById('thumb2').addEventListener('click', function() {
            document.getElementById('main-image').src = product.images.thumb2;
        });
    }
    if (product.images.thumb3) {
        document.getElementById('thumb3').addEventListener('click', function() {
            document.getElementById('main-image').src = product.images.thumb3;
        });
    }
}


function renderRating(rating) {
    const ratingElement = document.getElementById('product-rating');
    const ratingTextElement = document.getElementById('product-rating-text');
    
    ratingTextElement.textContent = `${rating} out of 5`;
    ratingElement.innerHTML = ''; 

    for (let i = 1; i <= 5; i++) {
        const star = document.createElement('i');
        star.className = (i <= rating) ? 'fas fa-star' : 'far fa-star';
        ratingElement.appendChild(star);
    }
}



/*for quantity */

function increaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    quantityInput.value = parseInt(quantityInput.value) + 1;
}

function decreaseQuantity() {
    const quantityInput = document.getElementById('quantity');
    if (quantityInput.value > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
}

/* Add to cart function */
function addToCart() {
    // Check if user is logged in
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser) {
        alert('Please log in to add items to your cart.');
        window.location.href = 'login.html'; // Redirect to login page
        return;
    }

    const category = new URLSearchParams(window.location.search).get('category');
    const productId = new URLSearchParams(window.location.search).get('productId');
    const quantity = parseInt(document.getElementById('quantity').value); // Parse quantity as integer

    // Get the selected variation
    const selectedVariation = document.getElementById('variation-select').value;

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = products[category][productId];

    // Check if the product already exists in the cart
    const existingCartItemIndex = cart.findIndex(item => item.category === category && item.productId === productId && item.variation === selectedVariation);

    if (existingCartItemIndex !== -1) {
        // If the product exists, increment the quantity
        cart[existingCartItemIndex].quantity += quantity;
    } else {
        // If the product does not exist, add it to the cart
        const cartItem = {
            category,
            productId,
            variation: selectedVariation, // Add variation to cart item
            quantity,
            name: product.name,
            price: `₱${product.variations[selectedVariation]}`, // Use variation price
            image: product.images.main
        };
        cart.push(cartItem);
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
}


function buyNow() {
    // Check if user is logged in
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (!loggedInUser) {
        alert('Please log in to proceed to checkout.');
        window.location.href = 'login.html'; // Redirect to login page
        return;
    }

    // Redirect to checkout page
    window.location.href = 'checkout.html';
}