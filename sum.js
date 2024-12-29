/* function sum (a , b){
    let c = a + b 
    return c;
}

let result = sum(100000 , 5345463737)

console.log(result);


function multiply (a , b){
    let c = a * b 
    return c ;
}

let resul = multiply (10 , 20 )
console.log(resul) 



function celcTofahr(n){
    return ( n * 9.0/5.0 + 32.0);

}

let n = 2;
console.log( celcTofahr(n));


function celcTofahr(n){
    return (n * 9.0/5.0 + 32);

}


const n = 4 ;
console.log(celcTofahr(n))


function sum (a , b , c){
    let d = a + b +c 
    return d;
}

let result = sum (10 , 20 , 30);
console.log (result);



function devision( a , b){
    let c = a / b
    return c;
}

let rejult = devision(100 , 5);
console.log(rejult);




function sub ( a , b){
    let c = a - b
    return c;
}

let result = sub ( 50 , 40);
console.log(result);



function celcTofahr (n){
    const a =  (n * 9.0/5.0 + 32)
}

let n = 30;
console.log(celcTofahr(n));





let number = 20;
if(number % 2 == 0)
    {
console.log("the number is even")

 }
  else 
  {
   console.log ("the number in odd")
  }




fuctin checkfunction
if( number > 0){
    console.log(number + " is + positive")
}
 else if  (number < 0 ){
    console.log(number + "is negative")
}
else (number == 0){
    console.log(number + "is zero")
}
    


function myfunction(a , b){
    return a * b;
}
let result = myfunction(3 , 4);
console.log(result)

function fahrTocelsius(f){
    return ((f - 32 )* 5.0/9.0 )
}
let f = 50;
console.log(fahrTocelsius(f))


function fahrTocelsius(cel){
    return ((cel * 9.0/5.0) +32)
}
let cel = 25;
console.log(fahrTocelsius(cel))



function palindrome(str){
    let total = str.length;
    for (let i = 0 ; i < total ; i++){
        if (str.charAt(i) b = str.charAt(total)){
        return false ,
        };
        total--
        return true;
    };
};
console.log(palindrome(121));
console.log(palindrome(223));






function palindromeCheck(number) {
    let numStr = number.toString();
    let length = numStr.length;
    let result = 0;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        result ^= numStr.charCodeAt(i) ^ 
                  numStr.charCodeAt(length - 1 - i);
    }
    return result === 0;
}

console.log(palindromeCheck(1212));
console.log(palindromeCheck(13531));
console.log(palindromeCheck(12345));



function checkPrime(num) {
    let i, flag = true;
    for (i = 2; i <= num - 1; i++) {
        if (num % i == 0) {
            flag = false;
            break;
        }
    }
    if (flag == true)
        console.log(num + " is prime");
    else
        console.log(num + " is not prime");
}
checkPrime(4);
checkPrime(5);
checkPrime(20);
*/

let n = 7
let power = 3;

// Calculate and displ
// ay output
console.log(n**power);