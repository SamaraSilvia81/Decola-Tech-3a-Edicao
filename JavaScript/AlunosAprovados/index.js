/* Objetivo: Retornar uma lista de array com os nomes dos alunos aprovados 
1. Crie uma função que recebe o array e um número que irá representar a média final;
2. Percorra o array e popule um novo array auxiliar com os alunos cujas notas são maiores ou iguais à média final;
3. Utilize a téncica "object destructuring" para manipular as propriedades desejadas de cada aluno.
*/

const alunos = [

    {
        nome:'João',
        nota: 5,
        turma: '1B',
    },
    {
        nome:'Sofia',
        nota: 9,
        turma: '1B',
    },
    {
        nome:'Paulo',
        nota: 6,
        turma: '2C',
    },
    {
        nome:'Miguel',
        nota: 3,
        turma: '2C',
    },
    {
        nome:'Laura',
        nota: 1,
        turma: '2C',
    },
];

function alunosAprovados(alunos,media){
    
    let aprovados = [];

    for(let i = 0; i<alunos.length;i++){

        let { nota, nome } = alunos[i]; // método destructuring

        if (nota >= media) {
            aprovados.push(nome);
		} /*else {
            console.log(`${nome} não foi aprovado!`)
        }*/
    }

	return aprovados;
}

console.log(alunosAprovados(alunos, 5));

