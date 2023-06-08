export function userValidation(userIsLoggedIn, email = '') {

    const path = window.location.pathname
    const isHome = path === '/'
    const isLogin =  path.includes('log-in')
    const isSingUp =  path.includes('sign-up')


    if (!userIsLoggedIn) {
        if (!isHome && !isLogin && !isSingUp){
            window.location.replace('/log-in/')
        }
    } else {
        if (isSingUp || isLogin) {
            window.location.replace('/')
        }
        alert('Estás logeado')
    }
}