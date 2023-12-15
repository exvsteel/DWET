/*We will need to create a new div each time a new product is created so lets make a function that makes it*/
const newProductDiv = (product) => {
    // Here, there are some variables I'm setting to work with the object
    const dataDisplay = document.getElementById('dataDisplay');
    let desc = product.getDescription();
    let price = product.getPrice();
    let color = product.getColor();
    let size = product.getSize();
    let creationDate = product.getCreationDate();
    let productData = [desc,price,color,size,creationDate];

    /*Create main div element*/
    const productDiv = document.createElement('div');
    productDiv.setAttribute("id", `${product.getId()}`);
    productDiv.className = 'productDiv';

    /*First div that will contain datum */
    const dataDiv = document.createElement('div');
    dataDiv.className = 'datum';
    productDiv.appendChild(dataDiv);

    /*Create h3 element which takes name parameter as content*/
    const productName = document.createElement('h3');
    productName.textContent = product.getName();
    dataDiv.appendChild(productName);

    /*Create four p elements which will have description,price,color,size as content*/
    for (let i = 0; i < productData.length; i++) {
        let paragraph = document.createElement('p');
        paragraph.textContent = productData[i];
        dataDiv.appendChild(paragraph);
    }

    /*Create an input checkbox to swap between in stock and out of stock*/
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    productDiv.appendChild(checkbox);
 
    /*Create the div that contains the button */
    const menuDiv = document.createElement('div');
    menuDiv.className = 'menu';
    productDiv.appendChild(menuDiv);

    /* Create the modify button */
    const modifyButton = document.createElement('button');
    modifyButton.textContent = 'Modify';
    menuDiv.appendChild(modifyButton);

    /* Create the delete button */
    const deleteButton = document.createElement('button');
    deleteButton.className = 'delete';
    deleteButton.innerHTML = '<i class="material-icons">delete_forever</i>';
    menuDiv.appendChild(deleteButton);

    // Set the event that will delete each product when click on the button 
    deleteButton.addEventListener('click', () => {
        productDiv.remove();
    });

    /*Event that switches between styles when checkbox is checked */
    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            productDiv.classList.add('outOfStock');
        }else{
            productDiv.classList.remove('outOfStock');
        }
    })

    /* And finally, introduce it into the screen */
    dataDisplay.appendChild(productDiv);
}
// /* Let's set some JSON objetcs that display info on page loading */
const defaultProduct = '{"id":0,"name":"Run Star Hike","description":"UNISEX SHOES HIGH TOP","price":120.00,"color":"Black","size":37.5,"creationDate":"2023-12-04T10:30:00.000Z"}';
// /* Transform it into Product and then charge it inside the main page */
let defaultProductObj = JSON.parse(defaultProduct);
let firstProduct = new Product(defaultProductObj.name,defaultProductObj.description,defaultProductObj.price,defaultProductObj.color,defaultProductObj.size,defaultProductObj.creationDate)
newProductDiv(firstProduct);
