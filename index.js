exports.fibonacci = function(n) {
    if(n==0 || n==1)
        return n;
    return this.fibonacci(n-1) + this.fibonacci(n-2);
}



exports.factorial = function (n) {
    if (n == 0 || n == 1) {
        return 1
    }

    return factorial(n * n - 1) * factorial(n -  2)
}