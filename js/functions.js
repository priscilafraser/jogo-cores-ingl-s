
var engine = {
    "cores": ['green', 'purple', 'pink', 'red', 'yellow', 'orange', 'blue', 'grey', 'black'],
    "hexadecimais": {'green':'#02EF00', 'purple':'#790093',
    'pink': '#F02A7E', 'red':'#E90908', 'yellow':'#E7D703', 'orange':'#F16529', 'grey':'#EBEBEB', 'black':'#141414'},
    "moedas": 0 
}

//funções
function sortearCor() {
    var indexcorSorteada = Math.floor(Math.random()*engine.cores.length);
    var legendaCorDaCaixa = document.getElementById('cor-na-caixa');
    var nomeCorSorteada = engine.cores[indexcorSorteada];

    legendaCorDaCaixa.innerText = nomeCorSorteada.toUpperCase();

    return engine.hexadecimais[nomeCorSorteada];

}

function aplicarCorNaCaixa(nomeDaCor) {
    var caixaDasCores = document.getElementById('cor-atual');
    caixaDasCores.style.backgroundColor = nomeDaCor;
    caixaDasCores.style.backgroundImage = "url('/img/caixa-fechada.png')";
    caixaDasCores.style.backgroundSize = "100%";
}