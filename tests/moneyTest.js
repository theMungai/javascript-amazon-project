import { formatCurrency } from "../scripts/utils/money.js";

// Giving name to a group of test cases --> test suite

console.log("test suite : formatCurrency")

//  Giving test cases a name 
console.log('converts cents into dollars')

if(formatCurrency(2095) === '20.95'){
    console.log("Passed")
}
else {
    console.log("Failed")
}

//  Giving test cases a name 
console.log('works with 0')

if(formatCurrency(0) === '0.00'){
    console.log("Passed")
}
else {
    console.log("Failed")
}

//  Giving test cases a name 
console.log('rounds up to the nearest cent')

if(formatCurrency(2000.5) === '20.01'){
    console.log("Passed")
}
else {
    console.log("Failed")
}

//  Giving test cases a name 
console.log('rounds down to the nearest cent')

if(formatCurrency(2000.4) === '20.00'){
    console.log("Passed")
}
else {
    console.log("Failed")
}