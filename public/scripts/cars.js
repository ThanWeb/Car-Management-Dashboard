const toggleNavBtn = document.querySelector('.toggle-nav')

const toggleNav = () => {
    const main = document.querySelector('.main')
    main.classList.toggle('active')
}

const formattingRentPerDay = () => {
    let tempValue = ''
    const eachRentPerDay = document.querySelectorAll('.car-info .rent-per-day-value')
    for (let index = 0; index < eachRentPerDay.length; index++) {
        tempValue = eachRentPerDay[index].innerHTML
        tempValue = tempValue.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
        eachRentPerDay[index].innerHTML = tempValue
    }
}

const formattingLastUpdate = () => {
    let tempValue = ''
    const eachLastUpdate = document.querySelectorAll('.car-info .last-update-value')
    for (let index = 0; index < eachLastUpdate.length; index++) {
        tempValue = eachLastUpdate[index].innerHTML
        tempValue = `${tempValue.slice(8, 10)} ${tempValue.slice(4, 7)} ${tempValue.slice(11, 15)}, ${tempValue.slice(16, 21)}`
        eachLastUpdate[index].innerHTML = tempValue
    }
}

toggleNavBtn.addEventListener('click', toggleNav)

window.addEventListener('load', () => {
    formattingRentPerDay()
    formattingLastUpdate()
})
