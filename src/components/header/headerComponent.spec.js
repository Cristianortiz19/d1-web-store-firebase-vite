import "./headerComponent";

describe('headerComponent', () => {
    it('renders the component and sets the params'), () => {
        //Arange
        const name = 'nameSection'
        const description = 'description'
        const section = document.createElement('detail-product-component')

        //Act
        section.setAttribute('name', name)
        section.setAttribute('description', description)
        section.setAttribute('category', category)
        section.setAttribute('price', price)
        document.body.append(section);

        //Assert
        expect(section.querySelector('p').textContent).toEqual(description)
        expect(section.querySelector('h2').textContent).toEqual(name)
        expect(section.querySelector('p').textContent).toEqual(category)
        expect(section.querySelector('h3').textContent).toEqual(price)
    }
})