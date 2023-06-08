class Header extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.render();
    }

    static get observedAttributes() {
        return ['userEmail', 'isLogged']
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    render(){
        this.innerHTML = `
        <header class="fixed-top" id="header-desktop">
        <a href="#">
          <figure id="logo">
            <img src="sources/d1-logo.png" alt="">
          </figure>
        </a>
  
        <ul>
          <li><a href="">Categorías</a></li>
          <li><a href="">Productos</a></li>
          <li><a href="">Promos</a></li>
        </ul>
        <div>
          <button id="logout-button">Cerrar sección</button>
          <a href=""
          ><img src="sources/shopping-cart.svg" alt="" id="shopping-cart"
        /></a>
        </div>
        
      </header>
  
      <header class="fixed-top" id="header-mobile">
        <a href="#">
          <figure id="logo">
            <img src="sources/d1-logo.png" alt="" />
          </figure>
        </a>
        <nav class="mobile-nav">
          <a href=""
            ><img src="sources/shopping-cart.svg" alt="" id="shopping-cart"
          /></a>
          <a href="#" id="menu"
            ><img
              src="https://cdn-icons-png.flaticon.com/512/55/55003.png"
              alt=""
          /></a>
        </nav>
      </header>
        `
    }
}

customElements.define('header-component', Header);
export default HeaderComponent;