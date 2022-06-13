const btnSub = document.getElementById("subtrair");
const btnPush = document.getElementById("adicionar");
let currentNumberWrapper = document.getElementById("currentNumber");
let currentNumber = 0;

btnSub.addEventListener('click',()=> {
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
  
    if(currentNumber < 0){
        btnSub.disabled = true;  /*Desabilita o botão quando o valor atual for menor que 0 */
        currentNumberWrapper.style = "color:red";
    } 
});

btnPush.addEventListener('click',increment);

function increment(){

   currentNumber = currentNumber + 1;
   currentNumberWrapper.innerHTML = currentNumber;

   if(currentNumber>=0) {
       btnSub.disabled = false;
       currentNumberWrapper.style = "color:black";
}
};


/* Forma B

let currentNumberWrapper = document.getElementById("currentNumber");
let currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;  // Sempre será adicionado mais um número;
    currentNumberWrapper.innerHTML = currentNumber; //Mudar o valor atual;
}

function decrement(){

    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

*/