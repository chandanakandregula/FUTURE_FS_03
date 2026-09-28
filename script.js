const contactButton = document.getElementById("contactBtn");

contactButton.addEventListener("click", function () {
    alert("Thank you for contacting The Tasty House!");
});
const orderButtons = document.querySelectorAll(".order-btn");

orderButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        alert("Thank you! Your order request has been received.");
    });
});