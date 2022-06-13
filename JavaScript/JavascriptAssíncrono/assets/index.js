const BASE_URL = 'https://aws.random.cat/meow';
const catBtn = document.getElementById('change-cat');
const catImg = document.getElementById('cat');

/* Usando Try/Catch

const getCats = async () => {

    try{
        const data = await fetch(BASE_URL);
        const json = await data.json();

        return json.file;
    }catch(e){
        console.log(e.message);
    }
};*/

const getCats = async () => {
    const data = await fetch(BASE_URL)
       .then(res=> res.json())
       .catch(e=> console.log(e))
    
    return data.file;
};

const loadImg = async() => {
    catImg.src = await getCats();
}

catBtn.addEventListener('click',loadImg);
loadImg(); // Para o site já começar com uma imagem.


/* 1. Armazenamos a url do API dentro de uma const, assim como os elemntos do html;
2. Fizemos uma arrow function para pegar os dados dessa API. Para isso usamos o método Try/Catch 
para analisar o que vamos pegar e se houver algum erro reportá-lo.
Declaramos que essa função era assíncrono com async;
No "try" armazenamos a url da api com o método fetch e também transformamos os dados pegos em json;
E depois retornamos como json uma propriedade específica;

3. Fazemos outra arrow function, pois queremos que a imagem do gato seja direcionada para onde está o elemento img identificado pelo id - cat;
Assim, quando clicar no botão a imagem pega estará nesse local.
*/

