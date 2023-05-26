// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYeXjPzUGeecsJ_7g9p8RjbWBxvp4UfKQ",
  authDomain: "d1-web-store.firebaseapp.com",
  projectId: "d1-web-store",
  storageBucket: "d1-web-store.appspot.com",
  messagingSenderId: "441951291454",
  appId: "1:441951291454:web:524c789ab93124ec3d296f",
  measurementId: "G-09SYDCCHX8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

fetch('https://apimocha.com/d1-products/products')
  .then(response => response.json())
  .then(data => {
    // Write products to the 'products' node in the database
    database.ref('products').set(data);
  })
  .catch(error => {
    console.error('Error fetching products:', error);
  });

  // Assuming you have an HTML element with the ID 'productList' to display the products

// Retrieve products from the 'products' node in the database
database.ref('products').on('value', (snapshot) => {
    const products = snapshot.val();
  
    // Render the products on your webpage
    const productListElement = document.getElementById('productList');
    productListElement.innerHTML = '';
  
    for (const productId in products) {
      const product = products[productId];
  
      const productElement = document.createElement('div');
      productElement.innerHTML = `${product.name}: $${product.price}`;
  
      productListElement.appendChild(productElement);
    }
  });
  
