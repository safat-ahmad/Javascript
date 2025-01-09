function palindrome(str){
    let total = str.length-1;
    for(let i= 0; i<total; i++){
        if(str.charAt(i) != str.charAt(total)){
            return false;
        }
        total--;
    }
    return true;
}

const isPalindrom = palindrome('123456543211');
console.log("isPalindrom", isPalindrom);
