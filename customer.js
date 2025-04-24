// Mock: Load available products (you can sync this with shopkeeper's list later)
const mockProducts = [
    { name: "Milk", price: "40" },
    { name: "Bread", price: "30" },
    { name: "Butter", price: "60" },
    { name: "Eggs", price: "50" },
  ];
  
  const productList = document.getElementById("availableProducts");
   
  function renderProducts() {
    mockProducts.forEach((product, index) => {
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
    const orderItems = Array.from(selected).map(cb => mockProducts[cb.value]);
  
    if (orderItems.length === 0) {
      alert("Please select at least one product to order.");
      return;
    }
  
    // Save order to localStorage (to simulate DB for now)
    localStorage.setItem("customerOrder", JSON.stringify(orderItems));
    alert("Order placed successfully! 🧾");
    selected.forEach(cb => cb.checked = false);
  }
  
  
  renderProducts();
  