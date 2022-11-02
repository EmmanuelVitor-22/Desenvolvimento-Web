function fibonacci(value) {
    // implementar logica aqui
    // return (value <= 1) ? value : fibonacci(value - 1) + fibonacci(value - 2)
    let term = 0, actual = 1, next;

    // for (let i = 1; i <= value; i++) {
    //   next = term + actual;
    //   term = actual;
    //   actual = next;
    // }
    value.forEach((term = 0, actual = 1, next) => {
        next = term + actual;
        term = actual;
        actual = next;
    });
    return term

}



// console.log(fibonacci(0));
// console.log(fibonacci(1));
// console.log(fibonacci(2));
// console.log(fibonacci(3));
console.log(fibonacci(4));
// console.log(fibonacci(5));
// console.log(fibonacci(6));
// console.log(fibonacci(35));
// console.log(fibonacci(46));

