const container = document.getElementById("container");
const button = document.querySelectorAll('.btn1');

const screen = document.querySelectorAll('.screen');

// creating divs of rows and cols and setting black color for mouse when it comes over each div

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

function clear() {
    console.log('hello')


    let cell = container.querySelectorAll('div');
    cell.target.style.backgroundColor = 'white';





}


//clean.forEach('click' clean => clean.style.backgroundColor = 'white')


makeRows(64, 64);