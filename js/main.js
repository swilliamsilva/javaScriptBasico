alert("Segunda forma de acessar o JS através do main");
var nome = "William Silva";
var idade = 51;
var idade2 = 10;
var idade3 = "20";
var idade4 = "21";
var frase = "Japão é o melhor time do mundo!"
var lista = ["limao", " pera", "laranja"];

//alert("Bem vindo! " + nome + " tem " + idade + " anos");
//alert(idade + idade2);
//alert(idade3 + idade4);
console.log(nome);
console.log(idade + idade2);
console.log(frase.replace("Japão", "Brasil"));
//alert(frase.replace("Japão", "Brasil"));
console.log(frase.toLowerCase());
console.log(frase.toUpperCase());
console.log(lista);
console.log(lista[1]);
//alert(lista[1]);
lista.push("uva");
console.log(lista);
lista.pop(); // vai retirar o ultimo elemento da lista.
console.log(lista);
console.log(lista.length);
console.log(lista.reverse()); // traz os elementos ao contrario
console.log(lista);
//--------
console.log(lista.toString()); // traz a lista como um string
console.log(lista.toString()[0]); //Traz o primeiro elemento da string ela passou a ser a matriz.

console.log(lista.join(" - "));

//==========

var fruta = { nome: "maça", cor: " vermelha" };
console.log(fruta);
console.log(fruta.nome);
console.log(fruta.cor);
//==========

var frutas = [{ nome: "maça", cor: "vermelha" }, { nome: "uva", cor: "roxa" }];
console.log(frutas);
//alert(frutas[1].nome);

//================


var idade = 18;
if (idade >= 18) {
    alert("Maior de idade");
} else { alert(" Menor de idade") };

//---------------
var idade = prompt("Qual sua idade? ") //---o Browse vai abrir uma caixa de pergunta

//------
var count = 0;
while (count < 5) {
    console.log(count);
};
count = count + 1;
//========================================

var count;
for (count = 0; count <= 5; count++) {
    //    alert(count);
};
//====================

var d = new Date();
alert(d);
alert(d.getMonth() + 1);
alert(d.getMinutes());
alert(d.getHours());

//---------------------------------
function soma(n1, n2) {
    return n1 + n2;
}
alert(soma(5, 10));
//----------------
function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}
alert(setReplace(" Vai Japão", "Japão", "Brasil"));
//======================================
function validaIdade(idade) {
    var validar;
    if (idade >= 18) {
        validar = true

    } else {
        validar = false
    }
    return validar;
}
var idade = prompt("Qual sua idade? ");
console.log(validaIdade(idade));
//================================================
function clicou() {
    document.getElementById("agradecimento").innertHTML > "<b>Obrigado por clicar</b>"; // fez uma injeção
    //console.log(document.getElementById("agradecimento"));
    //  alert("Obrigado por clicar");

};
//=======================================
function redirecionar() {
    window.open("https://globallabs.academy/");
    window.location.href = "https://globallabs.academy/"; // Abre na mesma janela

}
//====================

function trocar() {
    document.getElementById("mousemove").innerHTML > "Obrigado por passar o mouse"
        //alert("Trocar texto");
};
//=====================

function voltar() {
    document.getElementById("mousemove").innerHTML > "Passe o mouse aqui!"

};