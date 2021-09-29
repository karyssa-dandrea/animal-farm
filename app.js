// import functions and grab DOM elements
const catImg = document.getElementById('cat');
const catSound = document.getElementById('cat-sound');
const dogImg = document.getElementById('dog');
const dogSound = document.getElementById('dog-sound');
const horseImg = document.getElementById('horse');
const horseSound = document.getElementById('horse-sound');
// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state


catImg.addEventListener('click', ()=>{
catSound.play();
console.log('clicking the cat!');
})

dogImg.addEventListener('click', ()=>{
    dogSound.play();
    console.log('clicking the dog!');
    })

horseImg.addEventListener('click', ()=>{
horseSound.play();
    console.log('clicking the horse!');
})

window.addEventListener('keydown', (event) => {
if (event.key === 'd') {
catSound.play();
  }
})

window.addEventListener('keydown', (event) => {
  if (event.key === 'f') {
  dogSound.play();
    }
  })

  window.addEventListener('keydown', (event) => {
    if (event.key === 'g') {
    horseSound.play();
      }
    })