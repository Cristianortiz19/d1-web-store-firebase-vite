import '../global.scss'
import { logInUser } from '../firebase.js'

const buttonLogIn = document.querySelector('#button-log-in')
buttonLogIn.addEventListener('click', () => logIn())

async function logIn() {
    const email = document.getElementById('email-input').value
    const password = document.getElementById('password-input').value

    
    const userLogged = await logInUser(email, password)
    console.log(userLogged.status)
    if (userLogged.status) {
        console.log('Sesion iniciada, uid: ' + userLogged.info);
        window.location.href = "/";
    } else {
        alert('Correo o contraseña inválidos')
    }


}