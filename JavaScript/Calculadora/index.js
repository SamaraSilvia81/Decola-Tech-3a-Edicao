function calculadora (){
    const operacao = Number(prompt("Escolha uma operação:\n 1 - Soma(+)\n 2 - Substração(-)\n 3 - Multiplicação(*)\n 4 - Divisão real(/)\n 5 - Divisão Inteira(%)\n 6 - Potenciação(**)"));

    if(!operacao || operacao>=7){
        alert("Erro - Operação Inválida");
        calculadora();
    } else {

        let n1 = Number(prompt("Insira o 1° valor: "));
        let n2 = Number(prompt("Insira o 2° valor: "));
        let resultado;

        /*Estamos convertando, porque as operações estavam sendo concatenadas,
        pois o sistema estava interpretando como string. Além disso, usamos a 
        conversão no prompt, logo nas variáveis n1 e n2 e não no resultado, 
        porque estaríamos convertendo algo que já é número, só que concatenado. */

        if(!n1 || !n2){
            alert("Erro - Parâmetros inválidos");
            calculadora();
        } else{
            
            function soma(){
            resultado = n1+n2;
            alert(`${n1} + ${n2} = ${resultado}`)
            novaOperacao();
        }

        function subtracao(){
            resultado = n1-n2;
            alert(`${n1} - ${n2} = ${resultado}`)
            novaOperacao();
        }

        function multiplicacao(){
            resultado = n1*n2;
            alert(`${n1} * ${n2} = ${resultado}`)
            novaOperacao();
        }

        function divisaoReal(){
            resultado = n1/n2;
            alert(`${n1} / ${n2} = ${resultado}`)
            novaOperacao();
        }

        function divisaoInteira(){
            resultado = n1%n2;
            alert(`${n1} % ${n2} = ${resultado}`)
            novaOperacao();
        }

        function potenciacao(){
            resultado = n1**n2;
            alert(`${n1} ** ${n2} = ${resultado}`)
            novaOperacao();
        }
    }
 
        function novaOperacao(){
            let opcao = prompt("Deseja fazer outra operação?\n 1 - Sim\n 2 - Não");

            if(opcao == 1){
                calculadora();
            } else if(opcao==2){
                alert('Até logo!');
            } else{
                alert('Digite opção válida!');
                novaOperacao();
            }
        }

        /*if(operacao==1){
            soma();
        } else if(operacao==2){
            subtracao();
        } else if(operacao==3){
            multiplicacao();
        } else if(operacao==4){
            divisaoReal();
        } else if(operacao==5){
            divisaoInteira();
        } else if(operacao==6){
            potenciacao();
        }*/ 

        switch(operacao){
            case 1:
                soma();
                break;
                case 2:
                    subtracao();
                    break;
                    case 3:
                        multiplicacao();
                        break;
                        case 4:
                        divisaoReal();
                        break;
                        case 5:
                            divisaoInteira();
                            break;
                            case 6:
                                potenciacao();
                                break;

        }

        console.log(operacao); /*Forma de pegar entrada do usuário */
    }
}

calculadora();

