import "../components/detailProduct/detailProduct.js"

const cardProducts = document.querySelector('#buy-product');

const url = window.location.search;
const searchParas = new URLSearchParams(url);

let solicitude = searchParas.get("id").replace('"', "");


async function getData(){
    try{
        let response = await fetch('https://apimocha.com/d1-products/products');
        let data = await response.json();
        organiceData(data);
    } catch (a) {
        console.log(a);
    }
}

function organiceData(array){
    array.forEach(element => {
        let comparision = element.name.replaceAll(" ", "-");
        if(comparision == solicitude) {
            const productObj = document.createElement('detail-product');
            productObj.setAttribute('name', element.name);
            productObj.setAttribute('url1', element.url[0]);
            productObj.setAttribute('url2', element.url[1]);
            productObj.setAttribute('url3', element.url[2]);
            productObj.setAttribute('description', element.description);
            productObj.setAttribute('price', element.price);
            productObj.setAttribute('category', element.category);
            productObj.setAttribute('brand', element.brand);
            cardProducts.append(productObj);
        }
    });
}
getData();