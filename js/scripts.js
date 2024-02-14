document.addEventListener("DOMContentLoaded", function () {
  // Find the cart button and cart items badge
  var cartButton = document.getElementById("cartButton");
  var cartItemsBadge = document.getElementById("cartItems");

  // Set up a variable to keep track of the cart items count
  var cartItemCount = 0;

  // Function to append alerts
  const appendAlert = (message, type) => {
    const alertPlaceholder = document.getElementById("liveAlertPlaceholder");
    const wrapper = document.createElement("div");
    wrapper.innerHTML = [
      `<div class="alert alert-${type} alert-dismissible" role="alert">`,
      `   <div>${message}</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      "</div>",
    ].join("");

    alertPlaceholder.append(wrapper);
  };

  // Attach a click event listener to the cart button
  cartButton.addEventListener("click", function () {
    // Increment the cart items count
    cartItemCount++;

    // Update the cart items badge
    cartItemsBadge.textContent = cartItemCount;

    // Show an alert message
    appendAlert("Item added to cart!", "success");

    // You can add additional logic here to update the cart on your server or perform other actions.
    // For a complete shopping cart functionality, you may need to handle product information, prices, etc.
  });

  // Attach click event listeners to all "Add to cart" buttons for individual items
  var addToCartButtons = document.querySelectorAll(".add-to-cart-button");

  addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Increment the cart items count
      cartItemCount++;

      // Update the cart items badge
      cartItemsBadge.textContent = cartItemCount;

      // Show an alert message
      appendAlert("Item added to cart!", "success");

      // You can add additional logic here to update the cart on your server or perform other actions.
      // For a complete shopping cart functionality, you may need to handle product information, prices, etc.
    });
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   // Find the cart button and cart items badge
//   var cartButton = document.getElementById("cartButton");
//   var cartItemsBadge = document.getElementById("cartItems");

//   // Set up a variable to keep track of the cart items count
//   var cartItemCount = 0;

//   // Attach a click event listener to the cart button
//   cartButton.addEventListener("click", function () {
//     // Increment the cart items count
//     cartItemCount++;

//     // Update the cart items badge
//     cartItemsBadge.textContent = cartItemCount;

//     // Show an alert message (you can replace this with your own logic to add the item to the cart)
//     alert("Item added to cart!");

//     // You can add additional logic here to update the cart on your server or perform other actions.
//     // For a complete shopping cart functionality, you may need to handle product information, prices, etc.
//   });

//   // Attach click event listeners to all "Add to cart" buttons for individual items
//   var addToCartButtons = document.querySelectorAll(".add-to-cart-button");

//   addToCartButtons.forEach(function (button) {
//     button.addEventListener("click", function () {
//       // Increment the cart items count
//       cartItemCount++;

//       // Update the cart items badge
//       cartItemsBadge.textContent = cartItemCount;

//       // Show an alert message (you can replace this with your own logic to add the specific item to the cart)
//       alert("Item added to cart!");

//       // You can add additional logic here to update the cart on your server or perform other actions.
//       // For a complete shopping cart functionality, you may need to handle product information, prices, etc.
//     });
//   });
// });
