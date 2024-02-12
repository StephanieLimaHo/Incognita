var pontos = 0;
var porcentagem = 100 / 3;
var pontosVocabulary = 0;
var lastNumber = 0;
var contador = 0;

function verificar1(){
	var ele = document.getElementsByName('sigla1');
	var resposta = "";
	for(var i=0; i<ele.length; i++){
		if (ele[i].checked){
			resposta = ele[i].value;
		}
	}
	if (resposta == "1"){
		pontos++;
	}
	console.log("Pontuaçao Parcial: " + pontos);
}
 
//----------------------------------------------------------------------------------
 function verificar2(){
	var ele = document.getElementsByName('sigla2');
	var resposta = "";
	for(var i=0; i<ele.length; i++){
		if (ele[i].checked){
			resposta = ele[i].value;
		}
	}
	
	if (resposta == "1"){
		pontos++;
	}
	console.log("Pontuaçao Parcial: " + pontos);
}

//----------------------------------------------------------------------------------
function verificar3(){
	var ele = document.getElementsByName('sigla3');
	var resposta = "";
	for(var i=0; i<ele.length; i++){
		if (ele[i].checked){
			resposta = ele[i].value;
		}
	}
	if (resposta == "1"){
		pontos++;
	}
	console.log("Pontuaçao Final: " + pontos);
	console.log("Porcentagem - Pontuaçao Final: " + (porcentagem * pontos));
}

//---------------------------------Drag and Drop------------------------------------
function verificar4(){
	var resposta = document.getElementById('respostaCorreta').value;
	if (resposta == "1"){
		pontos++;
	}
	console.log("Pontuaçao Final: " + pontos);
	console.log("Porcentagem - Pontuaçao Final: " + (porcentagem * pontos));
	document.getElementById("resposta").innerHTML = "You've got "+ pontos + "/3!";
}
//Color
function mouseOver() {
  document.getElementById("sim").style.background = "#ddd";
}
function mouseOver() {
  document.getElementById("nao").style.background = "#ddd";
}

//---------------------------------Progress Bar------------------------------------

function makeProgress(counting, questions){
	var width;
	for (var i = 1; i <= questions; i++) {
		if (counting == i){
			width = (100/questions)*i;
			console.log("Progresso: " + width + "%");
			var bar = document.getElementById("progressBar");
			bar.style.width = width + '%'; 
			bar.innerHTML = counting * 1  + '/' + questions * 1;
		}
	}
}

//---------------------------------Modal-------------------------------------------
function alerta(){
	swal("You've finished!", "You've got "+ pontos + "/3!", "success");
	  }

function alertaVocabulary(questionsVocabulary){
	swal("You've finished!", "You've got " + pontosVocabulary + "/" + questionsVocabulary + "!" , "success");
	  }

//---------------------------------Pontuacao Vocabulario-----------------------------
function somarPontos() {
		contador ++;
		if(contador > 1){
			console.log("Maximum Exceeded");
		} else{
			pontosVocabulary++;
		}
		console.log(pontosVocabulary);
}

function errar() {
	pontosVocabulary = lastNumber;
	contador = 0;
	console.log(pontosVocabulary);
	console.log(lastNumber);
}

function controlar() {
	contador = 0;
	lastNumber = pontosVocabulary;
	console.log(lastNumber);
}