// Get Label Element
let name_label = document.querySelector('.name-label');
let cvv2_label = document.querySelector('.cvv2-label');
let number_card_label = document.getElementsByClassName('card_number-label');
let month_label = document.querySelector('.month-label');
let year_label = document.querySelector('.year-label');
let card = document.querySelector('.card');
// Get Input Element
let name = document.querySelector('.name');
let cvv2 = document.querySelector('.cvv2');
let number_card = document.getElementsByClassName('card_number');
let month = document.querySelector('.month');
let year = document.querySelector('.year');
let color = document.querySelector('.color');

// Listener
name.addEventListener('input', (e) => {
    name_label.innerText = e.target.value;
});

cvv2.addEventListener('input', (e) => {
    cvv2_label.children[0].innerText = e.target.value;
});

for(let i = 0 ; number_card.length > i ; i++){
    number_card[i].addEventListener('input',(e) => {
        number_card_label[i].innerText = e.target.value;
    });
}

month.addEventListener('input', (e) => {
    month_label.innerText = e.target.value;
});

year.addEventListener('input', (e) => {
    year_label.innerText = e.target.value;
});

color.addEventListener('input', (e) => {
    card.style.backgroundColor = e.target.value;
});