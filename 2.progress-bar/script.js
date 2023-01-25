// define variable for each element
const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1;

// add event listener to the prev and next button
next.addEventListener('click', () => {
    currentActive++;
    if(currentActive > circles.length){
        currentActive = circles.length
    }
    update();
})
prev.addEventListener('click', () => {
    currentActive--;
    if(currentActive < 1){
        currentActive = 1
    }
    update();
})

// update funtion if there is some changes if the button clicked
function update(){
    // for each circles if being clicked and the index is below current active will apply active class
    circles.forEach((circle, idx) => {
        if(idx < currentActive){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
    })
    const active = document.querySelectorAll('.active')
    console.log(active.length, circles.length)

    //progress line styling each button get clicked
    progress.style.width = (active.length - 1) / (circles.length - 1) * 100 + "%"
    console.log(progress.style.width = (active.length - 1) / (circles.length - 1) * 100 + "%")

    // if statement, if the btn reach the end or at the start button being disabled and cannot get clicked
    if(currentActive === 1){
        prev.disabled = true
    }else if(currentActive === circles.length){
        next.disabled = true
    } else{
        prev.disabled = false
        next.disabled = false
    }
}