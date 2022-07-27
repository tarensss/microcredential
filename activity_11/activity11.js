console.log("Hello World");



//ex 2 
const btn2 = document.querysSelector("#btn2");
btn2.onclick = function(){
    alert('Hi There!')
}


/* another way to create a function */

//ex 3 
const qcclink = document.querySelector("#qcclink");
qcclink.onclick = function(){
    console.log("qcc link was clicked");
}

qcclink.onmouseover = testing;
function testing(){
    console.log("qcc link was hovered");
}


///example 4
const title = document.querySelector(`.title`)
title.onmouseover = function(){
    console.log("TH e title was hovered on mouseout event");
}


//ex 5 
const btn5 = document.querySelector("#btn5");
btn5.addEventListener('click', function(){
    alert('Button 5 was clicked')
})




//ex 6
const btn6 = document.querySelector("#btn6");
btn6.addEventListener('mouseout',click2)
btn6.addEventListener('dblclick',click1)

function click1(){
    console.log('Button 6 = mouseout')
}
function click2(){
    alert('Button 6 was double clicked')
}


// Ex 7  
const colorContainer = document.querySelector(".color-container");
const btnColor = document.querySelector("#btnColor");

btnColor.addEventListener('click', function() {
    colorContainer.style.backgroundColor = changeColor();
})

function changeColor(){
    // rgb value goes from 0 to 255
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)

    return`rgb(${r},${g},${b})`
}



// ex 9
const btn9 = document.querySelector("#btn9");
for(let eachDiv of divColor){
    eachDiv.addEvenListner('mouseout', function(){
        eachDiv.style.backgroundColor = changeColor();
    })
}


// ex 10
const inputTxt = document.querySelector(".inputTxt");
inputTxt.addEventListener('keyup', function(){
    alert('KEYDOWN! key "${e.key}" was pressed \n The ASCII code for key "${e.key}" is ${e.which} ')
})






















