let color = getComputedStyle(document.querySelector('p'), '::selection').getPropertyValue('background-color')
console.log(color)