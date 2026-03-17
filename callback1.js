function add(a, b) {
    return "addition is " + (a + b);
}
function sub(a,b)
{
    return "subtraction is"+ (a-b);
}

function mul(a,b)
{
    return"multiplication is"+ (a*b);
}

function divide(a, b) {
    setTimeout(() => {
        if (b == 0) {
            return "error"
        } else {
            return "division : " + (a / b);
        }
    }, 1000);

}
function demo(a, b, callback) {
    return callback(a, b);//add()
}
console.log(demo(2, 3, add))// add(2,3)

console.log(demo(6,2,sub))

console.log(demo(3,4,mul))

console.log(demo(12, 3, divide))

console.log(demo(12, 0, divide))