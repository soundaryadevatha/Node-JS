module.exports.isPrime = function (num) {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};

module.exports.getFivePrimeNumber =function() {
    var arr = [2];
    for ( var i = 3; i <=5; i+=2 ) {
        if ( module.exports.isPrime(i) ) {
            arr.push(i);
        }
    }
    return arr;
}

