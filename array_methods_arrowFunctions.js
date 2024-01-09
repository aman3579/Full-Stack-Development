// const a = {
//     name:'aman',
//     age:20,
//     address:'delhi',
//     greet: function(){
//         console.log("hjello")
//     }
// }
// // for(keys in a){   //a kind o ffor each loop
// //     console.log(keys)
// // }

// // // const arr = [1,2,3,4,'aman','g',5,55]
// // // for(items in arr){
// // //     console.log(arr[items])
// // // }
// // console.log(Object.values(a)) //gives the values of object
// const b = {}
// const reduceFunction = function(previousValue, currentItem){
//     // console.log(previousValue, currentItem)
//     previousValue[currentItem] = a[currentItem]
//     return previousValue
// }
// Object.keys(a).reduce(reduceFunction,b)
// console.log(b)

// //map creates a new array
// //map takes three inputs value, index and arr. we can take 
// const arr = [11,22,33,44,55]
// let a =arr.map((value,index,arr)=>{
//     console.log(value,index ,arr)
//     return value;
// })
// console.log(a)
// //maps create a new array

//reduce methods
// let arr = [11,22,33,44,33,223,33]
// let c = arr.reduce((a,b)=>{
//     return a+b
// })
// console.log(c)
//it first takes input as first two index, perform required operation and one value is taken
//then it takes result as first value and next item from array as second and again perform the element.


// let arr = [11,22,33,44,33,223,33]
// const func1 = function(h1,h2){
//     return h1*h2;
// }
// let c = arr.reduce(func1)
// console.log(c)


// /////////////////////////////////
// const a = {
//     name:'aman',
//     age:20,
//     address:'delhi',
//     greet: function(){
//         console.log("hello")
//     }
// }
// const b = {}
// const reduceFunction = function(previousValue, currentItem){
//     console.log(previousValue, currentItem)
//     previousValue[currentItem] = a[currentItem]
//     return previousValue
// }
// Object.keys(a).reduce(reduceFunction,b)



// let fibonacci = [0,1]
// for(let i=2; i<=10; i++){
//     fibonacci[i] = fibonacci[i-1] + fibonacci[i-2]
//     fibonacci.push(fibonacci[i])
// }
// console.log(fibonacci)



///////////////////
// const arr = [{name:'john', age:30}, {name:'arun', age:44},{name:'akash',age:45}]
//  for(let i=0; i<=arr.length; i++){
//     if(arr[i].name=="arun"){
//         console.log("found")
//         break
//     }
//     else{
//         console.log("not found")
//         break
//     }
//  }

// const arr = [{name:'john', age:330}, {name:'arun', age:30},{name:'akash',age:30}]
// //find function
// const findfn = function(item){
//     if(item.age==30)
//     return true
// }
// const ele = arr.find(findfn)
// console.log(ele)
// //find can be used to find only one element of an array.




////////filter function//////////
//it filerts 
//returns the elements satisfying the condition
// const arr = [{name:'john', age:30}, {name:'arun', age:30},{name:'akash',age:45}]
// const filterfn = function(item){
//     if(item.age==30){
//         return true
//     }
// }
// const res = arr.filter(filterfn)

// console.log(res)

//find function and filter function difference is that it returns
//find function-> returns first value where it satisfies the criteria first even next value is meeting the condition
//filter function -> returns all the values which satisfies the given condition.


//////////////////////////////////////////
//splice////-> can be used to either remove or add elements in an array
// const arr = [22,33,44,55,66,76,54,43]
// arr.splice(1,0,1000)  // first parameter-> index, then 0 for no of items to delete, third is the number
// console.log(arr)
// arr.splice(1,0,100)
// arr.splice(2,0,200)
// arr.splice(3,0,300)
// arr.splice(4,0,400)
// console.log(arr)

// //delete using splice
// arr.splice(1,2)  //(delete at index, no of elements u want to delete)
// console.log(arr)



// ///////////////////////arrow function //////////////////////
// const greet = function(){
//     console.log("hello")
// }

// const arrowFunction = ()=>{
//     console.log("hello")
// }
// arrowFunction()
//arrow function is convenient and reduces th enumber of loc
// const sum = (a,b)=>{
//     return a+b
// }
// let summ = sum(12,43)
// console.log(summ)

// const multiply = (a,b)=>{
//     return a*b
// }
// console.log(multiply(22,11))

//if there is only one parameter, then we can remove parenthesis.
// const func = a=>{
//     return a*100
// }
// console.log(func(8))
// const arr = [22,33,44,55,66,777,888,77,87]
// const newarr = arr.filter(item=>item>=32)
// console.log(newarr)

// const arr = [22,33,44]
// const sum = arr.reduce((prev,curr)=>prev+curr,0)
// console.log(sum)

// const Car = (brand,name)=>{
//     this.brand = brand
//     this.name = name
// }
// // const car = new Car("porsche", '6766')
// // console.log(car)
// //arrow function does not implies on a constructor.

// const Car2 = function(brand,name){
//     this.brand = brand
//     this.name = name
// }
// console.log(Car.prototype)  //undefined because arrou function does not work on constructor
// console.log(Car2.prototype) //gives constructor

// const obj = {
//     name:'aman',
//     greetNormal: function(){
//         console.log(this) //points to local object ie obj.
//     },
//     greetArrow:()=>{
//         console.log(this)   //points to global window
//     } 
// }
// obj.greetNormal()
// obj.greetArrow()  //points to global object
const intro = function(name,age,city){
    console.log("hello! I am "+name+". I am "+age+" years old. I am from "+city)
}
intro('aman',30,'Delhi')
