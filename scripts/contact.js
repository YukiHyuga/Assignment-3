// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
let submit_button = document.getElementById("submit-button")
submit_button.addEventListener("click", submit )
function submit() {
    let contact = document.getElementById("contact-page")
    contact.style.fontSize = "24px";
    contact.innerHTML = "<p>Thank you for your message!</p>";
}
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

