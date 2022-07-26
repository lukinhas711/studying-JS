// Manipulando arrays

let nomes = ["Lucas", "Leonardo"];
console.log("Array completo", nomes);

nomes.pop();
console.log("removendo o ultimo nome", nomes);

nomes = ["Lucas", "Leonardo"];
nomes.shift();
console.log("removendo o primeiro nome", nomes);

nomes = ["Lucas", "Leonardo"];
nomes.push("Karina");
console.log("adicionando item ao fim do array", nomes);

nomes = ["Lucas", "Leonardo"];
nomes.unshift("Karina");
console.log("adicionando item no começo do array", nomes);

nomes = ["Lucas", "Leonardo", "Meire", "Sandro", "Karina"];
console.log("Array completo", nomes);
console.log("removendo de trás para frente um item", nomes.slice(0, -1));

nomes = ["Lucas", "Leonardo", "Meire", "Sandro", "Karina"];
console.log(
  "vai selecionar o array do indice 1 até o indice 3",
  nomes.slice(1, 4)
);

nomes = ["Lucas", "Leonardo", "Meire", "Sandro", "Karina"];
let idades = ["12", "18", "20"];
console.log("arrays separados", nomes, idades);
// juntando os dois arrays com o spreed
console.log("sem o spreed", [nomes, idades]);
console.log("usando o spreed", [...nomes, ...idades]);

// !...................................................
//* Filter
//? O filter vai pegar o nosso array e criar um novo array filtrado com os valores que nossa função de callback esta buscando

let numeros = ["01", "02", "03", "12", "18", "20"];
console.log("numeros", numeros);
const filtrados = numeros.filter((valor) => valor > 10); //? A função filter manda como parametro para a função de callback o valor, indice e array completo
console.log("FILTER numeros filtrados para maiores que 10:", filtrados);

//? Retornar um array com nomes com mais de 5 letras
//? Retornar as pessoas maiores de 25 anos
//? Retornar as pessoas que terminam com a letra O

let pessoas = [
  { nome: "Lucas", idade: 24 },
  { nome: "Karina", idade: 28 },
  { nome: "Leonardo", idade: 18 },
  { nome: "Sandro", idade: 44 },
  { nome: "Meire", idade: 45 },
];

let pessoasNomeGrande = pessoas.filter((valor) => valor.nome.length > 5);
let pessoasMaioresDe24 = pessoas.filter((valor) => valor.idade > 24);
let pessoasQueAcabamEmO = pessoas.filter((valor) => valor.nome.endsWith("o"));

console.log("nome grande", pessoasNomeGrande);
console.log("maiores de 24", pessoasMaioresDe24);
console.log("acaba em A", pessoasQueAcabamEmO);

//* MAP
//? O Map ira percorrer o nosso array executar a nossa função de callback para cada item do array e retornar os valores obtidos em um novo array

numeros = ["01", "02", "03", "12", "18", "20"];
const numerosDobrados = numeros.map((valor) => valor * 2);
console.log("numeros dobrados", numerosDobrados);

//? Retornar apenas uma string com o nome da pessoa
//? Remover a chave nome do objeto
//? adicionar uma chave id em cada objeto

const nomesOnly = pessoas.map((valor) => valor.nome);
console.log("apenas o nome", nomesOnly);

const idadeOnly = pessoas.map((valor) => {
  delete valor.nome;
  return valor;
});
console.log("apenas a idade", idadeOnly);

pessoas = [
  { nome: "Lucas", idade: 24 },
  { nome: "Karina", idade: 28 },
  { nome: "Leonardo", idade: 18 },
  { nome: "Sandro", idade: 44 },
  { nome: "Meire", idade: 45 },
];

const id = pessoas.map((valor, i) => {
  valor.id = i;
  return valor;
});

console.log("array com id", id);
