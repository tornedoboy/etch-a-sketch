const container = document.getElementById("container");
const btn1 = document.querySelectorAll('.btn1');
const btn2 = document.querySelectorAll('.btn2');
const btn3 = document.querySelectorAll('.btn3');

const screen = document.querySelectorAll('.screen');
let rows = 16;
let cols = 16;

// creating divs of rows and cols and setting default black color for mouse when it comes over each div

function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");

        container.appendChild(cell).className = "grid-item";
        cell.addEventListener('mouseover', function(e) {
            e.target.style.backgroundColor = 'black';
        })
    };
};




//clear the grid and start again

btn1.forEach((clear) => {

    clear.addEventListener('click', (e) => {
        console.log('hello')

        container.innerHTML = "";
        makeRows(rows, cols);
    });



});

btn2.forEach((color) => {
    color.addEventListener('click', (box) => {
        box = document.querySelectorAll(".grid-item");
        console.log('bye')
        box.forEach((item) => {
            item.addEventListener('mouseover', function(e) {
                e.target.style.backgroundColor = 'red';
            });

        });





    });


});

btn3.forEach((color) => {
    color.addEventListener('click', (box) => {
        box = document.querySelectorAll(".grid-item");
        console.log('erase')
        box.forEach((item) => {
            item.addEventListener('mouseover', function(e) {
                e.target.style.backgroundColor = 'white';
            });

        });





    });


});






makeRows(rows, cols);