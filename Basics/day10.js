// this and arrow function 

// const user ={
//     username:"jatin",
//     price:200,

//     welcomemesg: function(){
//         console.log(`${this.username}, welcome to website`)
//     }

// }

// user.welcomemesg()
// user.username="sam"
// user.welcomemesg()

// console.log(typeof this)


//arrow function

// const func = ()=>{
//     let username = "code"
//      console.log(this)
// }
// func()


//explicit
// const addtw = (num1,num2)=>{
//     return num1+num2
// }
// console.log(addtw(1,2)) 

//implicit 
// const multi = (num1,num2)=>(num1*num2)
// console.log(multi(1,2))

// Immediately Invoked Function
// (function test(){
//     console.log(`DB connected`);
// })();

// ((name) => {
//     console.log(`DB Connected ${name}`);
// } )('hiiii')