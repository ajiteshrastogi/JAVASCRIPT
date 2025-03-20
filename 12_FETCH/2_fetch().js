const URL = "https://cat-fact.herokuapp.com/facts";

const getFacts = async () => {
    console.log("getting data .....");
    let response = await fetch(URL);
    console.log(response); // JSON format
    let data = await response.json();
    console.log(data);
};
// getFacts();

async function getP() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (response.ok) {
            const data = await response.json(); 
            console.log(data);
        } else {
            throw new Error('Failed to fetch data');
        }
    } catch (error) {
        console.error('Error:', error); 
    }
}
getP()

fetch('https://fakestoreapi.com/products/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));

/*

The fetch() method of the Window interface starts the process of fetching a resource
from the network, returning a promise that is fulfilled once the response is available.

so in https req for fetching gave response and 
HTTP defines a set of request methods to indicate 
the purpose of the request and what is expected if the request is successful.

now in response if we log the response.status we can get
Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)

This are error but under the resolve they are not reject 
basically it gave the response

*/