// ! defineProperty e definePorperties

//* Com o definePoperty nos podemos criar propriedades mais complexas nos Objetos EX:

function criaPessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  Object.defineProperty(this, "idade", {
    value: idade, // ? Atribui o valor da chave como a variável idade passada como parâmetro
    enumerable: true, // ? Diz se a chave pode ser mostrada
    writable: false, // ? Diz se o valor da chave pode ser alterado
    reconfigurable: false, // ? Diz se a propriedade criada pode ser reconfigurada em alguma outra parte do código isso inclui apagar a propriedade
  });
}

// ? Se eu der um console.log() nas chaves do objeto ele mostraria todas às três chaves [nome, sobrenome e idade] porque a opção enumerable esta validada como verdadeira, do contrário mostraria apenas [nome e sobrenome]

// * Mas caso precise configurar mais de uma chave do objeto podemos usar definePoperties EX:

function criaPessoa2(nome, sobrenome, idade) {
  Object.defineProperties(this, {
    nome: {
      value: nome,
      enumerable: true,
      writable: false,
      reconfigurable: false,
    },
    sobrenome: {
      alue: sobrenome,
      enumerable: true,
      writable: false,
      reconfigurable: false,
    },
    idade: {
      alue: idade,
      enumerable: true,
      writable: true,
      reconfigurable: false,
    },
  });
} // ? Assim configuramos várias chaves sem precisar chamar o método definePoperty varias vezes

// ! GETTERS E SETTERS
// TODO: Pesquisar o conseito de getter and setter

// ? Primeiro o Getter normalmente serve para pegar um valor que você esteja buscando EX:

function criaPessoaGet(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  Object.defineProperty(this, "idade", {
    enumerable: true,
    get: function () {
      return idade; // ? O get será um método que ira apenas retornar o valor de idade
    },
  });
}

const pessoa1 = new criaPessoaGet("Lucas", "Ribeiro", 24);
//console.log("mostrando o getter", pessoa1.idade);

// ? O método setter vai pegar o valor passado apos o sinal de atribuição e passar para dentro da função set, e aí nos podemos fazer nossa lógica para validar se esse valor é o que nos esperamos.

function criaPessoaSet(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  Object.defineProperty(this, "idade", {
    enumerable: true,
    get: function () {
      return idade;
    },
    set: function (value) {
      if (typeof value !== "number") {
        console.log("a idade precisa ser um numero");
        return;
      }

      idade = value;
    },
  });
}

const pessoa3 = new criaPessoaSet("lucas", "rafael", 18);
console.log("Idade inicial", pessoa3.idade);
pessoa3.idade = "lucas"; // ! O valor não sera alterado pois precisa ser um número
pessoa3.idade = 5; // valor alterado
console.log("idade alterada", pessoa3.idade);

// ? Em suma o set irá interceptar os valores passados para as chaves através do operador de atribuição [=] e dentro do método set nos podemos tratar esse valor, seja para validar, ou adicionar elementos e etc

// * Métodos uteis para objetos

// ? Nós podemos usar o spreed para copiar um objeto para outra variavel EX:

const produto = { nome: "Camiseta", preço: 18 };
// ? Agora com o spreed nos espalhamos o produto em um objeto de outra variável

const outroProduto = { ...produto };
outroProduto.nome = "Bermuda";
console.log("mostrando produto", produto);
console.log("outro produto", outroProduto);

// ? Como o spreed apenas espalha um array ou objeto dentro do outro, podemos ainda adicionar outras chaves dentro do outroProduto.

// ? Outra maneira que temos para copiar os objetos é utilizando o assign() que pode receber como parâmetro o novo objeto e o objeto que você deseja copiar EX:

const camisa = Object.assign({}, produto); // ? Agora podemos alterar as chaves desse objeto chamando a variável camisa.

// ? Para observar as chaves de um objeto podemos utilizar Object.keys(objeto)
// ? Para congelar um objeto podemos utilizar Object.freeze(objeto)

// ! Object.getOwnPropertyDescriptor(objeto, 'propriedade') esse método vai nos mostrar a configuração que a propriedade possui, mesmo se nós não tivermos definido ela com defineProperty

console.log(
  "mostrando a configuração da propriedade nome de produto:",
  Object.getOwnPropertyDescriptor(produto, "nome")
);

// ? Semelhante ao keys() podemos usar o values() para pegar o valor de cada chave do objeto e colocar dentro de um array EX:

console.log(
  "Mostrando os valores das chaves de produtos:",
  Object.values(produto)
);

// ? Agora se quisermos dividir nosso objeto em chave e valor, podemos usar o entries() EX:

console.log("Dividindo chave e valor:", Object.entries(produto));

// Todos os objetos possuem uma propriedade prototype na qual o javascript ja se encarrega de fazer referencia, caso nos precisemos criar uma função construtora para nossa aplicação mas ela tem alguns metodos que podem deixar a aplicação lente se formos usar ela para criar varios outros objetos, nos podemos usar o prototype para fazer com que todas os objetos criados a partir da nossa função construtora possua aquela metodo sem realmente precisar carregar o metodo dentro de cada objeto que criarmos EX:

const Pessoa = function (nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
};

Pessoa.prototype.nomeCompleto = function () {
  return `${this.nome} ${this.sobrenome}`;
};

const lucas = new Pessoa("Lucas", "Ribeiro");
const leonardo = new Pessoa("Leonardo", "Ribeiro");

console.log("usando o prototype 1", lucas.nomeCompleto());
console.log("usando o prototype 2", leonardo.nomeCompleto());
