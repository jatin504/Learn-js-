// function 

// how to create a function

// function hello(){
//     console.log("hello world ")
// }
// hello()

// function additon(a,b){
//     console.log(a+b)
// }
// additon(2,4)

//use return

// function multiplication(x,y){
//     let result = x*y
//     return result
// }
// console.log(multiplication(2,6))

// function islogged(username){
//     if(username===undefined){
//         console.log("please enter a username")
//         return
//     }
//     console.log(`hello ${username} `)
// }
// islogged()
// islogged("coder")

function sum(...value){
    return value
}
console.log(sum(200,400,500))

const obj = {
    username:"coder",
    price:2000
}
function handleobj(anyobj){
    console.log(`name is ${anyobj.username} and price is ${anyobj.price}`)
}
// handleobj(obj)
handleobj({
    username:"newcoder",
    price:3000
})

//function with array

const myarr = [200,300,400]
function myarrfunc(getarr){
    return getarr[1]
}
console.log(myarrfunc(myarr))
console.log(myarrfunc([200,400,600]))