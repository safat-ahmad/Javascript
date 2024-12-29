hello(who)

function hello(callback){
console.log("hello");
callback();
}

function world(){
    console.log("world");
}

function who(){
    console.log("log");
    
}