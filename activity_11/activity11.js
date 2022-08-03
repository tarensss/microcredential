console.log("Hello World");



//Ex 2 
const btn2 = document.querysSelector("#btn2");
btn2.onclick = function(){
    alert('Hi There!')
}


/* another way to create a function */

//Ex 3 
const qcclink = document.querySelector("#qcclink");
qcclink.onclick = function(){
    console.log("QCC link was clicked");
}

qcclink.onmouseover = testing;
function testing(){
    console.log("Qcc link was hover over");
}


///Ex 4
const title = document.querySelector(`.title`)
title.onmouseover = function(){
    console.log("TH e title was hovered on mouseout event");
}


//Ex 5 
const btn5 = document.querySelector("#btn5");
btn5.addEventListener('click', function(){
    alert('Button 5 was clicked')
})




//Ex 6
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



// Ex 9
const btn9 = document.querySelector("#btn9");
for(let eachDiv of divColor){
    eachDiv.addEvenListner('mouseout', function(){
        eachDiv.style.backgroundColor = changeColor();
    })
}


// Ex 10
const inputTxt = document.querySelector(".inputTxt");
inputTxt.addEventListener('keyup', function(){
    alert('KEYDOWN! key "${e.key}" was pressed \n The ASCII code for key "${e.key}" is ${e.which} ')
})


// ex 11
const display9 = document.querySelector('.display9');
window.addEventListener('scroll', function(){
    let pxTop = window.pageYOffset;
    display9.innerHTMl = `Browser window is ${pxTop} px away from the top`
})

// ex 12
const toTop = document.querySelector('.toTop');
window.addEventListener('scroll', function(){
    let pzTop = window.pageYOffset;
    if(pzTop > 80){
        toTop.style.display = 'block';
    }
    else{
        toTop.style.display = 'none';
    }
})





// ex 13 
const qccURL = document.querySelector('.qccURL')
qccURL.addEventListener('click', function(){
    e.preventDefault();
    alert("QCC  website  is OFF")
})



// ex 14 
const  sBubble = document.quesrySelector('.sBubble');
const pBubbble = document.querySelector('.pBubble');
const aBubble = document.querySelector('.aBubble');

sBubble.addEventListener('click', function(){
    e.stopPropagation();
    alert('Section  was clicked')
})

pBubbble.addEventListener('click', function(){
    e.stopPropagation();
    alert('PARAGRAPH was clicked')
})

aBubble.addEventListener('click', function(){
    e.stopPropagation();
    alert('Anchor was clicked')
})














