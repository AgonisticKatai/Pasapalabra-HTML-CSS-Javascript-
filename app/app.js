var userGameBox = [
{user: 'AGONISTICKATAI', points: 27},
{user: 'MAJOR TRAPERO', points: 25},
{user: 'DONALD TRUMP', points: 10},
{user: 'JHON RAMBO', points: 5},
{user: 'CHUCK NORRIS', points: 0},
];
var userNameBox = ['AGONISTICKATAI', 'MAJOR TRAPERO', 'DONALD TRUMP', 'JHON RAMBO', 'CHUCK NORRIS'];
var questionsAcc = 0;
var correctAnswer = 0;
var incorrectAnswer = 0;
var timeLeft;
var timerGenerate;
var gameTest = document.getElementById('game_questions');
var userAnswer = document.getElementById('answer');
var userName = document.getElementById('user_name').value;

//Base de datos de preguntas y respuestas
var questions = [
{ letter: "a", answer: "activision", status: 0, question: ("CON LA A. Empresa distribuidora de la saga Call of Duty") },
{ letter: "b", answer: "black ops", status: 0, question: ("CON LA B. Título en el que la historia del juego discurre durante la Guerra Fría (mayoritariamente durante la Guerra de Vietnam)") },
{ letter: "c", answer: "campero", status: 0, question: ("CON LA C. Jugador cansino que no se mueve de su posición inicial para matar por sorpresa") },
{ letter: "d", answer: "dominio", status: 0, question: ("CON LA D. Juego en el que debes controlar tres objetivos marcados por banderas") },
{ letter: "e", answer: "eutanasia", status: 0, question: ("CON LA E. Medalla que se obtiene al disparar a un jugador provocando que se suicide") },
{ letter: "f", answer: "fringe", status: 0, question: ("CON LA F. Mapa de Black Ops 3 ambientado en una zona rural de California") },
{ letter: "g", answer: "granada", status: 0, question: ("CON LA G. Objeto explosivo que se lanza para matar a uno o varios objetivos") },
{ letter: "h", answer: "highrise", status: 0, question: ("CON LA H. Mapa de Modern Warfare 2 done muchos Youtubers aprendieron a hacer 'trick-shots'") },
{ letter: "i", answer: "instruccion", status: 0, question: ("CON LA I. Modo de juego para noobs") },
{ letter: "j", answer: "hijacked", status: 0, question: ("CONTIENE LA J. Mapa mítico de Black Ops 2 ambientado en un barco") },
{ letter: "k", answer: "killcam", status: 0, question: ("CON LA K. Repetición donde se ve la última baja") },
{ letter: "l", answer: "lodestar", status: 0, question: ("CON LA L. Racha de puntos de Black Ops 2 con la que se lanzan misiles mediante una panel de control") },
{ letter: "m", answer: "manowar", status: 0, question: ("CON LA M. Arma semi-automática de Black Ops 3") },
{ letter: "n", answer: "noscope", status: 0, question: ("CON LA N. Nombre que recibe cuando disparas sin apuntar con un arma de francotirador") },
{ letter: "ñ", answer: "niño rata", status: 0, question: ("CONTIENE LA Ñ. Dícese de un jugador de corta edad que tras ser abatido grita como un roedor") },
{ letter: "o", answer: "overflow", status: 0, question: ("CON LA O. Mapa de Black Ops 2 ambientado en una ciudad") },
{ letter: "p", answer: "pakistan", status: 0, question: ("CON LA P. Uno de los dos lugares donde se ambientan la mayoría de mapas de Call of Duty") },
{ letter: "q", answer: "posquemador", status: 0, question: ("CONTIENE LA Q. Ventaja que te permite tener más duración de salto en Black Ops 3") },
{ letter: "r", answer: "rushear", status: 0, question: ("CON LA R. Palabra que se utiliza para describir la acción de recorrer el mapa por un lateral de forma temeraria") },
{ letter: "s", answer: "supersalto", status: 0, question: ("CON LA S. En Advanced Warfare hay una innovación que es...") },
{ letter: "t", answer: "turbine", status: 0, question: ("CON LA T. Mapa de Black Ops 2 en el que hay un avión accidentado y que a muy poca gente le gusta jugar") },
{ letter: "u", answer: "unidad canina", status: 0, question: ("CON LA U. Racha de Black Ops 2 que para obtenerla necesitas 1800 puntos y muchas correas para perros") },
{ letter: "v", answer: "vtol", status: 0, question: ("CON LA V. Racha de Black Ops 2 que controlas desde un panel mediante la cual puedes disprar misiles y balas") },
{ letter: "w", answer: "warthog", status: 0, question: ("CONTIENE LA W. Racha de puntos de Black Ops 2 controlada por la IA que hace una masacre por oleadas") },
{ letter: "x", answer: "xp", status: 0, question: ("CON LA X. Necesario para subir de nivel") },
{ letter: "y", answer: "infinity ward", status: 0, question: ("CONTIENE LA Y. Compañía que ha sacado el último Call of Duty") },
{ letter: "z", answer: "zombies", status: 0, question: ("CON LA Z. Modo de juego donde no te enfrentas a personas") },
];

//Mostrar instrucciones del juego
function showInstructions() {
	document.getElementById('instructions').style.visbility = 'visible';
}

//Salir del juego
function endGame() {
	clearInterval(timerGenerate);
	document.getElementById('play_menu').style.display = 'block';
	document.getElementById('name_intro').style.visibility = "hidden";
	document.getElementById('container_game').style.visibility = "hidden";
	document.getElementById('container_menu').style.visibility = "visible";
}
//Botón volver a menú principal
function returnToMenu() {
	document.getElementById('play_menu').style.display = 'block';
	document.getElementById('name_intro').style.visibility = "hidden";
	document.getElementById('container_game').style.visibility = "hidden";
	document.getElementById('container_best_players').style.visibility = 'hidden';
	document.getElementById('container_menu').style.visibility = "visible";
	document.getElementById('container_instructions').style.visibility = "hidden";
}

//Panel nuevo ususario visible
function newUserIntro() {
	document.getElementById('user_name').value = "";
	document.getElementById('name_intro').style.visibility = "visible";
	document.getElementById('alert_user').style.visibility = 'hidden';
	document.getElementById('user_name').focus()
}

//Introducción de nuevo usuario 
function newUser() {
	userName = document.getElementById('user_name').value;
	userName = userName.toUpperCase();
	if (userName === '') {
	} else if (userNameBox.indexOf(userName) === -1) {
		userNameBox.push(userName);
		document.getElementById('container_menu').style.visibility = "hidden";
		document.getElementById('play_menu').style.display = 'none';
		document.getElementById('container_game').style.visibility = "visible";
		document.getElementById('correct').innerHTML = "Aciertos";
		document.getElementById('incorrect').innerHTML = "Errores";
		document.getElementById('correct').style.color = "white";
		document.getElementById('incorrect').style.color = "white";
		questionsAcc = 0;
		correctAnswer = 0;
		incorrectAnswer = 0;
		for(var i = 0; i < questions.length; i++) {
			questions[i].status = 0;
			document.getElementsByClassName('results')[i].style.backgroundColor = 'white';
		}
		gameQuestions();
		timer();
	} else {
		document.getElementById('alert_user').style.visibility = 'visible';
		setTimeout(newUserIntro, 2000);
	};
	document.getElementById('answer').focus()
}

//Generador de preguntas
function gameQuestions() {	
	userAnswer.value = "";
	if (questions[questionsAcc].status === 0) {
		gameTest.innerHTML = questions[questionsAcc].question;
	} else {
		goToList();
	}
}

//Condicionales de respuesta
function answerAnalyzer() {
	userAnswer.value = userAnswer.value.toLowerCase();
	if(userAnswer.value === questions[questionsAcc].answer) {
		questions[questionsAcc].status = 'c';
		document.getElementsByClassName('results')[questionsAcc].style.backgroundColor = 'Chartreuse ';
		correctAnswer++;
		document.getElementById('correct').innerHTML = '<span style="color:white">' + 'Aciertos: ' + '</span>' + correctAnswer;
		document.getElementById('correct').style.color = "Chartreuse";
		goToList();
	} else {
		questions[questionsAcc].status = 'f';
		document.getElementsByClassName('results')[questionsAcc].style.backgroundColor = 'red';
		incorrectAnswer++;
		document.getElementById('incorrect').innerHTML = '<span style="color:white">' + 'Errores: ' + '</span>' + incorrectAnswer;
		document.getElementById('incorrect').style.color = "red";
		goToList();
	};
};

//Ususario pulsa PASAPALABRA
function userPasapalabra() {
		document.getElementsByClassName('results')[questionsAcc].style.backgroundColor = 'blue';
		goToList();
}

//Generar usuario y puntuación
function userGenerator() {
	userGameBox.push({
		user: userName, 
		points: correctAnswer,
	});
}

//Analisis de respuestas
function goToList() {
	if (questionsAcc < questions.length - 1) {
		questionsAcc++;
		gameQuestions();
		document.getElementById('answer').focus()
	} else if (questionsAcc === questions.length - 1 && correctAnswer + incorrectAnswer === questions.length) {
		clearInterval(timerGenerate);
		userGenerator();
		generateBestPlayers();
	} else if (questionsAcc === questions.length - 1) {
		questionsAcc = 0;
		gameQuestions();
	};
}

//Generar clasificación de usuarios
function generateBestPlayers() {
	document.getElementById('container_menu').style.visibility = "hidden";
	document.getElementById('container_game').style.visibility = "hidden";
	document.getElementById('container_best_players').style.visibility = "visible";
	function list() {
		function gameRanking() {
			userGameBox.sort(function (a, b){
				return (b.points - a.points)
			});
		}
		gameRanking();
		var filterUser = userGameBox.filter(function(value) {
			return (value.user)
		});
		for(var i = 0; i < filterUser.length; i++) {
			document.getElementById('first').innerHTML = ('<span style="color:orange">' + filterUser[0].user + '</span>' + ' con un total de: ' + filterUser[0].points + ' puntos');
			document.getElementById('second').innerHTML = ('<span style="color:orange">' + filterUser[1].user + '</span>' + ' con un total de: ' + filterUser[1].points + ' puntos');
			document.getElementById('third').innerHTML = ('<span style="color:orange">' + filterUser[2].user + '</span>' + ' con un total de: ' + filterUser[2].points + ' puntos');
			document.getElementById('fourth').innerHTML = ('<span style="color:orange">' + filterUser[3].user + '</span>' + ' con un total de: ' + filterUser[3].points + ' puntos');
			document.getElementById('fifth').innerHTML = ('<span style="color:orange">' + filterUser[4].user + '</span>' + ' con un total de: ' + filterUser[4].points + ' puntos');
		};
	}
	list()
}

//Mostrar clasificación desde menú principal
function showBestPlayers() {
	document.getElementById('container_menu').style.visibility = "hidden";
	document.getElementById('container_best_players').style.visibility = "visible";
	document.getElementById('name_intro').style.visibility = "hidden";
}

//Mostrar instrucciones del juego
function showInstructions() {
	document.getElementById('container_menu').style.visibility = "hidden";
	document.getElementById('container_instructions').style.visibility = "visible";
	document.getElementById('name_intro').style.visibility = "hidden";
}

//Cuenta atrás
function timer() {
	var timerPanel = document.getElementById("timer");
	timerPanel.innerHTML = "180";
	timeLeft = 180;
	timerGenerate = setInterval(function() {
		timeLeft--;
		if (timeLeft <= 10 ) {
			timerPanel.style.color = "red";
		};
		if (timeLeft === 0) {
			clearInterval(timerGenerate);
			userGenerator();
			generateBestPlayers();
		}
		timerPanel.innerHTML = timeLeft;
	},1000)
}