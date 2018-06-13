function define(a, b) {
    var sum = function(a, b) {
        return a + b
    }
    return sum
}
console.log(define(1, 2))
define(function() {

})