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
    document.getElementById("btnEnviarLista").style.backgroundColor = "#575757";
    document.getElementById("btnImprimir").style.backgroundColor = "#575757";
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";     
}


function white(){
    document.getElementById("topo").style.backgroundColor = "white";
    document.getElementById("rodape").style.backgroundColor = "#1CAEE8";
    document.getElementById("btnEnviarLista").style.backgroundColor = "#1CAEE8";
    document.getElementById("btnImprimir").style.backgroundColor = "#1CAEE8";
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

function btnEnviarLista(event){
    event.preventDefault()
}

//Script para adicionar tarefa 
document.querySelector('#btnEnviarLista').onclick = function(){
    if(document.querySelector("input").value.length == 0){
        
    }
    else {
    document.querySelector('#tarefas').innerHTML 
    += `
    <div class="tarefa">
        <span id="nomeTarefa">
            ${document.querySelector('input').value}
        </span>
        <button class="deletar">
            <img class="icone_lixeira" src="../img/lixeira.png" alt="icone lixeira">
        </button>
    </div>
    
    `;

    var current_tarefas = document.querySelectorAll(".deletar");
    for(var i=0; i<current_tarefas.length; i++){
        current_tarefas[i].onclick = function(){
        this.parentNode.remove();
        }
    }

}

}