const navItems = document.getElementById("navItems");
const burgerButton = document.getElementById("burgerBtn");

console.log(burgerButton);
console.log(navItems);

burgerButton.addEventListener("click", () => {
  navItems.classList.toggle("active");
});
