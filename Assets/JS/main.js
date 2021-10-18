//ARRAYS TO USE
const items = [
    './img/01.jpg',
    './img/02.jpg',
    './img/03.jpg',
    './img/04.jpg',
    './img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

//Elementi da utilizzare
const btnDown = document.getElementById("select_down")
const btnUp = document.getElementById("select_up")


//Stabilire il ciclo per le immagini di lato
for (let n = 0; n < items.length; n++) {
    const imgElement = items[n];
    const countryImg = `<li class= "box--${n}"><img src=${items[n]} alt=""></img></li>`
    document.querySelector('.places').insertAdjacentHTML("beforeend", countryImg)


}


//Stabilire il variabile per hero img
var i = 0;
document.querySelector(`.box--0`).classList.add('selected')


//CYCLE DOWN FUNCTION
btnDown.addEventListener('click', function () {

    //HERO IMAGE SELECTOR
    if (i < items.length - 1) {
        i++;

    } else if (i = items.length) {
        i = 0;

    }

    document.getElementById("hero_img").src = items[i];
    document.querySelector('.title').innerHTML = title[i];
    document.querySelector('.text').innerHTML = text[i];

    //HIGHLIGHT SELECTOR
    var select = document.querySelector(`.box--${i}`)
    select.classList.add('selected')
    var deselect = document.querySelector(`.box--${i - 1}`)

    if (i == 0) {
        document.querySelector(`.box--4`).classList.remove('selected')
    } else if (i <= items.length) {
        deselect.classList.remove('selected');
    }



})
//CYCLE UP FUNCTION
btnUp.addEventListener('click', function () {

    //HERO IMAGE SELECTOR
    if (i > 0) {
        i--;

    } else {
        i = 4;
    }

    document.getElementById("hero_img").src = items[i];
    document.querySelector('.title').innerHTML = title[i];
    document.querySelector('.text').innerHTML = text[i];

    //HIGHLIGHT SELECTOR
    var select = document.querySelector(`.box--${i}`)
    select.classList.add('selected')
    var deselect = document.querySelector(`.box--${i + 1}`)

    if (i == items.length - 1) {
        document.querySelector(`.box--0`).classList.remove('selected')
    } else if (i <= items.length) {
        deselect.classList.remove('selected');
    }

})



