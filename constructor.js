// class Car{
//     constructor(){
//         console.log("Constructor was called!")
//     }
// }

// const car1 = new Car()

// var car2 = new Car()

// let car3 = new Car()


// class Car{
//     constructor(brand,name){
//         this.name = name
//         this.brand = brand
//     }
// }
// const car1 = new Car('Mercedes','S600')
// console.log(car1)


// class Car{
//     age=30
//     adult=true
//     constructor(brand,name){
//         this.name = name
//         this.brand = brand
//         this.age=22   //we can modify variable inside the constructor
//     }
//     greet(){
//         console.log("hello "  +this.name + " model is " + this.brand)
//     }
// }
// const car1 = new Car('Mercedes','S600')
// car1.greet()


// class Car{
//     age=30
//     adult=true
//     constructor(brand,name){
//         console.log(this)
//     }
//     greet(){
//         console.log("hello "  +this.name + " model is " + this.age)
//     }
// }

// function Bike(){
//     console.log(this)
// }

// const bike1 = new Bike() //when new has been used before a function call then it acts as a constructor
// console.log(bike1)

// function Bike(brand, name){
//     this.brand = brand;
//     this.name = name;
// }
// const bike1 = new Bike('ktm', 'duke') //when new has been used before a function call then it acts as a constructor
// console.log(bike1)

// const obj = {
//     name:'john',
//     age:30
// }
// const obj2 = obj
// console.log(obj2)

// obj.name ="Doe" 
// obj.age=33     //name will be changed

// console.log(obj2)


// let a = 33
// let b=a
// a+=50
// console.log(a)
// console.log(b)


// const arr = [1,2,3,4,5,6,88]
// console.log(arr)
// arr.push(111)
// console.log(arr)
// arr.pop()
// console.log(arr)
// arr.unshift(0)   //adds elements in the begining
// console.log(arr)

// console.log(arr.push(33))
// console.log(arr.length)

// arr.shift()  //removes elements from begining
// console.log(arr)

//forEach
const arr = ['AMAN','KUMAR','AYUSH','RAHUL']
const func = function(ITEM,INDEX){
    console.log(INDEX, ITEM)
}
arr.forEach(func)
