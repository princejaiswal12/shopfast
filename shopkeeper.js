const productList = document.getElementById("productList");

function addProduct() {
  const name = document.getElementById("productName").value.trim();
  const price = document.getElementById("productPrice").value.trim();

  if (!name || !price) {
    alert("Please enter both product name and price.");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    ${name} - ₹${price}
    <button onclick="removeProduct(this)">Remove</button>
  `;

  productList.appendChild(li);

  document.getElementById("productName").value = "";
  document.getElementById("productPrice").value = "";
}

function removeProduct(button) {
  const li = button.parentElement;
  productList.removeChild(li);
}

