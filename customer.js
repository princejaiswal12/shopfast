const productList = document.getElementById("availableProducts");

function renderProducts() {
  const products = JSON.parse(localStorage.getItem("products")) || [];

  productList.innerHTML = ""; // clear before rendering
  products.forEach((product, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${product.name} - ₹${product.price}</span>
      <input type="checkbox" value="${index}" />
    `;
    productList.appendChild(li);
  });
}

function submitOrder() {
  const selected = document.querySelectorAll("input[type='checkbox']:checked");
  const products = JSON.parse(localStorage.getItem("products")) || [];
  const orderItems = Array.from(selected).map(cb => products[cb.value]);

  if (orderItems.length === 0) {
    alert("Please select at least one product to order.");
    return;
  }

  // Store all orders under a key, preserving previous orders
  let allOrders = JSON.parse(localStorage.getItem("customerOrders")) || [];
  allOrders.push(orderItems);
  localStorage.setItem("customerOrders", JSON.stringify(allOrders));

  alert("Order placed successfully! 🧾");

  selected.forEach(cb => cb.checked = false); // clear selection
}

renderProducts();
