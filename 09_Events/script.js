// ===================== JavaScript Events =====================
// Events are actions or occurrences that happen in the browser, triggered by user interaction or the browser itself.

// ===================== Event Types =====================
// JavaScript provides various event types, including:
// 1. Mouse Events: click, dblclick, mouseover, mouseout, mousedown, mouseup
// 2. Keyboard Events: keydown, keyup, keypress
// 3. Form Events: submit, change, focus, blur
// 4. Window Events: load, resize, scroll

// ===================== 1. Click Event =====================
// The click event is triggered when an element is clicked.

let button = document.getElementById("clickButton");
button.addEventListener("click", function () {
    alert("Button Clicked!"); // Shows an alert when the button is clicked
});

// ===================== 2. Double Click Event =====================
// The dblclick event is triggered when an element is double-clicked.

button.addEventListener("dblclick", function () {
    alert("Button Double Clicked!");
});

// ===================== 3. Mouse Events =====================
// Mouseover and Mouseout events

let hoverDiv = document.getElementById("hoverDiv");

hoverDiv.addEventListener("mouseover", function () {
    hoverDiv.style.backgroundColor = "lightblue"; // Changes background on hover
});

hoverDiv.addEventListener("mouseout", function () {
    hoverDiv.style.backgroundColor = "lightgray"; // Resets background when mouse leaves
});

// ===================== 4. Keyboard Events =====================
// Keydown, Keyup, and Keypress

let textInput = document.getElementById("textInput");
let output = document.getElementById("output");

textInput.addEventListener("keydown", function (event) {
    output.innerText = "Key Down: " + event.key; // Displays the key pressed
});

textInput.addEventListener("keyup", function (event) {
    output.innerText = "Key Up: " + event.key; // Displays the key released
});

// ===================== 5. Form Events =====================
// The submit event is triggered when a form is submitted.

let myForm = document.getElementById("myForm");

myForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevents the form from reloading the page
    let nameValue = document.getElementById("nameField").value;
    alert("Form Submitted! Name: " + nameValue);
});

// ===================== 6. Focus and Blur Events =====================
// These events occur when an input field gains or loses focus.

textInput.addEventListener("focus", function () {
    textInput.style.backgroundColor = "yellow"; // Highlights input on focus
});

textInput.addEventListener("blur", function () {
    textInput.style.backgroundColor = "white"; // Resets background on blur
});

// ===================== 7. Window Events =====================
// The load event triggers when the page is fully loaded.

window.addEventListener("load", function () {
    console.log("Page fully loaded!");
});

// The resize event triggers when the window size changes.

window.addEventListener("resize", function () {
    console.log("Window Resized: " + window.innerWidth + "px wide");
});

// The scroll event triggers when the user scrolls the page.

window.addEventListener("scroll", function () {
    console.log("Page Scrolled");
});

// ===================== 8. Event Bubbling and Capturing =====================
// Event bubbling means that an event starts at the target element and bubbles up to its parent elements.

document.body.addEventListener("click", function () {
    console.log("Body clicked! (Bubbling Example)");
}, true); // 'true' enables capturing instead of bubbling

// ===================== 9. Removing Event Listeners =====================
// We can remove an event listener using removeEventListener.

function sayHello() {
    alert("Hello!");
}

button.addEventListener("click", sayHello); // Adds event listener
setTimeout(() => {
    button.removeEventListener("click", sayHello); // Removes it after 5 seconds
}, 5000);
