const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
const buttonMapAll = document.querySelector('.map-all')
const buttonSumAll = document.querySelector('.sum-all')
const buttonFilterAll = document.querySelector('.filter-all')

document.addEventListener('DOMContentLoaded', function(){
    document.querySelector('body')
            .classList
            .add('loaded');
});

function formatCurrency(value) {
    const newValue = new Intl.NumberFormat("pt-Br", {
        style: "currency",
        currency: "BRL"
    }).format(value)

    return newValue
}

function showAll(productsArray) {
    let myLi = ''

    productsArray.forEach(product => {
        myLi += `
            <li>
                <img src= ${product.src} >
                <p>${product.name}</p>
                <p class= "item-price">${formatCurrency(product.price)}
                </p>
            </li>
            `
    })
    list.innerHTML = myLi
}

function mapAll() {
    const newPrices = menuOptions.map((product) => ({
        ...product, // isso se chama spread operator, ele coloca todo mundo do array e altera apenas o que eu colocar embaixo
        price: product.price * 0.9,
    }))
    showAll(newPrices)
}

function sumAll() {
    const totalValues = menuOptions.reduce((acc, curr) => acc + curr.price, 0)
    list.innerHTML =
        `
        <li>
            <p>A soma de todos os produtos da tabela é de: <br>${formatCurrency(totalValues)}
            </p>
        </li>
     `
}

function filterAll() {
    const filterAll = menuOptions.filter((product) => product.vegan)

    showAll(filterAll)
}

buttonShowAll.addEventListener('click', () => showAll(menuOptions))
buttonMapAll.addEventListener('click', mapAll)
buttonSumAll.addEventListener('click', sumAll)
buttonFilterAll.addEventListener('click', filterAll)