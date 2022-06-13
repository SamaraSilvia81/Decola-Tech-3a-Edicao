// Solução 1

function verificaPalindromo(string){

    if(!string) return "string inexistente"; /* Se a "String" não existir, logo diferente de "true", então sai da função e acaba*/

    let palindromo = string.split("").reverse().join("");
    console.log(`\nA sua palavra inversa é ${palindromo}`);

    return `A sua palavra é um palíndromo? ${string.split("").reverse().join("") === string}`; /* Se string tiver valor aplica isso. */
    
    /* Quando a gente usou o split automaticamente a string se tornou um arrya com todos os caracteres.
    Join junta tudo. */
}

//console.log(verificaPalindromo(""));

// Solução 2 

function verificaPalindromo2(string){

    if(!string) return "string inexistente"; /* Sai da função e acaba*/

    for(let i = 0; i<string.lenght/2;i++){

        if(string[i] !== string[string.lenght-1-i]){ 
            return false;
        }
    }

    return true; // Se nada retornar false, então retorna true.

/* Essa segunda forma tem como objetivar comparar o caractere no 1° índice com o último índice,
pois se se for diferente, então já não é um palíndromo.*/

}

console.log(verificaPalindromo2("preto"));



