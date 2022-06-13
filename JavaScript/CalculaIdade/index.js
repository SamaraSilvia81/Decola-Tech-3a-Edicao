function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
    nome: 'Samara',
    idade: 18
}

const pessoa2 = {
    nome: 'Lucas',
    idade: 28
}

const pessoa3 = {
    nome: 'Damon',
    idade: 34
}

const animal = {
    nome: 'Thor',
    idade: 5,
    raça: 'Pug'
}

console.log(calculaIdade.call(pessoa1,5)) 
console.log(calculaIdade.apply(animal,[9]))