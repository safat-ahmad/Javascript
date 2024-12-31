function persentages(persent){
    if(persent >= 80 && persent <= 100){
       return "merit";

    }
     if(persent >= 60 && persent < 80){
       return "firstDivision";
    }
    if(persent >= 45 && persent < 60){
       return "secondDivision";
    }
     if(persent >= 33 && persent < 45){
       return "thirdDivision";
    }
    if(persent < 33){
       return "fail";
    }
    else{
       return "please enter valid percentage";
    };
   
}

var mark = persentages(200);
console.log(mark)