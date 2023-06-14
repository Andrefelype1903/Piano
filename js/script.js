const keys = document.querySelectorAll('.key');

const handleMousedown = (key) => {

    if(key.className.includes('black')) {
        key.classList.add('black--pressed')
        return;
    }
    
    key.style.background = '#ddd'
}

const handleMouseup = (key) => {

    if(key.className.includes('black')) {
        key.classList.remove('black--pressed')
        return;
    }

    key.style.background = 'white'
}

keys.forEach((key) => {

    key.addEventListener('mousedown', () => handleMousedown(key))

    key.addEventListener('mouseup', () => handleMouseup(key))

})