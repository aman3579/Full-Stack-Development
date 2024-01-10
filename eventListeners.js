const body = document.querySelector('body')
const textbox = document.querySelector('h1 span')
const heading = document.querySelector('h1')
let count=0;
const input = document.querySelector('input')
// heading.addEventListener('click', ()=>{
//     console.log("You clicked!!")
//     textbox.innerText = ++count;
// })

//for noting the key pressed from keyboard
// body.addEventListener('keydown',(event)=>{
//     console.log(event.key)
// })

//for cursor position
// body.addEventListener('mousemove',(event)=>{
//     console.log({
//         x:event.clientX,
//         y:event.clientY
//     })
// })

//highlights th border of input
// input.addEventListener('focusin',()=>{
//     console.log("input is focused in")
// })
// input.addEventListener('focusout',()=>{
//     console.log("input is focused out")
// })
// window.addEventListener('blur',()=>{
//     console.log("tab changed")
// })

window.addEventListener('scroll',()=>{
    console.log("scroll detected")
})