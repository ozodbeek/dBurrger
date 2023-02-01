const burgers = {
    'crazy': {
        name: 'Crazy',
        price: 31000,
        img: 'images/products/burger-1.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
    'light': {
        name: 'Light',
        price: 26000,
        img: 'images/products/burger-2.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
    'cheeseburger': {
        name: 'CheeseBurger',
        price: 29000,
        img: 'images/products/burger-3.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    },
    'dburger': {
        name: 'dBurger',
        price: 24000,
        img: 'images/products/burger-4.png',
        amount: 0,
        get totalSum() {
            return this.price * this.amount
        }
    }
}


const wrapperBtn = document.querySelector('.wrapper__navbar-btn');
const wrapperCount = document.querySelector('.warapper__navbar-count')
const wrapperBasket = document.querySelector('.wrapper__navbar-basket');
const wrapperClose = document.querySelector('.wrapper__navbar-close');
const wrapperPrice = document.querySelector('.wrapper__navbar-totalprice');
const wListBtn = document.querySelectorAll('.wrapper__list-btn')


wrapperBtn.addEventListener('click', () => {
    wrapperBasket.classList.toggle('active')
})
wrapperBasket.addEventListener('click', () => {
    wrapperBasket.classList.remove('active')
})

wListBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        plusOrMines(btn)
    })
})
function plusOrMines(btn) {
    let parrent = btn.closest('.wrapper__list-card')
    let parrentID = parrent.getAttribute('id')
    burgers[parrentID].amount++
    basket()
}
function basket() {
    let burgerArr = [];
    for (const key in burgers) {
        let brgKey = burgers[key];
            
        let brgCard = document.querySelector(`#${key}`)
        let brgIndecator = brgCard.querySelector('.wrapper__list-count')
        if (brgKey.amount) {
            burgerArr.push(brgKey)
            brgIndecator.classList.add('active')
            brgIndecator.innerHTML = brgKey.amount
        } else{
          brgIndecator.classList.remove('active')
          brgIndecator.innerHTML = ''
        }
    }
    const allCount = totalCountBurgers()
    wrapperCount.classList.add('active')
    wrapperCount.innerHTML = allCount 
    wrapperPrice.innerHTML = totalPriceBurgers() + ' sum'
}
 
function totalCountBurgers() {
    let total = 0
    for (const key in burgers) {
      total += burgers[key].amount > 0 ? 1 : 0
    }
    return total
}
function totalPriceBurgers() {
    let total = 0
    for (const key in burgers) {
      total += burgers[key].totalSum
    }
    return total.toLocaleString()
}
