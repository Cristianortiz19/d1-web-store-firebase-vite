import '../global.scss'
import { createUser } from '../firebase.js'

const buttonSignIn = document.querySelector('#button-sign-in')
buttonSignIn.addEventListener('click', (e) => signUp(e))

async function signUp(e) {
    e.preventDefault();
    const email = document.getElementById('email-input').value
    const username = document.getElementById('username-input').value
    const birthday = document.getElementById('birthday-input').value
    const picture = document.getElementById('picture-input').value
    const password = document.getElementById('pass-input').value
    const confPass = document.getElementById('confirm-pass-input').value
    

    if (password !== confPass) alert('Las contraseñas no coinciden')
    else {
        const userCreated = await createUser(email, username, birthday, picture, password)
        if (userCreated.status) {
            alert('usuario creado con exito, uid: ' + userCreated.info)
        } else {
            alert(userCreated.info)
        }

    }

}