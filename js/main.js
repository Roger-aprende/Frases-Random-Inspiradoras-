// Selecionando Modelos a seguir (Basicamente lo que estoy usando como base de datos para mis frases, deseo y tips)
const frases = new Cfrases();
const deseos = new Cdeseos();
const tips = new Ctips();
// //Todos los atributos de las clases los convertimos en elementos de un array
let keyFrases = Object.keys(frases);
let keyDeseos = Object.keys(deseos);
let keyTips = Object.keys(tips);

let modal = document.querySelector('dialog');
let menssageTitle = document.querySelector(".modal__title");
let menssageText = document.querySelector(".modal__p");
let btmModalClose = document.querySelector('.modal-close');
let modalEmoji = document.querySelector('.modal__emoji');

let elements = document.querySelectorAll('#selector');
console.log(elements);
let menssageD = "Deseo";
let menssageT = "Tips";
let menssageF = "Frase";

elements.forEach(currentValue =>{
    currentValue.addEventListener('click', () =>{
        if(currentValue.getAttribute('class') === 'deseo'){
            menssageTitle.innerHTML = menssageD;
            menssageText.innerHTML = deseos[keyDeseos[randomDeseo()]];
            modalEmoji.innerHTML = "💖"
            openModal();
        } 

        if(currentValue.getAttribute('class') === 'tip'){
            menssageTitle.innerHTML = menssageT;
            menssageText.innerHTML = tips[keyTips[randomTip()]];
            modalEmoji.innerHTML = "🌟";
            openModal();

        }

        if(currentValue.getAttribute('class') === 'frase'){
            menssageTitle.innerHTML = menssageF;
            menssageText.innerHTML = frases[keyFrases[randomFrase()]];
            modalEmoji.innerHTML = "🏆";
            openModal();
        }
    })
});

btmModalClose.addEventListener('click', closeModal);



// ===================
// =    Funciones    =
// ===================
function openModal(){
    modal.classList.add('modal');
    modal.showModal();
}

function closeModal(){
    modal.classList.remove('modal');
    modal.close();
}

function randomFrase(){
    let frase = Math.floor(keyFrases.length * Math.random());
    return frase;
}

function randomDeseo(){
    let deseo = Math.floor(keyDeseos.length * Math.random());
    return deseo;
}

function randomTip(){
    let tip = Math.floor(keyTips.length * Math.random());
    return tip;
}

// let tip = Math.floor(keyTips.length * Math.random());
let tip = Math.floor(5 * Math.random());
















