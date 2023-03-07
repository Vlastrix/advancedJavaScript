
function fibonacciGenerator(n) {
    var x = 0;
    var y = 1;
    var z = 1;
    var fibonacciSequence = [x, y];
    if (n === 1) {
        return [x];
    } else if (n === 2) {
        return fibonacciSequence;
    } else {
        while ((n - 1) > z) {
            z++;
            var newNumber = x + y;
            x = y;
            y = newNumber;
            fibonacciSequence.push(newNumber)
        }
        return fibonacciSequence
    }
}
    
var output = fibonacciGenerator(2);
console.log(output)