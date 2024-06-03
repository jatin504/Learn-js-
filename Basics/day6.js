//date and time in js

let mydate = new Date()
console.log(mydate.toString()) //Mon Jun 03 2024 22:58:27 GMT+0530 (India Standard Time)
console.log(mydate.toDateString()) //Mon Jun 03 2024
console.log(mydate.toLocaleDateString()) //3/6/2024
console.log(typeof mydate) // it's an object

//let myCreatedDate = new Date(2024,0,23)
//let myCreatedDate = new Date(2024,0,23,5,3)//23/1/2024, 5:03:00 am\
//let myCreatedDate = new Date("2024-01-14") //14/1/2024, 5:30:00 am
let myCreatedDate = new Date("01-14-2024") // 14/1/2024, 12:00:00 am

console.log(myCreatedDate.toLocaleString()) //Mon Jan 23 2023

let mytimestamp = Date.now()
console.log(mytimestamp)
console.log(myCreatedDate.getTime())
console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate.getDay())
console.log(newDate.getMonth() + 1) //because itstart with 0
console.log(newDate.getDay())
newDate.toLocaleString('default',{
    weekday :"long"
    
})


