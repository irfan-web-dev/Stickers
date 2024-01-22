const $cart1Pics = document.querySelectorAll("#cart1Pics img");
const $cart1img = document.getElementById("cart1img");

$cart1Pics[0].addEventListener("click", function () {
  $cart1img.src = "cart1-img.jpg";
});
$cart1Pics[1].addEventListener("click", function () {
  $cart1img.src = "unicorn1.webp";
});
$cart1Pics[2].addEventListener("click", function () {
  $cart1img.src = "unicorn2.webp";
});

let $quantity1 = document.getElementById("quantity1");
const $addCart1 = document.getElementById("addCart1");
let $shop1 = document.getElementById("shop1");
$addCart1.addEventListener("click", function () {
  $shop1.style.display = "block";
  const $addQuantity = $quantity1.value;
  $shop1.innerText = $addQuantity;

  let $cart1Price = document.getElementById("cart1Price");
  const $cart1Sizes = document.querySelector(
    "#cart1Sizes option:checked"
  ).value;
  console.log($cart1Sizes);
  if ($cart1Sizes === "3x3") {
    $cart1Price.innerText = "$9.99";
  } else if ($cart1Sizes === "4x4") {
    $cart1Price.innerText = "$10.99";
  } else if ($cart1Sizes === "5.5x5.5") {
    $cart1Price.innerText = "$11.99";
  }
});
