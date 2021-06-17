function grid() {
    const button = document.querySelectorAll('.btn');

    const screen = document.querySelectorAll('.screen');

    //let pixel = "";
    let gridsize = 64;
    let screensize = 6;
    scr();

    function scr() {

        for (let i = 0; i < screensize ** 2; i++) {
            console.log(screensize)
            let div = document.createElement('div');
            div.classList.add('divs');
            document.getElementById("id1").style.backgroundColor = 'white';


            document.getElementById("id1").appendChild(div);



        }
        document.getElementById("id1").style.gridTemplateColoumns = `repeat(${screensize}, auto)`;
        document.getElementById("id1").style.gridTemplateRows = `repeat(${screensize}, auto)`;



    }



}