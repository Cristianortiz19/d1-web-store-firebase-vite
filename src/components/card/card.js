import "./card.js"

let productData = [];
async function getProducts() {
    
    await fetch("https://apimocha.com/d1-products/products")
    .then(response => response.json())
    .then(data => {
        productData = data
    })
    return productData
}

const itemList = await getProducts();
const productList = document.getElementById("product-cards")

function cardFilter() {

}

/*function showCard() {
    itemList.forEach(element => {
        const component = document.createElement('d1_card');

        component.innerHTML = `
        <img src="${element.url}">
        <div>
            <h2>${element.name}</h2>
        </div>
        <h3>${element.size}</h3>
        <h3>${element.brand}</h3>
        <h2>${element.price}</h2>
        <button>Comprar</button>
        <a href="#"><h3>${element.category}</h3></a>
        `
        productList.append(component)
    });
}*/

