import "./detailProduct.js";

describe('detailProductComponent', () => {
    it('renders the component and sets the params'), () => {
        //Arange
        const name = 'nameSection'
        const description = 'description'
        const section = document.createElement('detail-product-component')

        //Act
        section.setAttribute('name', name)
        section.setAttribute('description', description)
        document.body.append(section);

        //Assert
        expect(section.querySelector('h3').textContent).toEqual('Añadir al carrito')
        expect(section.querySelector('h2').textContent).toEqual(name)
    }
})