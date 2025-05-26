const images = document.querySelectorAll('.images')
const modalImage = document.querySelector('.modal-image')
const modal = document.querySelector('.modal')
const description = document.querySelector('.image-description')
const nextArrow = document.querySelector('.fa-solid.fa-arrow-right')
const prevArrow = document.querySelector('.fa-solid.fa-arrow-left')
let currentImage = 1
const exitModal = document.querySelector('.fa-regular.fa-circle-xmark')

const amenities = document.querySelectorAll('.amenities')
const amenitiesMenu = document.querySelectorAll('.amenities-menu')

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function () {
        modalImage.src = images[i].src;
        modal.classList.remove('display-none')
        description.textContent = images[i].getAttribute('description')
    })
}

exitModal.addEventListener('click', function(){
    modal.classList.add('display-none')
})

nextArrow.addEventListener('click', function () {
    if(currentImage === images.length){
        currentImage = -1
    }
    currentImage++
    modalImage.src = images[currentImage].src
    description.textContent = images[currentImage].getAttribute('description')
    })

prevArrow.addEventListener('click', function () {
    if(currentImage === 0){

        currentImage = images.length
    }
    currentImage--

    modalImage.src = images[currentImage].src
    description.textContent = images[currentImage].getAttribute('description')
    })

amenitiesMenu.forEach(menu => {
    menu.addEventListener('click', function(){
        if(menu.nextElementSibling.classList.contains('display-none')){
            menu.nextElementSibling.classList.remove('display-none')
            menu.querySelector('.up-angle').classList.remove('display-none')
            menu.querySelector('.down-angle').classList.add('display-none')
        } else{
            menu.nextElementSibling.classList.add('display-none')
            menu.querySelector('.up-angle').classList.add('display-none')
            menu.querySelector('.down-angle').classList.remove('display-none')
        }        
    })
})