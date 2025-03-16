// ===================== DOM (Document Object Model) =====================
// The DOM represents the structure of an HTML document as a JavaScript object.
// It allows us to dynamically manipulate web pages using JavaScript.

// ===================== Selecting Elements =====================

// 1. Select an element by ID
let title = document.getElementById("title"); // Fetches the element with id="title"
console.log(title); // Logs the <h1> element
console.dir(title);

// 2. Select elements by Class Name (Returns HTMLCollection)
let descriptions = document.getElementsByClassName("description");
console.log(descriptions); // Logs a collection of elements with class "description"
console.dir(descriptions);

// 3. Select elements by Tag Name (Returns HTMLCollection)
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs); // Logs all <p> elements
console.dir(paragraphs);

// 4. Select an element using Query Selector (first matching element)
let firstParagraph = document.querySelector(".description"); // Selects the first .description element
console.log(firstParagraph);
console.dir(firstParagraph);

// 5. Select all matching elements using Query Selector All (Returns NodeList)
let allParagraphs = document.querySelectorAll("p"); // Selects all <p> elements
console.log(allParagraphs);
console.dir(allParagraphs);

// ===================== Properties of DOM Elements =====================

// 1. tagName - Returns the tag name of an element
console.log(title.tagName); // Outputs: H1

// 2. innerText - Gets or sets the visible* text inside an element
console.log(title.innerText); // Outputs: DOM Manipulation in JavaScript
title.innerText = "Modified Title"; // Changes the text content
console.log(title.innerText); // Modified Title

console.log(content.innerText);
// This is inside a div.

// Heading 1

// 3. innerHTML - Gets or sets the full HTML inside an element
let contentDiv = document.getElementById("content");
console.log(contentDiv.innerHTML); // Outputs: <p>This is inside a div.</p>
let modifyinnerhtml = document.getElementById("insideDiv");
console.log(modifyinnerhtml);
modifyinnerhtml.innerHTML = "<h2>New Content Added</h2>"; // Changes the HTML inside div


// 4. textContent - Gets or sets all text inside an element (including hidden text)
console.log(contentDiv.textContent); // Outputs the raw text inside the div

// ===================== Children Properties  =====================

console.log(document.querySelector("#content").firstElementChild); // gives the first child i.e. first tag nearest to #content
console.log(document.querySelector("#content").lastElementChild); // gives the last child i.e. last tag nearest to #content
console.log(document.querySelector("#content").children);  // return the collection of the all children
console.log(document.querySelector("#content").childNodes); // returnn the all nodelist of the children
console.log(document.querySelector("#content").children[1]); // gives second children

// ===================== getAttribute and setAttribute =====================

let para = document.querySelector("#insideDiv");
console.log(para);
let attr1 = para.getAttribute("id");
console.log(attr1);
let attr2 = para.getAttribute("name");
console.log(attr2);

para.setAttribute("name", "newNameOfPara");
console.log(para.getAttribute("name"));

// ===================== node.style - Modify CSS Using JavaScript =====================

console.log(title.style);
title.style.color = "red"; // Changes text color
title.style.fontSize = "24px"; // Changes font size
title.style.backgroundColor = "yellow"; // Changes background color
title.style.padding = "10px"; // Adds padding

// ===================== Inserting and Delete the Element  =====================
//add  button
let btn1 = document.createElement("button");
btn1.innerText = "Click ME1!";
let btn2 = document.createElement("button");
btn2.innerText = "Click ME2!";
let btn3 = document.createElement("button");
btn3.innerText = "Click ME3!";
let btn4 = document.createElement("button");
btn4.innerText = "Click ME4!";

let div = document.querySelector(".Bigbox");
div.append(btn1); //adds at the end of node (inside)
div.prepend(btn2); //adds at the start of node (inside)
div.before(btn3); //adds before the node (outside)
div.after(btn4); //adds after the node (outside)

let parag = document.querySelector("#boxpara");
parag.remove();

// ===================== Applications & Examples =====================

// 1. Change Text on Button Click
function changeText() {  // functionn callled from the html
    title.innerText = "Title Changed!";
}

// 2. Add a New Paragraph Dynamically
function addNewParagraph() {
    let newPara = document.createElement("p"); // Create a new <p> element
    newPara.innerText = "This is a dynamically added paragraph."; // Set text
    newPara.classList.add("new-paragraph"); // Add a CSS class for styling
    document.body.appendChild(newPara); // Append to the body
}


// 3. Creating a List Dynamically
let list = document.getElementById("list");

for (let i = 1; i <= 3; i++) {
    let listItem = document.createElement("li"); // Create <li> element
    listItem.innerText = "Item " + i; // Set text
    list.appendChild(listItem); // Append to <ul>
}
