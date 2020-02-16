let formulario = document.querySelector('.search-form');
let input = document.querySelector('input.search');
let lista = document.querySelector('ul');

formulario.addEventListener('submit', verPalabra);


function verPalabra(e){
	e.preventDefault();

	word = input.value;

	let palabraFinal = word;

	input.value = '';

	word = word.toLowerCase();

word = Array.from(word); word.sort();

let arr = []; let contador = 1; let letra;

function func (letra, contador){
	let obj = {};
	obj[letra] = contador;
	arr.push(obj);
}

for (var i = 0; i < word.length; i++) {
	if(letra === undefined){
		letra = word[i];
	} else if (letra !== word[i]) {
		func(letra, contador);
		letra = word[i];
		contador = 1;
	} else {
		contador++;
	}
	if (i+1 === word.length) {
		func(letra, contador);
		letra = word[i];
		contador = 1;
	}
}

let html = `<li>La cadena de texto \'${palabraFinal}\' contiene las siguientes letras: </li>`;

arr.forEach(function(obj){
	let vez = 'vez';
	letter = Object.keys(obj);
	if(letter == ' '){letter = 'espacio'};
	if(Object.values(obj) > 1){vez = 'veces'};
	html += `<li>El carácter '${letter}' aparece ${Object.values(obj)} ${vez}</li>`
})

lista.innerHTML = html;

}