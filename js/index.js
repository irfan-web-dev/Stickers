import { products } from "./products.js";

const cart = JSON.parse(localStorage.getItem("cart") ?? "[]");

const $products = document.getElementById("products");
const $cart = document.getElementById("cart");

products.forEach((product) => {
  $products.innerHTML += `
    <a href="product.html?id=${product.id}">
    <div
      class="h-120 w-72 rounded shadow-lg mx-auto border cursor-pointer"
    >
      <div
        class="h-72 border-b-2 border-palette-lighter relative overflow-hidden"
      >
        <img
        src="./images/${product.images[0]}"
          class="transform duration-500 ease-in-out hover:scale-110 absolute"
        />
      </div>
      <div class="h-48 relative">
        <h4
          class="text-indigo-800 text-palette-primary text-2xl pt-4 px-4 font-semibold"
        >
        ${product.name}
        </h4>
        <h5 class="text-lg text-gray-600 p-4 font-light">
        ${product.description}
        </h5>
        <span
          class="text-lg font-semibold text-blue-900 absolute bottom-0 right-0 mb-4 pl-8 pr-4 pb-1 pt-2"
          >$${product.sizes[0].price}</span
        >
      </div>
    </div>
  </a>`;
});

$cart.innerText = cart.length;
