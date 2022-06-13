let n1 = Number(prompt("Digite um número:"));
let n2 = Number(prompt("Digite outro número:"));
let soma = n1+n2;

function comparacao(n1,n2){

    if(isNaN(n1) || isNaN(n2)){
        alert("Erro - Parâmetros Inválidos");
    } else{

        if(n1===n2){
            if(soma>10 && soma<20){
                alert(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20`)
                novaComparacao();
            } else if(soma<10 && soma<20){
                alert(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20`)
                novaComparacao();
            } else if (soma==10 && soma<20){
                alert(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é igual a 10 e menor que 20`)
                novaComparacao();
            } else if(soma>10 && soma>20){
                alert(`Os números ${n1} e ${n2} são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20`)
                novaComparacao();
            }
        } else{
            if(soma>10 && soma<20){
                alert(`Os números ${n1} e ${n2} não são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20`)
                novaComparacao();
            } else if(soma<10 && soma<20){
                alert(`Os números ${n1} e ${n2} não são iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20`)
                novaComparacao();
            } else if (soma==10 && soma<20){
                alert(`Os números ${n1} e ${n2} não são iguais. Sua soma é ${soma}, que é igual a 10 e menor que 20`)
                novaComparacao();
            } else if(soma>10 && soma>20){
                alert(`Os números ${n1} e ${n2} não são iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20`)
                novaComparacao();
            }
        }

    }

    
}

comparacao(n1,n2);

