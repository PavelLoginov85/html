let butLeft = document.getElementById("but1");
butLeft.addEventListener("click", changeColorH2);



function changeColorH2 ()
{
    let ch = document.getElementById("leftText");
    ch.classList.toggle("h2change");   
}


let butRight = document.getElementById("but2");
butRight.addEventListener("click", allchangeColorH3);

function allchangeColorH2()
{
let arrayInfoH2 = document.getElementsByClassName("chapter");
arrayInfoH2.classList.add("h2change");

}

function allchangeColorH3(arrayInfoH2)
{
    arrayInfoH2.forEach(element => {
        arrayInfoH2[index].classList.toggle("h2change");  
    });
}