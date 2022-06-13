class alunosAprovados { 
    constructor(paramNome, paramNota){
         this.nome = paramNome; 
         this.nota = paramNota;     
    } calculaAprovacao(paramNome, paramNota) { 
        
        let aprovados = [];
        
        for(let i = 0;i<paramNome.length;i++){
            
            if(paramNota[i]>=7){
                console.log(aprovados.push(paramNome[i].nome + "foi aprovado"));
            } return console.log(`${paramNome[i]} não foi aprovado`)
        }

        return aprovados;
    }
} 

var aluno1 = new alunosAprovados("Samara", 10);
var aluno2 = new alunosAprovados("Carlos", 3);

aluno1.calculaAprovacao(); //12 
aluno2.calculaAprovacao(); //30
