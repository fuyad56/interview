function doSomething () {
    console.log(3333);
}

console.log(2222);
// doSomething();
setTimeout(doSomething);
setTimeout(function () {
    console.log('lazy and waiting');
}, 5000)
setTimeout(() => {
    console.log('See you later');
}, 10000)
console.log(4444);

setInterval(() => {
    console.log('doing it again');
}, 3000);