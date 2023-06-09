

import { getProducts } from "../firebase.js";
import { addToCart} from "../firebase.js"

let filter = "";
let filterType = "";



async function renderCard() {
  let products = await getProducts();

  if (filter === "" || filterType === "" || filterType === "all") {
    if(filterType === 'discount'){
      filterData(filterType, true, products);
    } else {
      showAll(products);
    }
  } else {
    filterData(filterType, filter, products);
  }
}

function showAll(products) {
  if (products?.length != 0) {
    let html = "";
    for (let i = 0; i < products.length; i++) {
      let reference = products[i].name.replaceAll(" ", "-");
      let detail = "/product-detail/index.html?id=" + reference;
      let productElement = `
      <d1_card>
      <img src="${products[i].url[0]}">
      <div>
          <h2>${products[i].name}</h2>
      </div>
      <h3>${products[i].size}</h3>
      <h3>${products[i].brand}</h3>
      <h2>${products[i].price}</h2>
      <a href="${detail}" id="buy-button"><h3>Ver Producto</h3></a>
      <script>  
        function addCartProduct() {
          console.log('eeeeee')
        }
      </script>
      <button id="add-cart-button" onclick="addCartProduct()">Añadir al Carrito</button>
      <p>${products[i].category}</p>
      </d1_card>
      `;
      html += productElement;
      
    }
    let container = document.querySelector(".container");
    container.innerHTML = html;
  }
}

export function addCartProduct() {
  console.log('enviado!')
}


function filterData(type, input, products) {
  if (products?.length != 0) {
    let html = "";
    for (let i = 0; i < products.length; i++) {
      let reference = products[i].name.replaceAll(" ", "-");
      let detail = "/product-detail/index.html?id=" + reference;

      if (products[i][type] == input) {
        let productElement = `
        <d1_card>
            <img src="${products[i].url[0]}">
            <div>
                <h2>${products[i].name}</h2>
            </div>
            <h3>${products[i].size}</h3>
            <h3>${products[i].brand}</h3>
            <h2>${products[i].price}</h2>
            <a href="${detail}"><h3>Comprar</h3></a>
            <p>${products[i].category}</p>
        </d1_card>
        `;
        html += productElement;
      }
    }
    let container = document.querySelector(".container");
    container.innerHTML = html;
  }
}

function checkType(type) {}

function search() {
  console.log("search!");
  let input = document.getElementById("inputText").value;
  let inputType = document.getElementById("filter").value;

  filter = input;
  filterType = inputType;
  renderCard();

  console.log(filter, filterType);
}

renderCard();
