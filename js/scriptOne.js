//Script para o tema
var clique = 0;
document.getElementById("tema").onclick = function() {  
    if(clique == 0){
        black();
        clique += 1;
    }     
    else{
        white();
        clique = 0;
    }
}

function black(){
    document.getElementById("topo").style.backgroundColor = "#575757";
    document.getElementById("rodape").style.backgroundColor = "#575757";
    document.getElementById("btnCriar").style.backgroundColor = "#575757";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";       
}

function white(){
    document.getElementById("topo").style.backgroundColor = "white";
    document.getElementById("rodape").style.backgroundColor = "#1CAEE8";
    document.getElementById("btnCriar").style.backgroundColor = "#1CAEE8";
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";        
}


//Script para aumentar e diminuir fonte
window.onload = function() {
    var elementBody = document.querySelector('body');
    var elementBtnIncreaseFont = document.getElementById('aumenta');
    var elementBtnDecreaseFont = document.getElementById('diminui');

    var fontSize = 100;
    var increaseDecrease = 20;

    elementBtnIncreaseFont.addEventListener('click', function(event) {
        fontSize += increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });

    elementBtnDecreaseFont.addEventListener('click', function(event) {
        fontSize -= increaseDecrease;
        elementBody.style.fontSize = fontSize + '%';
    });
}


        