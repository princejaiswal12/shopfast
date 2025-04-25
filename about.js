function toggleSection(section) {
    const content = section.querySelector('.section-content');
    const icon = section.querySelector('.toggle-icon');
    const isOpen = content.style.display === 'block';
  
    // Collapse all
    document.querySelectorAll('.section-content').forEach(c => c.style.display = 'none');
    document.querySelectorAll('.toggle-icon').forEach(i => i.textContent = '➕');
    document.querySelectorAll('.toggle-icon').forEach(i => i.classList.remove('rotated'));
  
    if (!isOpen) {
      content.style.display = 'block';
      icon.textContent = '➖';
      icon.classList.add('rotated');
    }
  }
  
  // Handle contact form submission
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-section form");
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      // Simulate submission
      form.innerHTML = `<p class="success-message">✅ Thanks for reaching out! We'll get back to you soon.</p>`;
    });
  });
  