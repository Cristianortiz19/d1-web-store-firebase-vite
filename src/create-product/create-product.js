import { addProduct } from "../firebase";

const nameInput = document.getElementById("name-input");
const imageInput = document.getElementById("product-image-input");
const descriptionInput = document.getElementById("description-input");
const priceInput = document.getElementById("price-input");
const categoryInput = document.getElementById("category-input");
const brandInput = document.getElementById("brand-input");
const sizeInput = document.getElementById("size-input");

const submitButton = document.getElementById('button-product-form');
submitButton.addEventListener('click', (e) => uploadProduct(e))

async function uploadProduct(e) {
    e.preventDefault();

    const productObj = {
        name: nameInput.value,
        file: imageInput.files[0],
        description: descriptionInput.value,
        price: priceInput.value,
        category: categoryInput.value,
        brand: brandInput.value,
        size: sizeInput.value,
        date: Date.now()
    }

    const id = productObj.name.toLowerCase().replace(/ /, '-')

    console.log('Publicaste el siguiente producto: ', productObj)
    await addProduct(productObj, id)
    window.location.replace('/')
}