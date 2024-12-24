window.onload = function () {
  // Retrieve cart data from local storage
  let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  const cartBox = document.getElementById("cart-box");
  const cartTotal = document.getElementById("cart-total");

  // Display each item in the cart
  function displayCartItems() {
    // Clear the existing content in the cart box
    cartBox.innerHTML = "";

    cartItems.forEach((item) => {
      const cartItemBox = document.createElement("div");
      const totalPrice =
        item.quantity * getPriceForProduct(item.product);

      cartItemBox.innerHTML = `
        <div class="product-details">
            <img src="${getImagePath(item.product)}" alt="${item.product}">
            <div>
                <h1>${item.product}</h1>
                <p>Price: Rs.${getPriceForProduct(item.product)}</p>
                 <span id="quantity_${item.product}">Quantity:${item.quantity}</span>
                <p>Total: ₹.${totalPrice.toFixed(2)}</p>
            </div>
        </div>
      `;

      // Add stylish quantity buttons
      const incrementButton = createQuantityButton(
        "-",
        () => decrementQuantity(item)
      );
      const decrementButton = createQuantityButton(
        "+",
        () => incrementQuantity(item)
      );

      // Add a "Remove" button
      const removeButton = createRemoveButton(item);

      cartItemBox.appendChild(incrementButton);
      cartItemBox.appendChild(decrementButton);
      cartItemBox.appendChild(removeButton);
      cartBox.appendChild(cartItemBox);
    });

    // Display the total price at the end of the cart
    const totalAmount = cartItems.reduce(
      (total, item) =>
        total + item.quantity * getPriceForProduct(item.product),
      0
    );
    cartTotal.innerHTML = `<h3 class="total">Total: Rs.${totalAmount.toFixed(
      2
    )}</h3>`;
  }

  function getPriceForProduct(product) {
    // You need to create a mapping between product names and their prices
    const productPrices = {
      gold_winner: 299,
      maggie: 14,
      tata_salt: 10,
      toor_dal: 90,
      kellogs: 190,
      coffee: 80,
      ashirvad_atta: 420,
      oats: 200,
      bru_coffee: 110,
      hersheys: 220,
      bourn_vita: 250,
      kissan_jam: 140,
      basmati_rice: 500,
      pickle: 50,
      cocunut_oil: 180,
      vim_gel: 80,
      elachi: 130,
      honey: 230,
      nangrow: 330,
      peanuts: 260,
      cashew: 600,
      lizol: 190,
      parrys_sugar: 60,
      horlicks: 170,
      boost: 190,
      harpic: 40,
      peppercorn: 30,
      soya_sauce: 80,
      green_chilli_sauce: 90,
      vinegar: 180,
      tomato_sauce: 70,
      Santoor_soap: 169,
      Cinthol_soap: 70,
    };

    return productPrices[product] || 0.0; // Provide a default price if not found
  }

  function getImagePath(product) {
    // You need to create a mapping between product names and image paths
    const imagePaths = {
      gold_winner: "goldwinner2.jpg",
      maggie: "maggi.webp",
      tata_salt: "salt.webp",
      toor_dal: "toor daal.jpg",
      kellogs: "kellogs.jpg",
      coffee: "coffee powder.webp",
      ashirvad_atta: "ashirvad atta.jpg",
      oats: "oats.webp",
      bru_coffee: "bru coffe.webp",
      hersheys: "hersheys.webp",
      bourn_vita: "bourn vits.webp",
      kissan_jam: "kissan jam.webp",
      basmati_rice: "rice.webp",
      pickle: "pickle.jpg",
      cocunut_oil: "cocunet oil.webp",
      vim_gel: "vimgel.webp",
      elachi: "elachi.webp",
      honey: "honey.webp",
      nangrow: "nangrow.webp",
      peanuts: "peanuts.webp",
      cashew: "cashew.webp",
      lizol: "lizol.webp",
      parrys_sugar: "sugar.jpg",
      horlicks: "horlicks.webp",
      boost: "boost.webp",
      harpic: "harpic.webp",
      peppercorn: "peppercorn.webp",
      soya_sauce: "soya sauce.webp",
      green_chilli_sauce: "green chilli sauce.webp",
      vinegar: "vingar.jpg",
      tomato_sauce: "tomato sauce.webp",
      Santoor_soap: 'santoor.webp',
      Cinthol_soap: 'cinthol.jpg',
    };

    return imagePaths[product] || "default.png"; // Provide a default image path if not found
  }

  function incrementQuantity(item) {
    item.quantity++;
    updateCartAndDisplay();
  }

  function decrementQuantity(item) {
    if (item.quantity > 1) {
      item.quantity--;
      updateCartAndDisplay();
    }
  }

  function createQuantityButton(label, clickHandler) {
    const button = document.createElement("button");
    button.innerText = label;
    button.className = "quantity-btn";
    button.addEventListener("click", clickHandler);
    return button;
  }

  function createRemoveButton(item) {
    const button = document.createElement("button");
    button.innerText = "Remove";
    button.className = "remove-btn";
    button.addEventListener("click", () => {
      removeItemFromCart(item);
      displayCartItems();
    });
    return button;
  }

  function removeItemFromCart(item) {
    cartItems = cartItems.filter((cartItem) => cartItem !== item);
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }

  function updateCartAndDisplay() {
    localStorage.setItem("cart", JSON.stringify(cartItems));
    displayCartItems();
  }

  displayCartItems();

  const onlineTextElement = document.getElementById("onlineText");
  const categories = ["Groceries", "Vegetables", "Textile", "Meat", "Fruits", "Snacks", "Furniture", "Ice Cream"];
  let currentIndex = 0;

  function rotateCategories() {
    onlineTextElement.textContent = categories[currentIndex];
    currentIndex = (currentIndex + 1) % categories.length;
  }

  // Call the function to start rotating categories
  setInterval(rotateCategories, 3000); // Change the interval (in milliseconds) as needed
};



var buyNowButton = document.getElementById('buynow');
var overlay = document.getElementById('overlay');

// Add click event listener to the Buy Now button
buyNowButton.addEventListener('click', function() {
openModal();
});

// Function to open the modal
function openModal() {
// Get the current cart total dynamically
var cartTotalElement = document.getElementById("cart-total");
var cartTotal = cartTotalElement.innerText.replace("Total: Rs", "").trim();

// Update the modal content with the dynamic total amount
var modalTotalElement = document.querySelector("#overlay .modal p");
modalTotalElement.textContent = 'Total Amount: Rs' + cartTotal;

overlay.style.display = 'flex';
}


// Function to close the modal
function closeModal() {
overlay.style.display = 'none';
}

function submitPayment() {
var paymentMethod = document.querySelector('input[name="payment"]:checked');
if (paymentMethod) {
// Get the current cart total dynamically
var cartTotalElement = document.getElementById("cart-total");
var cartTotal = cartTotalElement.innerText.replace("Total: Rs", "").trim();

alert('Payment successful! Method: ' + paymentMethod.value + '\nTotal Amount: ' + cartTotal);
closeModal();
} else {
alert('Please select a payment method.');
}
}