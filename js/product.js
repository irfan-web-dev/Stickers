import { products } from "./products.js";

const productId = getQueryParam("id");
const product = products.find((product) => product.id === Number(productId));

const cart = JSON.parse(localStorage.getItem("cart") ?? "[]");
const $name = document.getElementById("name");
const $description = document.getElementById("description");
const $price = document.getElementById("price");
const $mainImg = document.getElementById("main-img");
const $images = document.getElementById("images");
const $sizes = document.getElementById("sizes");
const $addCart = document.getElementById("addCart");
const $quantity = document.getElementById("quantity");
const $cart = document.getElementById("cart");

$name.innerText = product.name;
$description.innerText = product.description;
$price.innerText = `$${product.sizes[0].price}`;
$mainImg.src = `./images/${product.images[0]}`;

product.images.forEach((image) => {
  $images.innerHTML += `<img
    src=./images/${image}
    class="w-36 h-32 flex-shrink-0 rounded-sm cursor-pointer"
  />`;
});

$images.querySelectorAll("img").forEach(($image) => {
  $image.addEventListener("click", () => {
    $mainImg.src = $image.src;
  });
});

product.sizes.forEach((size) => {
  $sizes.innerHTML += `<option value="${size.label}">${size.label}</option>`;
});

$sizes.addEventListener("change", () => {
  const currentSizeLabel = document.querySelector(
    "#sizes option:checked"
  ).value;

  const currentSize = product.sizes.find(
    (size) => size.label === currentSizeLabel
  );

  $price.innerText = `$${currentSize.price}`;
});

//onclick on addCart
$addCart.addEventListener("click", () => {
  const currentSizeLabel = document.querySelector(
    "#sizes option:checked"
  ).value;

  const item = cart.findIndex(
    (item) => item.productId === product.id && item.size === currentSizeLabel
  );

  if (item !== -1) {
    cart[item].quantity += Number($quantity.value);
  } else {
    const item = {
      productId: product.id,
      size: currentSizeLabel,
      quantity: Number($quantity.value),
    };
    cart.push(item);
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.reload();
});

$cart.innerText = cart.length;

function getQueryParam(paramName) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  return urlParams.get(paramName);
}
