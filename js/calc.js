function media() {
	var n1 = parseFloat(document.getElementById("nota1").value);
	var n2 = parseFloat(document.getElementById("nota2").value);
	var n3 = parseFloat(document.getElementById("nota3").value);
	var n4 = parseFloat(document.getElementById("nota4").value);
	var media = parseFloat((n1 + n2 + n3 + n4) / 4);
	if (media >= 7) {
		document.getElementById("resp").innerText = `Sua nota é ${parseFloat(
			media
		).toFixed(2)} Aprovado! `;
	} else {
		document.getElementById("resp").innerText = `Sua nota é ${parseFloat(
			media
		).toFixed(2)} Reprovado! `;
	}
}
