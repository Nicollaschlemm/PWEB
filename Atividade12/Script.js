//calculo da area de um triangulo
/**function Triangulo(x, y) {
   this.base = x;
   this.altura = y;
}

var areaTriangulo = new Triangulo();
areaTriangulo.altura = parseInt(prompt("Digite a altura do triangulo"));
areaTriangulo.base = parseInt(prompt("Digite a base do triangulo"));

area = areaTriangulo.base * areaTriangulo.altura / 2;
alert("A area do seu triangulo é: " + area);
***/
//banco
class Conta {
   constructor() {
      this.nome;
      this.banco;
      this.conta;
      this.saldo;
   }

   getNome() {
      return this.nome;
   }

   setNome(nome) {
      this.nome = nome;
   }

   getBanco() {
      return this.banco;
   }

   setBanco(banco) {
      this.banco = banco;
   }

   getConta() {
      return this.conta;
   }

   setConta(conta) {
      this.conta = conta;
   }

   getSaldo() {
      return this.saldo;
   }

   setSaldo(saldo) {
      this.saldo = saldo;
   }
}

class ContaCorrente extends Conta {
   constructor() {
      super();
      this.saldoEspecial;

   }

   getSaldoEspecial() {
      return this.saldoEspecial;
   }

   setSaldoEspecial(saldoEspecial) {
      this.saldoEspecial = saldoEspecial;
   }

}

class ContaPoupanca extends Conta {
   constructor() {
      super();
      this.juros;
      this.dataVencimento;

   }

   getJuros() {
      return this.juros;
   }

   setJuros(juros) {
      this.juros = juros;
   }

   getDataVencimento() {
      return this.dataVencimento;
   }

   setDataVencimento(dataVencimento) {
      this.dataVencimento = dataVencimento;
   }

}

Corrente = new ContaCorrente();
Corrente.setNome = (prompt("CONTA CORRENTE\nDigite o nome do detentor da conta:"));
Corrente.setBanco = (prompt("Digite o nome do banco:"));
Corrente.setConta = (parseInt(prompt("Digite o número da conta:")));
Corrente.setSaldo = (parseFloat(prompt("Digite o saldo:")));
Corrente.setSaldoEspecial = (parseFloat(prompt("Valor saldo especial:")));

alert(`CONTA CORRENTE\nNome do detentor:${Corrente.getNome()}
Banco:${Corrente.getBanco()}
Conta:${Corrente.getConta()}
Saldo:${Corrente.getSaldo()}
Valor de saldo especial:${Corrente.getSaldoEspecial()}`)

Poupanca = new Poupanca();
Poupanca.setNome = (prompt("CONTA POUPANÇA\nDigite o nome do detentor da conta:"));
Poupanca.setBanco = (prompt("Digite o nome do banco:"));
Poupanca.setConta = (parseInt(prompt("Digite o número da conta:")));
Poupanca.setSaldo = (parseFloat(prompt("Digite o saldo:")));
Poupanca.setJuros = (parseFloat(prompt("Juros da conta poupança:")));
Poupanca.setDataVencimento = (prompt("Data de vencimento:"));

alert(`CONTA POUPANÇA\nNome do detentor:${Poupanca.getNome()}
Banco:${Poupanca.getBanco()}
Conta:${Poupanca.getConta()}
Saldo:${Poupanca.getSaldo()}
Juros:${Poupanca.getJuros()}
Data de vencimento:${Poupanca.getDataVencimento()}`);