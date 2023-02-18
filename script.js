// console.log("Hello")

var data = 0;
// document.getElementById("counting").innerHTML = data;

function increment(){
    data = data+1;
    data = data < 0 ? 0 : data;

    document.getElementById("counting").innerHTML = data;
}

function decrement(){
    data = data-1;
    data = data < 0 ? 0 : data;

    document.getElementById("counting").innerHTML = data;
}

function reset(){
    data = 0;

    document.getElementById("counting").innerHTML = data;
}
