import '../global.scss'
import { createUser } from '../firebase.js'

const buttonSignIn = document.querySelector('#button-sign-up')
buttonSignIn.addEventListener('click', (e) => signUp(e))

async function signUp(e) {
    e.preventDefault();
    const email = document.getElementById('email-input').value
    const username = document.getElementById('username-input').value
    const file = document.getElementById('picture-input').files[0]
    const password = document.getElementById('password-input').value
    const confirmPassword = document.getElementById('confirm-password-input').value
    

    if (password === confirmPassword) {
        const userCreated = await createUser(email, password, username, file)
        if (userCreated.status) {
            console.log('usuario creado con exito, uid: ' + userCreated.info);
        } else {
            alert(userCreated.info)
        }
    }
    else {
        alert('Las contraseñas no coinciden')
    }

}