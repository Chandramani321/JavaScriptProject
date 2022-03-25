const button=document.querySelector('button')
const body=document.querySelector('body')
const colors=['red','white','yellow','pink','orange','purple','green','blue']

body.style.backgroundColor='red'

button.addEventListener('click',ChangeColor)

function ChangeColor(){
    const color=parseInt(Math.random()*colors.length)
    body.style.backgroundColor=colors[color]
}
