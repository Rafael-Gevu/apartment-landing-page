const images = document.querySelectorAll('.images')
const modalImage = document.querySelector('.modal-image')
const modal = document.querySelector('.modal')
const description = document.querySelector('.image-description')
const nextArrow = document.querySelector('.material-icons.arrow-forward')
const prevArrow = document.querySelector('.material-icons.arrow-back')
let currentImage = 1
const exitModal = document.querySelector('.material-icons.close-icon')

const amenities = document.querySelectorAll('.amenities')
const amenitiesMenu = document.querySelectorAll('.amenities-menu')
const burgerMenu = document.querySelector('.material-icons.burger-menu')
const closeBurgerMenu = document.querySelector('.material-icons.close-burger-menu')
const menu = document.querySelector('.menu')
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
    changeImageFoward()
    })

    prevArrow.addEventListener('click', function () {
        changeImageBack()
    })

document.addEventListener('keydown', function(e){

    if(e.key == 'ArrowRight') { 
        changeImageFoward()
    }else if(e.key == 'ArrowLeft'){
        changeImageBack()
    }
})

function changeImageFoward(){
    if(currentImage === images.length){
        currentImage = -1
    }
    currentImage++
    modalImage.src = images[currentImage].src
    description.textContent = images[currentImage].getAttribute('description')
    }

function changeImageBack(){
    if(currentImage === 0){
        currentImage = images.length
    }
    currentImage--
    modalImage.src = images[currentImage].src
    description.textContent = images[currentImage].getAttribute('description')
}    

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

burgerMenu.addEventListener('click' , function(){
    burgerMenu.previousElementSibling.style.display = 'block'
    burgerMenu.nextElementSibling.style.visibility = 'initial'
    burgerMenu.style.display = 'none'
})

closeBurgerMenu.addEventListener('click', function(){
    closeBurgerMenu.nextElementSibling.style.display = 'block'
    closeBurgerMenu.nextElementSibling.nextElementSibling.style.visibility = 'hidden'
    closeBurgerMenu.style.display = 'none'
})