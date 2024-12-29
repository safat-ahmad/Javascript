
function recArea(height, width){
    const area = height * width;
    return area;
}

function circleArea(r){
    const pi = Math.PI;
    const reArea = recArea(r, r)
    let area = pi * reArea;
    return area;
}

function square(edge){
    let area = recArea(edge, edge);
    return area;
}



const result = square(8);
console.log(result);
