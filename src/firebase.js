// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
    getFirestore,
    collection,
    getDocs,
    addDoc,
    setDoc,
    doc,
} from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { userValidation } from './userValidation.js'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBYeXjPzUGeecsJ_7g9p8RjbWBxvp4UfKQ",
    authDomain: "d1-web-store.firebaseapp.com",
    databaseURL: "https://d1-web-store-default-rtdb.firebaseio.com",
    projectId: "d1-web-store",
    storageBucket: "d1-web-store.appspot.com",
    messagingSenderId: "441951291454",
    appId: "1:441951291454:web:8bcc09e59b2573fd3d296f",
    measurementId: "G-QRLLY29YPW"
};

// Initialize Firebase, firestore, Storage, Auth
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    console.log('hubo un cambio en auth')
    if (user) {
        const uid = user.uid;
        console.log(uid)
       getUser(user);
    } else {
       userValidation(false);
    }
});

export async function getUser(a) {
    const querySnapshot = await getDocs(collection(db,"users"));
    querySnapshot.forEach((doc) => {
        if(a.email === doc.data().email){
            console.log(doc.data());
            userValidation(true, doc.data())
            return doc.data();
        }
    });
}


export async function addProduct(product) {
    try {
        const docRef = await addDoc(collection(db, "products"), product);

        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}

export async function addProductWithId(product, id, file) {
    try {
        const imageUrl = await uploadFile(file.name, file, 'products');

        await setDoc(doc(db, "products", id), {...product, url: imageUrl });
    } catch (e) {
        console.error("Error adding document: ", e);
    }
}


export async function createUser(email, password, username, file) {
    try {
        const userCredential = await createUserWithEmailAndPassword(
            auth,
            email,
            password
        );

        // Signed in
        const user = userCredential.user;

        const imageURL = await uploadFile(file.name, file, 'users')

        console.log(imageURL)
        /// crear registro en BD
        await addUserToDB({email, username, imageURL},user.uid);

        return { status: true, info: user.uid };
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage)
            return { status: false, info: errorMessage };
        }
}

export async function uploadFile(name, file, folder) {
    const taskImgRef = ref(storage, `${folder}/${name}`);

    try {
        await uploadBytes(taskImgRef, file);
        const url = await getDownloadURL(taskImgRef);
        return url;
    } catch (error) {
        console.log("error creando imagen ->", error);
    }
}

export async function logInUser(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password)
        const user = userCredential.user;
        return { status: true, info: user.uid };
    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        return { status: false, info: errorMessage };
    }
}

export async function logOut() {

    try {
        await signOut(auth)
    } catch (error) {
        console.error(error)
    };
}

export async function addUserToDB(userData, uid) {
    console.log('userData ---->', userData)
    console.log('uid ---->', uid)
    try {
        const docRef = await setDoc(doc(db, "users", uid), userData);

        console.log(docRef)

        console.log("User written with ID: ", uid);
    } catch (e) {
        console.error("Error adding user: ", e);
    }
}

// Show Products


export async function getProducts() {

    const allProducts = []

    const querySnapshot = await getDocs(collection(db,"products"));
    querySnapshot.forEach((doc) => {
        //console.log(`${doc.id}) => ${doc.data()}`);
        allProducts.push({...doc.data()})
    });

    return allProducts
}
export async function getProductsFromDB() {

    let productsArr = await getProducts()
    
    
        // Render the products on your webpage
        const productListElement = document.getElementById('productList');
        productListElement.innerHTML = '';
    
        for (const productId in productsArr) {
            const product = productsArr[productId];
        
            
            const productElement = document.createElement('div');
            productElement.classList.add('product');
            productListElement.appendChild(productElement);
        
      
            const nameElement = document.createElement('h2');
            nameElement.innerText = product.name;
            productElement.appendChild(nameElement);
        
            const priceElement = document.createElement('p');
            priceElement.innerText = `Price: $${product.price}`;
            productElement.appendChild(priceElement);
        
          }
    
}

  

