function reverse(str){
   str = str.toString();
    let strlength = str.length;
    let str2 = "";
    for ( let i = strlength-1; i>=0 ; i--)
    {
        str2 = str2 + str[i];
    }
    return str2; 
}

let a = reverse(1234);
console.log(a)
