import { products } from "./products.js";

const cart = JSON.parse(localStorage.getItem("cart") || "[]");

const $products = document.getElementById("products");
const $checkout = document.getElementById("checkout");
const $cart = document.getElementById("cart");

cart.forEach((item) => {
  const product = products.find((product) => product.id === item.productId);
  const size = product.sizes.find((size) => size.label === item.size);

  $products.innerHTML += `<tr class="text-sm sm:text-base text-gray-600 text-center">
      <td class="font-primary font-medium px-4 sm:px-6 py-4 flex items-center">
        <img src="./images/${
          product.images[0]
        }" class="sm:inline-flex" height="64" width="64" />
        <a href="product.html?id=${product.id}" class="pt-1">${product.name}</a>
      </td>
      <td class="font-primary font-medium px-4 sm:px-6 py-4 hidden sm:table-cell">
        <span class="text-lg">${item.quantity}</span>
      </td>
      <td class="font-primary font-medium px-4 sm:px-6 py-4 hidden sm:table-cell">
        <span class="text-lg">${size.label}</span>
      </td>
      <td class="font-primary font-medium px-4 sm:px-6 py-4 hidden sm:table-cell">
        <span class="text-lg">$${size.price}</span>
      </td>
      <td class="font-primary font-medium px-4 sm:px-6 py-4 hidden sm:table-cell">
        <span class="text-lg">$${item.quantity * size.price}</span>
      </td>
      <td class="font-primary font-medium px-4 sm:px-6 py-4">
        <button class="border border-blue-900 hover:bg-blue-100 p-1" id="remove-button">
          <img src="./images/close.png" class="w-5 h-5" />
        </button>
      </td>
    </tr>`;
});

$products.querySelectorAll("#remove-button").forEach(($btn, index) => {
  $btn.addEventListener("click", () => {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    window.location.reload();
  });
});

$checkout.addEventListener("click", () => {
  localStorage.setItem("cart", JSON.stringify([]));
  window.location.reload();
});

$cart.innerText = cart.length;
