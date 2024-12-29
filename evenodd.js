
// check evevOddnumber
function checkevenodd(number){
    if( number % 2 == 0 ){
        return true;
    }else{
        return false;
    }
    
}
let x = checkevenodd(19);
console.log(x)

// sum of natural number

function sumnaturalnumber(n){

    let sum = (n*(n+1)/2);
    return sum;
}
    let z= sumnaturalnumber(10);
    console.log(z)

//chech the area of triangle

    function areaoftriangle(height, width){
    let area = (height * width)/2;
    return area;
}
    let a = areaoftriangle(10, 20);
    console.log(a)


    //convert celcius to fahrenheight


    function celTofahr(c){
        let fahr = c* (9.0/5.0) + 32;
        return fahr;
    }
    let fahrenheight = celTofahr(20);
    console.log(fahrenheight);


    // check if a number is positive , negative or zero

    function checkPoNe(number){
        if(number > 0)
            {
          console.log("The number is positive")
        }
        else if( number < 0)
            {
                console.log("The number is negative")
            }
            else
            {
            console.log("Zero")
            }
    }
    let num = checkPoNe(0);


    //multiplication of Two number

    function multiplication(a ,b){
        let mult = a * b;
        return mult;
    }
    let multiplica = multiplication(10, 15);
     console.log(multiplica);


     // add two float number

     function addFloatnu(a , b){
        let sum = a + b;
        return sum;
     }
     let sumTwofloatnumber = addFloatnu(12.1242, 1.26252);
     console.log(sumTwofloatnumber)


     //Swap Two variables

     function Swapvariable(a , b){
        a = a + b;
        b = a - b;
        a = a - b;
     }
     
      
     console.log(Swapvariable);
