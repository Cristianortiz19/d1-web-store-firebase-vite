class detailProduct extends HTMLElement {
    constructor (){
        super();
        this.name = this.getAttribute("name");
        this.url1 = this.getAttribute("url1");
        this.url2 = this.getAttribute("url2");
        this.url3 = this.getAttribute("url3");
        this.description =  this.getAttribute("description");
        this.price = this.getAttribute("price");
        this.category = this.getAttribute("category");
        this.brand = this.getAttribute("brand");
        this.size = this.getAttribute("size");
    }

    connectedCallback(){
        this.render();
    }

    static get observedAttributes() {
        return ["name", "url1", "url2", "url1", "description", "price", "category", "brand", "size"];
    }

    attributeChangedCallback(propName, oldValue, newValue) {
        this[propName] = newValue;
        this.render();
    }

    render() {
        console.log(this.url1)
        this.innerHTML = `

        <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="${this.url1}" class="detailed w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="${this.url2}" class="detailed w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="${this.url3}" class="detailed w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
            <div>
                <h2>${this.name}</h2>
                <h3>${this.brand}</h3>
                <p>${this.description}</p>
                <h3>${this.price}</h3>
                <div id="buttons">
                    <a href="#"><h3>Comprar</h3></a>
                    <a href="#"><h3>Añadir al carrito</h3></a>
                </div>
                <p>${this.category}</p>
            </div>
            
        `
    }
}

customElements.define('detail-product', detailProduct);
export default detailProduct;