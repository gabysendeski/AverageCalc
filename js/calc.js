function media() {
	var n1 = parseFloat(document.getElementById("nota1").value);
	var n2 = parseFloat(document.getElementById("nota2").value);
	var n3 = parseFloat(document.getElementById("nota3").value);
	var n4 = parseFloat(document.getElementById("nota4").value);
	var media = parseFloat((n1 + n2 + n3 + n4) / 4);

	//Condição para verificar se a média é NaN antes de obter um valor
	if (Number.isNaN(media)) {
		media = -1;
	}
	if (media === -1) {
		document.getElementById("resp").innerText = "Informe todas as notas!";
	} else if (media >= 7) {
		document.getElementById("resp").innerText = `Sua nota é ${parseFloat(
			media
		).toFixed(2)} Aprovado!! `;
	} else {
		document.getElementById("resp").innerText = `Sua nota é ${parseFloat(
			media
		).toFixed(2)} Reprovado!! `;
	}
}

function resetNota() {
	document.getElementById("resp").innerText = "";
}

// Abaixo temos variáveis, eventos e funções para limitar o número máximo na entrada
// Variável para média máxima definida aqui
let averageMax = 10;

// Variáveis ​​que recebem ids de entradas
var average1 = document.getElementById("nota1");
var average2 = document.getElementById("nota2");
var average3 = document.getElementById("nota3");
var average4 = document.getElementById("nota4");

// Variável recebendo a função que define o número máximo para keyup e blur
var maxValue = maxNumber(averageMax);

// Variáveis ​​recebendo eventos para keyup/blur e atribuindo o maxValue ao id das entradas
average1.addEventListener("keyup", maxValue);
average1.addEventListener("blur", maxValue);
average2.addEventListener("keyup", maxValue);
average2.addEventListener("blur", maxValue);
average3.addEventListener("keyup", maxValue);
average3.addEventListener("blur", maxValue);
average4.addEventListener("keyup", maxValue);
average4.addEventListener("blur", maxValue);

// Função que limita maxValue para number(average scores) nas entradas após executar os eventos acima
function maxNumber(max) {
	var running = false;
	return function () {
		//Para evitar conflito entre blur e keyup
		if (running) return;
		//Para bloquear várias chamadas sobre blur e keyup
		running = true;
		//Para corrigir o valor padrão, se o valor na entrada for maior que maxValue (neste código, o máximo é 10)
		if (parseFloat(this.value) > max) {
			this.value = averageMax;
		}
		//Reativa chamadas de blur e keyup
		running = false;
	};
}
