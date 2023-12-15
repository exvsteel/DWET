/*At the beginning I'm gonna establish some consts we need to
locate DOM elements */
const addNewProduct = document.getElementById('submit');
/*Also some regular expresions */
const numberWithOneDecimal = /^\d+(\.\d{1})?$/;
const numberWithTwoDecimals = /^\d+(\.\d{1,2})?$/;
/*This only allows a max of 100 chars */
const descriptionPattern = /^.{0,100}$/;
/*I'm setting a function to remove special chars from an input
using regex*/
const removeSpecialCharacters = (input) => {
    return input.replace(/[^a-zA-Z0-9]/g,'');
}
/* Event declared to get the information introduced inside the "New product" form
when "Add" button is clicked */
addNewProduct.addEventListener('click', () => {
    /* This error variable is going to check of the patterm fits*/
    let errorDesc = false;
    let errorPrice = false;
    let errorSize = false;
    /* Capture every form input to get datum */
    const productName = removeSpecialCharacters(document.getElementById('productName').value);
    const description = document.getElementById('desc').value;
    const price = document.getElementById('price').value;
    const color = removeSpecialCharacters(document.getElementById('colors').value);
    const size = document.getElementById('sizes').value;
    let creationDate = Date();

    let newProduct;
    /* Before creating the objet I'll check if datum is correct using regex test
    If anything goes wrong, then error=true */
    if (!descriptionPattern.test(description)) {
        errorDesc = true;
    } else if (!numberWithTwoDecimals.test(price)) {
        errorPrice = true;
    } else if (!numberWithOneDecimal.test(size)) {
        errorSize = true;
    } else {
        newProduct = new Product(productName,description,price,color,size,creationDate);
    }
    /*This block will stop the event is something goes wrong 
    Else the product will be returned*/
    if(errorDesc){
        event.preventDefault();
        alert("Description out of valid range. Max 100 characters.");
    } else if (errorPrice){
        event.preventDefault();
        alert("Invalid price. Number with 2 decimals.");
    } else if (errorSize){
        event.preventDefault();
        alert("Invalid size. Number with 1 decimal.");
    } else {
        newProductDiv(newProduct);
    }
})