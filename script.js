function handleSearch() {
  const input = document.getElementById("searchInput").value;
  if (input) {
    alert(`Searching for "${input}"...`);
  } else {
    alert("Please enter a product name to search.");
  }
}

function showModal() {
  document.getElementById("roleModal").style.display = "flex";
}

function redirectTo(role) {
  if (role === 'shopkeeper') {
    window.location.href = "shopkeeper.html"; // Replace with your shopkeeper page path
  } else if (role === 'customer') {
    window.location.href = "customer.html"; // Replace with your customer page path
  }
}

// Optional: close modal when clicking outside it
window.onclick = function(event) {
  const modal = document.getElementById("roleModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
}


function handleSearch() {
  const input = document.getElementById("searchInput").value.trim().toLowerCase();
  const resultContainer = document.getElementById("searchResults");
  const products = JSON.parse(localStorage.getItem("products")) || [];

  resultContainer.innerHTML = ""; // Clear previous results

  if (!input) {
    alert("Please enter a product name to search.");
    return;
  }

  const matches = products.filter(product =>
    product.name.toLowerCase().includes(input)
  );

  if (matches.length === 0) {
    resultContainer.innerHTML = "<li>No matching products found.</li>";
    return;
  }

  matches.forEach(product => {
    const li = document.createElement("li");
    li.textContent = `${product.name} - ₹${product.price}`;
    resultContainer.appendChild(li);
  });
}

