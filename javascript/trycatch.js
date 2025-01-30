try {
    let str = null;
    console.log("Before error happens");
    console.log(isPrime(-3));
    console.log("After error happens");
}
catch(err) {
    console.log(err.message);
}
finally {
    console.log("Code is complete");
}


function isPrime(n) {
    // Argument validation
    if (n <= 1) {
        throw Error("Invalid Argument");
    }
    else {
        for (let i = 2; i <= Math.sqrt(n); i++) {
            if(n%i === 0) {
                return false;
            }

        }
        return true;
    }
}