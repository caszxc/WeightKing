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
            "A great cross trainer for any sport, the ball combines strength training, cardio, flexibility and dynamic muscle training! Available in : 4, 6, 8, 10, 12, 16, 20, & 25lbs. "+
            "<br><br><a href='./educational/ball.html'>How to use the product</a>",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/freeweights-balls.jpeg",
                thumb1: "images/product-img/freeweights-balls.jpeg",
                thumb2: "images/product-img/freeweights-balls2.jpg",
                thumb3: "images/product-img/freeweights-balls3.jpg"
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
            description: "This is a great product."+
            "<br><br><a href='./educational/band.html'>How to use the product</a>",
            rating: 1,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/freeweights-band.jpeg",
                thumb1: "images/product-img/freeweights-band.jpeg",
                thumb2: "images/product-img/freeweights-band2.jpg",
                thumb3: "images/product-img/freeweights-band3.jpg"
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
            description: "This is a great product."+
            "<br><br><a href='./educational/bar.html'>How to use the product</a>",
            rating: "1 out of 5",
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/freeweights-bar.jpeg",
                thumb1: "images/product-img/freeweights-bar.jpeg",
                thumb2: "images/product-img/freeweights-bar2.jpg",
                thumb3: "images/product-img/freeweights-bar3.jpg"
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
            description: "This is a great product."+
            "<br><br><a href='./educational/bench_rack.html'>How to use the product</a>",
            rating: 4,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/freeweights-benchrack.jpeg",
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
            description: "This is a great product."+
            "<br><br><a href='./educational/kettlebell.html'>How to use the product</a>",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/freeweights-Kettlebell.jpeg",
                thumb1: "images/product-img/freeweights-Kettlebell.jpeg",
                thumb2: "images/product-img/freeweights-Kettlebell2.jpg",
                thumb3: "images/product-img/freeweights-Kettlebell3.jpg"
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
            description: "This is a great product."+
            "<br><br><a href='./educational/dumbell_rack.html'>How to use the product</a>",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/freeweights-lalagyan.jpeg",
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
            description: "This is a great product."+
            "<br><br><a href='./educational/plates.html'>How to use the product</a>",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/freeweights-plates.jpeg",
                thumb1: "images/product-img/freeweights-plates.jpeg",
                thumb2: "images/product-img/freeweights-plates2.jpg",
                thumb3: "images/product-img/freeweights-plates3.jpg"
            }
        },

        product8: {
            name: "Dumbell",
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
            description: "This is a great product."+
            "<br><br><a href='./educational/dumbell.html'>How to use the product</a>",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/freeweights-dumbell.jpeg",
                thumb1: "images/product-img/freeweights-dumbell.jpeg",
                thumb2: "images/product-img/freeweights-dumbell2.jpg",
                thumb3: "images/product-img/freeweights-dumbell3.jpg"
            }
        },

        product9: {
            name: "Barbell",
            variations: {
                "Small": 3000,
                "Medium": 3500,
                "Large": 4000,
            },
            noRatings: "200 Ratings",
            sold: "0 Sold",
            shipping: "Metro Manila",
            shippingFee: "₱50",
            category: "Weight King > Shop Now > Free Weights",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "This is a great product."+
            "<br><br><a href='./educational/barbell.html'>How to use the product</a>",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/freeweights-barbell.jpeg",
            }
        }

    },

    machines: {
        product1: {
            name: "Leg Extension Machine",
            variations: {
                "Standard": 3000,
            },
            noRatings: "200 Ratings",
            sold: "0 Sold",
            shipping: "Metro Manila",
            shippingFee: "₱50",
            category: "Weight King > Shop Now > Free Weights",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "This is a great product."+
            "<br><br><a href='./educational/leg_extension.html'>How to use the product</a>",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/machines-leg-extension.jpg",
            }
        },

        product2: {
            name: "Chest Press Machine",
            variations: {
                "Standard": 3000,
            },
            noRatings: "200 Ratings",
            sold: "0 Sold",
            shipping: "Metro Manila",
            shippingFee: "₱50",
            category: "Weight King > Shop Now > Free Weights",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "This is a great product."+
            "<br><br><a href='./educational/chest_press.html'>How to use the product</a>",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/machines-chest-press-machine.jpeg",
            }
        },

        product3: {
            name: "Leg Press Machine",
            variations: {
                "Standard": 3000,
            },
            noRatings: "200 Ratings",
            sold: "0 Sold",
            shipping: "Metro Manila",
            shippingFee: "₱50",
            category: "Weight King > Shop Now > Free Weights",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "This is a great product."+
            "<br><br><a href='./educational/leg_press.html'>How to use the product</a>",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/machines-leg-press-machine.jpeg",
            }
        },

        product4: {
            name: "Seated Dip Machine",
            variations: {
                "Standard": 3000,
            },
            noRatings: "200 Ratings",
            sold: "0 Sold",
            shipping: "Metro Manila",
            shippingFee: "₱50",
            category: "Weight King > Shop Now > Free Weights",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "This is a great product."+
            "<br><br><a href='./educational/dip_machine.html'>How to use the product</a>",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/machines-seated-dip-machine.jpeg",
            }
        },

        product5: {
            name: "Stationary Bicycle",
            variations: {
                "Standard": 3000,
            },
            noRatings: "200 Ratings",
            sold: "0 Sold",
            shipping: "Metro Manila",
            shippingFee: "₱50",
            category: "Weight King > Shop Now > Free Weights",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "This is a great product."+
            "<br><br><a href='./educational/bicycle.html'>How to use the product</a>",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/machines-stationary-bicycle.jpeg",
            }
        },

        product6: {
            name: "Treadmill",
            variations: {
                "Standard": 3000,
            },
            noRatings: "200 Ratings",
            sold: "0 Sold",
            shipping: "Metro Manila",
            shippingFee: "₱50",
            category: "Weight King > Shop Now > Free Weights",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "This is a great product."+
            "<br><br><a href='./educational/treadmill.html'>How to use the product</a>",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/machines-tredmill.jpeg",
            }
        },

    }, 

    calisthenics: {
        product1: {
            name: "Ab Wheel Roller",
            variations: {
                "Small": 3000,
                "Medium": 3500,
                "Large": 4000,
            },
            noRatings: "200 Ratings",
            sold: "0 Sold",
            shipping: "Metro Manila",
            shippingFee: "₱40",
            category: "Weight King > Shop Now > Calisthenics ",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "This is a great product."+
            "<br><br><a href='./educational/roller_wheel.html'>How to use the product</a>",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/calisthenics-ab-roller.jpeg",
                thumb1: "images/product-img/calisthenics-ab-roller.jpeg",
                thumb2: "images/product-img/calisthenics-ab-roller2.jpg",
                thumb3: "images/product-img/calisthenics-ab-roller3.jpg"
            }
        },

        product2: {
            name: "Gymnastic Rings",
            variations: {
                "Small": 3000,
                "Medium": 3500,
                "Large": 4000,
            },
            noRatings: "200 Ratings",
            sold: "0 Sold",
            shipping: "Metro Manila",
            shippingFee: "₱40",
            category: "Weight King > Shop Now > Calisthenics ",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "This is a great product."+
            "<br><br><a href='./educational/rings.html'>How to use the product</a>",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/calisthenics-gymnastic-rings.jpeg",
            }
        },

        product3: {
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
            category: "Weight King > Shop Now > Calisthenics ",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "This is a great product."+
            "<br><br><a href='./educational/kettlebell.html'>How to use the product</a>",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/calisthenics-kettlebell.jpeg",
            }
        },

        product4: {
            name: "Paralletes",
            variations: {
                "Small": 3000,
                "Medium": 3500,
                "Large": 4000,
            },
            noRatings: "200 Ratings",
            sold: "0 Sold",
            shipping: "Metro Manila",
            shippingFee: "₱40",
            category: "Weight King > Shop Now > Calisthenics ",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "This is a great product."+
            "<br><br><a href='./educational/paralletes.html'>How to use the product</a>",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/calisthenics-parallettes.jpeg",
                thumb1: "images/product-img/calisthenics-parallettes.jpeg",
                thumb2: "images/product-img/calisthenics-parallettes2.jpeg",
            }
        },

        product5: {
            name: "Pull up Bar",
            variations: {
                "Small": 3000,
                "Medium": 3500,
                "Large": 4000,
            },
            noRatings: "200 Ratings",
            sold: "0 Sold",
            shipping: "Metro Manila",
            shippingFee: "₱40",
            category: "Weight King > Shop Now > Calisthenics ",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "This is a great product."+
            "<br><br><a href='./educational/pull_up_bar.html'>How to use the product</a>",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/calisthenics-pull-up-bar.jpeg",
                thumb1: "images/product-img/calisthenics-pull-up-bar.jpeg",
                thumb2: "images/product-img/calisthenics-pull-up-bar2.jpeg",
                thumb3: "images/product-img/calisthenics-pull-up-bar3.jpeg"
            }
        },

        product6: {
            name: "Push up Bar",
            variations: {
                "Small": 3000,
                "Medium": 3500,
                "Large": 4000,
            },
            noRatings: "200 Ratings",
            sold: "0 Sold",
            shipping: "Metro Manila",
            shippingFee: "₱40",
            category: "Weight King > Shop Now > Calisthenics",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "This is a great product."+
            "<br><br><a href='./educational/push_up_bar.html'>How to use the product</a>",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/calisthenics-push-up-bar.jpeg",
                thumb1: "images/product-img/calisthenics-push-up-bar.jpeg",
                thumb2: "images/product-img/calisthenics-push-up-bar2.jpeg",
                thumb3: "images/product-img/calisthenics-push-up-bar3.jpeg"
            }
        }

    },

    cardio:{
        product1: {
            name: "Air Bike",
            variations: {
                "Standard": 3000,
            },
            noRatings: "200 Ratings",
            sold: "0 Sold",
            shipping: "Metro Manila",
            shippingFee: "₱40",
            category: "Weight King > Shop Now > Cardio ",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "This is a great product."+
            "<br><br><a href='./educational/air_bike.html'>How to use the product</a>",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/cardio-air-bike.jpeg",
            }
        },

        product2: {
            name: "Indoor Rower",
            variations: {
                "Standard": 3000,
            },
            noRatings: "200 Ratings",
            sold: "0 Sold",
            shipping: "Metro Manila",
            shippingFee: "₱40",
            category: "Weight King > Shop Now > Cardio ",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "This is a great product."+
            "<br><br><a href='./educational/indoor_rower.html'>How to use the product</a>",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/cardio-indoor-rower.jpeg",
            }
        },


        product3: {
            name: "Stair Climber",
            variations: {
                "Standard": 3000,
            },
            noRatings: "200 Ratings",
            sold: "0 Sold",
            shipping: "Metro Manila",
            shippingFee: "₱40",
            category: "Weight King > Shop Now > Cardio ",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "This is a great product."+
            "<br><br><a href='./educational/stair_climber.html'>How to use the product</a>",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/cardio-stair-climber.jpeg",
            }
        },


        product4: {
            name: "Stationary Bicycle",
            variations: {
                "Standard": 3000,
            },
            noRatings: "200 Ratings",
            sold: "0 Sold",
            shipping: "Metro Manila",
            shippingFee: "₱40",
            category: "Weight King > Shop Now > Cardio ",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "This is a great product."+
            "<br><br><a href='./educational/bicycle.html'>How to use the product</a>",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/cardio-stationary-bicycle.jpeg",
            }
        },


        product5: {
            name: "Treadmill",
            variations: {
                "Standard": 3000,
            },
            noRatings: "200 Ratings",
            sold: "0 Sold",
            shipping: "Metro Manila",
            shippingFee: "₱40",
            category: "Weight King > Shop Now > Cardio ",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "This is a great product."+
            "<br><br><a href='./educational/treadmill.html'>How to use the product</a>",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/cardio-treadmill.jpeg",
            }
        }

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
            category: "Weight King > Shop Now > Gears",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "This is a great product."+
            "<br><br><a href='./educational/belt.html'>How to use the product</a>",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/gears-weight-lifting-belt.jpeg",
                thumb1: "images/product-img/gears-weight-lifting-belt.jpeg",
                thumb2: "images/product-img/gears-weight-lifting-belt2.jpeg",
                thumb3: "images/product-img/gears-weight-lifting-belt3.jpeg"
            }
        },

        product2: {
            name: "Weight Training Gloves",
            variations: {
                "Small": 3000,
                "Medium": 3500,
                "Large": 4000,
            },
            noRatings: "200 Ratings",
            sold: "0 Sold",
            shipping: "Metro Manila",
            shippingFee: "₱40",
            category: "Weight King > Shop Now > Gears",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "This is a great product."+
            "<br><br><a href='./educational/gloves.html'>How to use the product</a>",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/gears-weight-training-gloves.jpeg",
                thumb1: "images/product-img/gears-weight-training-gloves.jpeg",
                thumb2: "images/product-img/gears-weight-training-gloves2.jpeg",
                thumb3: "images/product-img/gears-weight-training-gloves3.jpeg"
            }
        },

        product3: {
            name: "Wrist Straps",
            variations: {
                "Small": 3000,
                "Medium": 3500,
                "Large": 4000,
            },
            noRatings: "200 Ratings",
            sold: "0 Sold",
            shipping: "Metro Manila",
            shippingFee: "₱40",
            category: "Weight King > Shop Now > Gears",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "This is a great product."+
            "<br><br><a href='./educational/wrist_straps.html'>How to use the product</a>",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/gears-wrist-straps.jpeg",
                thumb1: "images/product-img/gears-wrist-straps.jpeg",
                thumb2: "images/product-img/gears-wrist-straps2.jpeg",
                thumb3: "images/product-img/gears-wrist-straps3.jpeg"
            }
        },

        product4: {
            name: "Shoulder Strap",
            variations: {
                "Small": 3000,
                "Medium": 3500,
                "Large": 4000,
            },
            noRatings: "200 Ratings",
            sold: "0 Sold",
            shipping: "Metro Manila",
            shippingFee: "₱40",
            category: "Weight King > Shop Now > Gears",
            brand: "Weight King",
            condition: "New",
            stock: 10,
            shipsFrom: "Valenzuela City, Metro Manila",
            description: "This is a great product."+
            "<br><br><a href='./educational/shoulder_strap.html'>How to use the product</a>",
            rating: 5,
            reviews: "No reviews yet.",
            images: {
                main: "images/product-img/gears-shoulder-strap.jpg",
                thumb1: "images/product-img/gears-shoulder-strap.jpg",
                thumb2: "images/product-img/gears-shoulder-strap2.jpg",
                thumb3: "images/product-img/gears-shoulder-strap3.jpg"
            }
        }
        
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
    
    document.getElementById('product-description').innerHTML = product.description;

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