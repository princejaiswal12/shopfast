function addProduct() {
  const name = document.getElementById("productName").value;
  const price = document.getElementById("productPrice").value;

  if (!name || !price) {
    alert("Please fill in both fields.");
    return;
  }

  const newProduct = { name, price };
  let products = JSON.parse(localStorage.getItem("products")) || [];
  products.push(newProduct);
  localStorage.setItem("products", JSON.stringify(products));

  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";

  renderProducts(); // update the product list in shopkeeper view
}
