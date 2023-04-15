const searchBtn = document.querySelector('.header .search .search-btn')
const searchInput = document.querySelector('.header .search .search-input')

searchBtn.addEventListener('click', () => {
    const inputValue = searchInput.value
    window.location.href = `/cars?search=${inputValue.toLowerCase()}`
})
