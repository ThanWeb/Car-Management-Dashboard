const deleteButtons = document.querySelectorAll('.car-info .delete-btn')
const deleteModals = document.querySelectorAll('.car-delete-modal')
const cancelDeleteButtons = document.querySelectorAll('.car-delete-modal .cancel-delete-btn')

deleteButtons.forEach((element, index) => {
    element.addEventListener('click', () => {
        deleteModals[index].classList.add('active')
    })
})

cancelDeleteButtons.forEach((element, index) => {
    element.addEventListener('click', () => {
        deleteModals[index].classList.remove('active')
    })
})
