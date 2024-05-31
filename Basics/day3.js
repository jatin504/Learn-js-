// datatype conversion

// let num = 33 //num
let num = null //string
//let num = true //boolean

let ValueInNumber = Number(num)
console.log(typeof(ValueInNumber))
console.log(ValueInNumber)


// "33" => 33
// "33abc" => NaN
// "abc" => NaN
// true => 2 ; false => 0;
// null => 0
// undefined => naN

// Converting a datatypes into boolean

let isLogged = undefined
let valueInBoolean = Boolean(isLogged)
console.log(valueInBoolean)

// 1 => true; 
// "abc" => true
// "" => false;
//  null => false;
// undefined => false

// Converting a datatypes into string

let str = 1.2;
let valueInString = String(str)
console.log(valueInString)
console.log(typeof(valueInString))

// 33 => string
// all value in string