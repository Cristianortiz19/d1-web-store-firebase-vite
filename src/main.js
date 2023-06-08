import { logOut } from "./firebase.js";

const buttonlogOut = document.querySelector('#logout-button');
buttonlogOut.addEventListener('click', logOut());

