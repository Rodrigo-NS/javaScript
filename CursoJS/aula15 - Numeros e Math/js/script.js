const numero = Number(prompt('Digite um número:'));
const numeroTitulo = document.getElementById('numero-titulo');//Seleciona o elemento pelo ID no HTML
const texto = document.getElementById('texto');

numeroTitulo.innerHTML = numero;
//texto.innerHTML = `<p>Seu numero + 2 é ${numero + 2}</p>`;
texto.innerHTML = '';
texto.innerHTML += `<p>Raiz quadrada: ${numero ** 0.5 }.</p>`;
texto.innerHTML += `<p> ${numero + 2} é inteiro? ${ Number.isInteger(numero) }</p>`;
texto.innerHTML += `<p>É NaN: ${ Number.isNaN(numero) }</p>`;
texto.innerHTML += `<p>Arredondando para baixo: ${ Math.floor(numero) }</p>`;
texto.innerHTML += `<p>Arredondando para cima: ${Math.ceil(numero)}</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${ numero.toFixed(2)}</p>`;
