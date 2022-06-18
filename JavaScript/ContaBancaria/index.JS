/* Aplicar conceitos de orientação a objeto */

const agencia = document.getElementById('agencia');
const numero = document.getElementById('numero');
const tipo = document.getElementById('tipo');
const check = document.getElementById('btnCheck');
const saldoCB = document.getElementById('saldoCB');

class ContaBancaria{
    constructor(agencia,numero,tipo){
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0; //Sempre que tiver get/set usava-se _ para que a função get/set tiver nome saldo, mas a propriedade não terá esse nome.
    }

    get saldo(){
        return this._saldo;
    }

    set saldo(valor){
        this._saldo = valor;
    }

    sacar(valor){
        if(valor>this._saldo){
            return "Operação negada"
        }
        this._saldo = this._saldo - valor; 

        return this._saldo;
    }

    depositar(valor){
        this._saldo = this._saldo + valor; 

        return this._saldo;
    }
}

/* Classe contaCorrente e cartão de crédito*/

class ContaCorrente extends ContaBancaria{ // usamos para se conectar com a contaBancaria (pai).
    constructor(agencia,numero,cartaoCredito){
        super(agencia,numero,cartaoCredito); // vamos mandar tudo que recebemos para a conta pai, setando nessa contaCorrente.
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }

    get cartaoCredito(){
        return this._cartaoCredito;
    }

    set cartaoCredito(valor){
        this.cartaoCredito = valor;
    }
}

/*Conta poupança e universitária que recebe de contaBancaria */

class ContaPoupanca extends ContaBancaria{ 
    constructor(agencia,numero){
        super(agencia,numero); // vamos mandar tudo que recebemos para a conta pai, setando nessa contaCorrente.
        this.tipo = 'poupança';
    }
}

class ContaUniversitaria extends ContaBancaria{
    constructor(agencia,numero){
        super(agencia,numero);
        this.tipo = 'universitária';
    }

    sacar(valor){   // vamos sobrescrever o método scar.
        if(valor>500){
            return 'Operação negada!'
        }

        this._saldo = this_saldo - valor;
    }
}

// Polimorfismo - as contas filhas se comprotam diferente, mesmo quando herdam propriedades do pai.


/* if(tipo.value = 3){
    console.log('Conta Bancária foi ativada')
    criarContaBancaria();
    check.onclick = criarContaBancaria();
}
*/