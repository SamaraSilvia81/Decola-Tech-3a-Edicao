function validaArray(array,num){
    
    if(typeof(validaArray) == 'undefined'){
        new Error([message], [fileName], [lineNumber])
        const meuErro = new ReferenceError('Mensagem Inválida')
        throw meuErro;
    } else if(typeof(array) != 'Null'){
        new Error([message], [fileName], [lineNumber])
        const meuErro2 = new TypeError('Mensagem Inválida')
        throw meuErro2;
    } else if(array.lenght != num){
        new Error([message], [fileName], [lineNumber])
        const meuErro3 = new RangeError('Mensagem Inválida')
        throw meuErro3;
    } else{
        console.log(`O texto digitado foi ${array} com tamanho ${num}`)
    }
}

function validaArray(array,num){

    try{
        return validaArray(array,num)
    }catch(e){
        meuErro instanceof ReferenceError;
        meuErro2 instanceof TypeError;
        meuErro3 instanceof RangeError;
    }
}

let array = ["Samara", 1];

validaArray(array,2);