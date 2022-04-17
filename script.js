let outputScreen = document.getElementById("output");
let menu = document.getElementById("icon-for-menu")
let calling = document.getElementById("calling")
        

function display(num){
     outputScreen.innerHTML += num;
}

function Clear(){
    outputScreen.innerHTML = "";
    menu.style.display = "none"
    calling.style.display = "none"
    outputScreen.style.display = "block"
}

function menubar(){
    menu.style.display = "grid"
    outputScreen.style.display = "none"
    calling.style.display = "none"
}

function call(){
    calling.style.display = "flex"
    menu.style.display = "none"
    outputScreen.style.display = "none"
}