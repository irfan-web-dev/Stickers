//on click add carts
function addToCart() {
  let cartCount = localStorage.getItem("cartCount") || 0;
  cartCount++;
  localStorage.setItem("cartCount", cartCount);
  updateCartCount();

  const addQuantity = document.getElementById("quantity1").value;
  const $shop1 = document.getElementById("shop1");
  $shop1.style.display = "block";
  $shop1.innerText = cartCount += parseInt(addQuantity);
}

function updateCartCount() {
  let cartCount = localStorage.getItem("cartCount") || 0;
  console.log(document.getElementById("shop1"));
  document.getElementById("shop1").innerText = cartCount;
}
document.getElementById("addCart1")?.addEventListener("click", addToCart);
updateCartCount();
