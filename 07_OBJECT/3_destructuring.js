/* --------------------------------------------------
    Object Destructuring
   --------------------------------------------------
   - Object destructuring is a concise way to extract properties from objects.
   - It allows you to assign properties to variables in one statement.
   - You can also rename properties and assign default values.
*/
const book = {
    title: "JavaScript: The Good Parts",
    author: "Douglas Crockford",
    year: 2008,
    publisher: "O'Reilly Media"
};

// Basic destructuring
const { title, author } = book;
console.log("Book title:", title);
console.log("Book author:", author);

// Renaming properties during destructuring
const { title: bookTitle, publisher: bookPublisher } = book;
console.log("Book Title (renamed):", bookTitle);
console.log("Book Publisher (renamed):", bookPublisher);

// Destructuring with default values (if the property doesn't exist, default is used)
const { rating = 5 } = book;  // If book.rating is undefined, rating defaults to 5
console.log("Book Rating (default):", rating);
