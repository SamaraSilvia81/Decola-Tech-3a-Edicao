function validaArray(array,num){

   try{

   if (!array && !num) throw new ReferenceError('Envie os parâmetros!');

		if (typeof array !== 'object')
			throw new TypeError('Envie um array do tipo object!');

		if (typeof num !== 'number')
			throw new TypeError('Envie num do tipo Number!');

		if (array.length !== num) throw new RangeError('Tamanho do array inválido!');

		return "O envio está conforme o esperado!";  // Ou só retorna o array.

   } catch(e){

       //Vamos filtrar os erros pelos seus tipos.

    if(e instanceof ReferenceError){
        console.log("Este erro é um ReferenceError");
        console.log(e.message);
    } else if(e instanceof TypeError){
        console.log("Este erro é um TypeError");
        console.log(e.message)
    } else if(e instanceof RangeError){
        console.log("Este erro é um RangeError");
        console.log(e.stack)
    } else{
        console.log("Tipo de Erro não esperado: " + e);
    }
   }
}

// console.log(validaArray()); // Reference Error
//console.log(validaArray(5,4)); // TypeError - "Array" Precisa ser Array
// console.log(validaArray([],"a")); // TypeError - "Num" Precisa ser Number
//console.log(validaArray([],5)); // RangeError 
console.log(validaArray([1,'Samara',3,4,'Food'],5)); // Tudo Certo!
