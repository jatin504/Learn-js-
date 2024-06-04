//Array

//array is object 
//collection of multiple items in a single array
//it is resizeable
//many types int num bool etc
// zero based indexing
//shalow copy => change in original array
// deep copy => do not change in real array
// prototype in array

// const myarr = [1,2,3,4,5]
// const color =["pink","red"]
// const vehicle = new Array(1,2,34,)

// console.log(myarr)
// console.log(myarr[1])

//methods......

// console.log(myarr.length)
// myarr.push(6)
// console.log(myarr)
// myarr.pop()
// console.log(myarr)
// myarr.unshift(0) //adding value at start
// console.log(myarr)
// myarr.shift() //remove starting value
// console.log(myarr)
//console.log(myarr.includes(5)) //question 
//console.log(myarr.indexOf(9)) //if not then gives -1
// const arry2 = myarr.join()
// console.log(myarr)
// console.log(typeof myarr)
// slice and splice
// console.log("A",myarr)
// const myn1 = myarr.slice(1,3)
// console.log(myn1)
// console.log("B",myarr)
// const myn2 = myarr.splice(1,3)
// console.log("C",myarr)
// console.log(myn2)

//concat

// const newarry = myarr.concat(color)
// console.log(newarry)

//spread operator

// const newarr2 = [...myarr,...color]
// console.log(newarr2)


// const vehicles = [1,2,[3,4],4,[5,6],7,8]

//flat method
// const newarr3 = vehicles.flat(Infinity)
// console.log(newarr3)

// console.log(Array.isArray("hi"));
// console.log(Array.from("Hello World"))

// let score1 = 100;
// let score2 = 200;
// let score3 = 300;
// console.log(Array.of(score1,score2,score3))