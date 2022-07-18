//n=5
function factorial(n){
    //loop
    let result = 1;
    // 5 * (5-1) * (5-2) * (5-3) * (5-4)
    do{
        result = result * n; 
        n = n-1;
    }while(n > 0)
    //if n = 1 return 1 or break
    return result;
}

let facNumber = 5;
const facResult = factorial(facNumber);
console.log(facResult);

