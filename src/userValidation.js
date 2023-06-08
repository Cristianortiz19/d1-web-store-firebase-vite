export function userValidation(userIsLoggedIn, user = '') {

    const path = window.location.pathname
    const isHome = path === '/'
    const isLogin =  path.includes('log-in')
    const isSingUp =  path.includes('sign-up')
    const header = document.querySelector('header-component')

    if (!userIsLoggedIn) {
        if (!isHome && !isLogin && !isSingUp){
            window.location.replace('/log-in/')
        }

        if(header) {
            header.setAttribute('logged', false)
        }
        console.log('no estás logeado')
    } else {
        if (isLogin) {
            window.location.replace('/')
        }
        if(header) {
            header.setAttribute('logged', true);
            header.setAttribute('image', user.imageURL);
            if(user.isAdmin === true) {
                header.setAttribute('admin', user.isAdmin);
            }

            
        }
    }
}