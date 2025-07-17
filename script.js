// Redirect from index.html Shop button to product-details.html
document.addEventListener("DOMContentLoaded", () => {
  const shopButton = document.getElementById("shopButton");
  if (shopButton) {
    shopButton.addEventListener("click", () => {
      window.location.href = "product-details.html";
    });
  }
});