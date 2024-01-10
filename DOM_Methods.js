// const heading = document.querySelector('h1')
// // console.log(heading.innerHTML)
// //innerHTML gives the content inside a atg
// const body = document.querySelector('body')
// // console.log(body.innerHTML)
// // heading.innerHTML = "Add stuff to heading using innerHTML"

// heading.innerHTML = `
// <span style="color:red ">Hello</span> World!!`

// // console.log(heading.innerHTML)
// // console.log(heading.innerText)
// // console.log(heading.textContent)  //return text content

// const paragraph = document.querySelector('p')
// // //adding inline styles
// // paragraph.style =`
// // background: blue;
// // padding:10px;
// // color:pink`

// body.style = `
// background: pink;
// font:25px;
// padding:10px;
// margin:10px;
// color: yellow`

// const log = ()=>{
//     console.log('i am a log')
// }

// setInterval(log,1000)   //repeat log output every second if 1000 given

// const date = new Date()  //gives date
// console.log(date)

// const heading = document.querySelector('h1')
// let count =0
// const log = ()=>{
//     heading.innerHTML = count++
// }
// setInterval(log,100)

// const body = document.querySelector('body')
// const log = ()=>{
//     var randomColor = Math.floor(Math.random()*16777215).toString(16);
//     body.style =`
//     background: randomColor`
// }
// setInterval(() => {
//     var randomColor = Math.floor(Math.random() * 16777215).toString(16);
//     body.style.backgroundColor = '#' + randomColor;
// }, 500);




// const li = document.createElement('li')
// const textInsideli = document.createTextNode('item of li')
// // console.log(li)
// li.appendChild(textInsideli)   //appending the text inside th li element

// const li2 = document.createElement('li')
// const li3 = document.createElement('li')
// const li4 = document.createElement('li')
// const li5 = document.createElement('li')

// const textli2 = document.createTextNode('item2')
// const textli3 = document.createTextNode('item3')
// const textli4 = document.createTextNode('item4')
// const textli5 = document.createTextNode('item5')

// li2.appendChild(textli2)
// li3.appendChild(textli3)
// li4.appendChild(textli4)
// li5.appendChild(textli5)
// body.append(li2)
// body.append(li3)
// console.log(body)


const heading = document.querySelector('h1')
const body = document.querySelector('body')
const list = document.querySelector('ul')
const todos = ['task1','task2','task3','task4']

// list.style=`
// color:red;
// background:yellow`

// todos.forEach((todo)=>{
//     const li = document.createElement('li')
//     const textInsideli = document.createTextNode(todo)
//     li.appendChild(textInsideli)
//     list.appendChild(li)
// })
// console.log(list)

const input = document.querySelector('input')
// const handleClick = ()=>{ 
//     if(input.value=='') {
//         return window.alert("Please enter a value.")
//     }  //handleClick function is defined in HTML file in input element.
//     const tag = document.createElement('li')
//     tag.innerHTML = input.value;
//     list.appendChild(tag)
    
// }


// console.log(heading.classList)

// heading.classList.add('red')
// console.log(heading.classList)

const toggleTheme = ()=>{
    if(body.classList.contains('light')){
        body.classList.remove('light')
        body.classList.add('dark')
    }
    else{
        body.classList.remove('dark')
        body.classList.add('light')
    }
}

