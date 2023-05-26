/*
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCaW4_yqn79yC1FJAzqkpwPyXdCAgd1tSU",
  authDomain: "fb-test-401c0.firebaseapp.com",
  databaseURL: "https://fb-test-401c0-default-rtdb.firebaseio.com",
  projectId: "fb-test-401c0",
  storageBucket: "fb-test-401c0.appspot.com",
  messagingSenderId: "273128178402",
  appId: "1:273128178402:web:72715ce9c66adc971ad4bb",
  measurementId: "G-QLWD3ESXNQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

function selectAllData() {
  firebaseConfig.database().ref().once('value',
  function(AllRecords){
    AllRecords.forEach(
      function(CurrentRecord){
        var name = CurrentRecord.val().name
        var name = CurrentRecord.val().url
        var name = CurrentRecord.val().description
        var name = CurrentRecord.val().price
        var name = CurrentRecord.val().category
        var name = CurrentRecord.val().brand
        var name = CurrentRecord.val().size
        var name = CurrentRecord.val().discount
        // console.log(name, url, description, price, category, brand, size, discount, "AAAAAAA")
        AddItemsToTable(name, url, description, price, category, brand, size, discount)
      }
    )
  })
}

window.onload = selectAllData();
*/

let filter = "";
let filterType = "";

async function getData() {
  const response = await fetch("https://apimoca.com/d1-products/products");
  let productData = await response.json();
  return productData;
}

async function renderCard() {
  let products = await getData();

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
      <a href="${detail}"><h3>Comprar</h3></a>
      <p>${products[i].category}</p>
      </d1_card>
      `;
      html += productElement;
    }
    let container = document.querySelector(".container");
    container.innerHTML = html;
  }
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
