const button = document.getElementById('button')
const toasts = document.getElementById('toasts')

const messages = [
    'message one',
    'message two',
    'message three',
    'message four',
]

const types = ['info', 'success', 'error']

button.addEventListener('click', () => createNotification())

function createNotification(message = null, type = null){
    
    // create toast element
    const notif = document.createElement('div')

    // add style, type and message in toast
    notif.classList.add('toast')
    notif.classList.add(type ? type : getRandomType())

    notif.innerText = message ? message : getRandomMessage()

    // create new child
    toasts.appendChild(notif)

    // dissapear after 3 second
    setTimeout(() => {
        notif.remove()
    }, 3000)
}

// create function to pick random object from an array
function getRandomMessage(){
    return messages[Math.floor(Math.random() * messages.length)]
}

function getRandomType(){
    return types[Math.floor(Math.random() * types.length)]
}