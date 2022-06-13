const button = document.getElementById('mode-selector');
const h1 = document.getElementById('page-title');
const body = document.getElementsByTagName('body')[0];
const footer = document.getElementsByTagName('footer')[0];
const darkModeClass = 'dark-mode';

// Uma boa prática no JS é que cada função execute uma coisa só.

function changeMode(){
    changeClasses();
    changeText();
}

function changeClasses(){
    button.classList.toggle(darkModeClass);
    h1.classList.toggle(darkModeClass); // o toggle permite que quando você clicar ative a classDark e quando clicar de novo desative.
    body.classList.toggle(darkModeClass);
    footer.classList.toggle(darkModeClass);
}

function changeText(){

    const lightMode = "Light Mode";
    const darkMode = "Dark Mode";

    if(body.classList.contains(darkModeClass)){// contains vai vê se dentro da classList button existe algo que queremos.
        button.innerHTML = lightMode;
        h1.innerHTML = darkMode + ' ON';
        return;  // se já tiver encerra a função.
    }

    button.innerHTML = darkMode;
    h1.innerHTML = lightMode + ' ON';

};


button.addEventListener('click', changeMode);

console.log(body) // retorna uma lista, então precisa selecionar por index.
console.log(button) // se eu quiser saber se selecionei certo.

// Dica de VS-CODE: ctrl-d para selecionar nomes semelhantes.