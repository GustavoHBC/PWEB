function Conta() {
    var nomeCorrentista = '';
    var banco = '';
    var numeroConta = '';
    var saldo = '';

    this.getNomeCorrentista = nomeCorrentista;
    this.getBanco = banco;
    this.getNumeroConta = numeroConta;
    this.getSaldo = saldo;

    this.setNomeCorrentista = function(value) { return nomeCorrentista = value };
    this.setBanco = function(value) { return banco = value };
    this.setNumeroConta = function(value) { return numeroConta = value };
    this.setSaldo = function(value) { return saldo = value };
}

function Corrente() {
    var saldoEspecial;
    var dataVencimento;

    this.getSaldoEspecial = saldoEspecial;
    this.getDataVencimento = dataVencimento;

    this.setSaldoEspecial = function(value) { return saldoEspecial = Number(value) };
    this.setDataVencimento = function(value) { return dataVencimento = value };
}

function Poupanca() {
    var saldoEspecial;
    var dataVencimento;

    this.getSaldoEspecial = saldoEspecial;
    this.getDataVencimento = dataVencimento;

    this.setSaldoEspecial = function(value) { return saldoEspecial = Number(value) * 1.002 };
    this.setDataVencimento = function(value) { return dataVencimento = value };
}

Corrente.prototype = new Conta();
Poupanca.prototype = new Conta();

const contaCorrente = new Corrente();
contaCorrente.setNomeCorrentista('Gustavo');
contaCorrente.setBanco('Nubank');
contaCorrente.setNumeroConta('0001234');
contaCorrente.setSaldo('100');
contaCorrente.setSaldoEspecial('100');
contaCorrente.setDataVencimento(new Date());

const corrente = {
    saldo: contaCorrente.getSaldoEspecial,
    dataVencimento: contaCorrente.getDataVencimento,
}

const contaPoupanca = new Poupanca();
contaPoupanca.setNomeCorrentista('Gustavo');
contaPoupanca.setBanco('Nubank');
contaPoupanca.setNumeroConta('0001234');
contaPoupanca.setSaldo('100');
contaPoupanca.setSaldoEspecial('100');
contaPoupanca.setDataVencimento(new Date());

const poupanca = {
    saldo: contaPoupanca.getSaldoEspecial,
    dataVencimento: contaPoupanca.getDataVencimento,
}
