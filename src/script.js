const livros = ["Javascript Assertivo", "Engenharia de Testes", "Clean code", "Scrum", "Guia HTML5 e CSS3", "MongoDB"];

console.log(livros);

//adicionar novo livro chamado "Express", no index 1.
const adicionar = livros.unshift('Express');
console.log(livros);

//Remover o último livro "MongoDB"
const removerUltimo = livros.pop();
console.log(livros);

//Imprimir a quantidade de elementos na array
console.log(livros.length);

//Imprimir a lista de todos os elementos do array | realizará a impressão em ordem alfabética
livros.sort();
console.log(livros);

//Imprimir a lista de todos os elementos do array
livros.forEach(function(item, indice, array){
  console.log(item);
});

//ou
livros.forEach(elementos => console.log(elementos));

//Para saber a posição do Array
console.log(livros.indexOf('Scrum'));

//Problema: A biblioteca SENAC precisa atualizar o sistema de controle de livros. O objetivo é do sistema sempre manter a lista e quantidade de livros sempre que for reservado e devolvido algum livro.
//Crie um array e use uma estrutura condicional (if e else) para controlar a saída e entrada de livros.
//dados de entrada | dados de saída | processamento

const livrosSenac  = ['Código Limpo', 'Algoritimos e lógica de programação', 'Java como programar', 'Estatística prática', 'Lógica de programação', 'Trilhas Python'];
console.log(livrosSenac);

const alugar = true;
const disponivel = true;
const removedItem = (livrosSenac.splice(3, 1)); //3posição e 1 é a quantidade.
const adicionarItem = (livrosSenac.splice(3, 1));
const devolver = true;
const livrosDisponíveis = livrosSenac.forEach(elementos => console.log(elementos));

if (disponivel === true && alugar === true){
  console.log(removedItem, "Livro alugado!")
  livrosSenac.forEach(elementos => console.log(elementos));
} else{
  console.log("Livro indisponível!")
}


if (devolver === true){
  console.log(adicionarItem, "Livro foi devolvido!")
}




