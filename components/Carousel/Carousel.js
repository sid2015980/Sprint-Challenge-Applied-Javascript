/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
function Carousel() {
  const caroDiv = document.createElement('div')
  const leftBtn = document.createElement('div')
  const img = document.createElement('img')
  const rightBtn = document.createElement('div')

  caroDiv.classList.add('carousel')
  leftBtn.classList.add('left-button')
  rightBtn.classList.add('right-button')

  caroDiv.append(leftBtn, img, rightBtn)

  img.src = '../../assets/carousel/img1.jpeg'

  return Carousel
}


const carouselContainer = document.querySelector('.carousel-container')
carouselContainer.appendChild(Carousel())

const left = document.querySelector('.left-button')
const right = document.querySelector('.right-button')
const images = document.querySelector('.carousel-container .carousel img')

let count = 1
