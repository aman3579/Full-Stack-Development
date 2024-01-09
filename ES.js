// // const stra = `hello`
// // const strb = `world`
// // console.log(stra+ " "+strb)

// // const newstr = `${stra} ${strb}`
// // console.log(newstr)

// // const newstr1 = `${stra} ${22+66}`  //template string : same as kind of concatenation
// // console.log(newstr1)

// // const newstr2 = stra + strb
// // console.log(newstr2)


// const arr = ['aman','kumar','arun']
// // const name1 = arr[0]
// // const name2 = arr[1]
// // const name3 = arr[2]
// // console.log(name1, name2, name3)
// //we can use alternate methods of destructuring
// const [name1, name2,name3] = arr
// console.log(name1, name2, name3)

// const arr = [1,22,33,44,56,65,667]
// const[index1, index2, index3, index4] = arr   //destructuring
// console.log(index1, index2, index3, index4)


// const obj = {
//     name: 'john',
//     cars:['porsche','76yh'],
//     address: {
//         city:"delhi",
//         state: "delhi",
//     }
// }
// const {name,cars,address} = obj
// console.log(name)
// console.log(cars)
// console.log(address)

// const {cars:pizza} = obj ///we can change name of keys
// console.log(pizza)
// const [car1,car2] = pizza
// console.log(car1,car2)

// const {address:{city:personCity}} = obj
// console.log(personCity)

// const{cars:[,car2]} = obj
// console.log(car2)

// const arr = ['aman','arun', 'kumar','garvit']
// console.log(...arr)   // ... spread operator

// const arr = ['aman','arun', 'kumar','garvit']
// console.log(4,...arr,1,2,22)   // ... spread operator

// const obj = {name:'aman',
// age:20,
// address:{state:"delhi",
// city:"munirka"}
// }
// const obj2 = {...obj,
// hobby:'cricket'}
// obj.name = 'joe' //this will not get updated in obj2 -- no shallow cloning
// obj.address.city = 'mumbai'   //it will be updated in obj2
// obj.address.state = 'Maharashtra' //these values gets changed
// console.log(obj2)
// obj.name='raman'
// console.log(obj2)
// console.log(obj)

//unsure about functions parameter
const sum= (...params)=>{
    return params.reduce((prev,sum)=>prev+sum,0)
}
console.log(sum(33,44,55,66,77))