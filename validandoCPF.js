// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/

function ValidateCPF(cpf) {
  Object.defineProperty(this, "cleanCPF", {
    get: function () {
      return cpf.replace(/\D+/g, ""); // Vai pegar nosso cpf e remover tudo o que não for numero e nos retornar apenas os numeros
    },
  });
}

ValidateCPF.prototype.validate = function () {
  if (typeof this.cleanCPF === "undefined") return false; // vai parar a função se nenhum cpf for passado
  if (this.cleanCPF.length != 11) return false; // vai parar a função se não tiver o numero de caracteres corretos
  if (this.isSequence()) return false;
  const partialCPF = this.cleanCPF.slice(0, -2); // vai pegar os nossos numeros do cpf sem os dois ultimos digitos
  const firstNumber = this.crerateNumbers(partialCPF); // a função que somara todos os numeros e pegará o primeiro digito da altentificação
  const secondNumber = this.crerateNumbers(partialCPF + firstNumber); // a função que somara todos os numeros e pegará o primeiro digito da altentificação
  const newCPF = partialCPF + firstNumber + secondNumber;
  return newCPF === this.cleanCPF;
};

ValidateCPF.prototype.crerateNumbers = function (partialCPF) {
  const cpfArray = Array.from(partialCPF);
  let reg = cpfArray.length + 1;
  let total = cpfArray.reduce((ac, val) => {
    ac += reg * Number(val);
    reg--;
    return ac;
  }, 0);

  number = 11 - (total % 11);
  return number > 9 ? "0" : String(number);
};

ValidateCPF.prototype.isSequence = function () {
  const sequence = this.cleanCPF[0].repeat(this.cleanCPF.length);
  return sequence === this.cleanCPF;
};

const cpf = new ValidateCPF("705.484.450-52");

console.log(cpf.validate());
