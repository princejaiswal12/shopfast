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