// STORAGE
const firstName = document.querySelector('#firstN')
const lastName = document.querySelector('#lastN')
const submitForm = document.querySelector('.input1');

const openitem1 = document.querySelector('#openitem1');
const closeModal = document.querySelector('#closeModal');
const modalWindow = document.querySelector('.modal-window');








submitForm.addEventListener('click', function(e){
    localStorage.setItem('firstName', firstName.value);
    localStorage.setItem('lastName', lastName.value);
    firstName.value = '';
    lastName.value = '';
})



openItem1.addeventlistener('click', function(){
    modalWindow1.style.display = 'block';
})

closeModal.addEventListener('click', function(){
    modalWindow1.style.display = 'none';
})




//FORMS
// VIEW PASSWORD
const myPassword = document.querySelector('#myPassword');
const viewPassword = document.querySelector('#viewPassword');
    viewPassword.addEventListener('click', function(){
        const secret = myPassword.getAttribute('type')=== 'password' ? 'text' : 'password';
        myPassword.setAttribute('type', secret);
    })

//AUTOMATIC SLIDESHOW
const slideAuto = document.querySelector('.slideAuto')
let indexSlide=0;
slideshowAuto();


function slideshowAuto(){
    let indexSlide = 0;
    let numSlides = slidesAuto.length;
    if (indexSlide>numSlides){indexSlide=0}
    if (indexSlide<0){indexSlide=numSlides-1;}
    for(let eachIndex=0; eachIndex<numSlides; eachIndex++)
    {
        slidesAuto[eachIndex].style.display = 'none';
    }
    slideAuto[indexSlide].style.display = 'block';
    setTimeout(slideshowAuto, 3000);
    indexSlide++;
}



// Manual Slideshow
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');


let currentSlide = 1; //slide 
let numberSlides = slides.length;

slidesshow(currentSlide);

prev.addEventListener('click', function(){
    slideshow(currentSlide--)
})

next.addEventListener('click', function(){
    slideshow(currentSlide++)
})




function slideshow(n){
    //when currentSlides raches up to the number of slides, it will set back to 1, which is the first slide

    if(currentSlide>numberSlides)
    {
        currentSlide = 1;
    }

    //when currentSlides reaches to the first slide, the prev button will set to the last slide
    if(currentSlide<1)
    {
        currentSlide = numberSlides;
    }

    for(let eachSlides = 0; eachSlides < numberSlides; eachSlides++)
    {
        slides[eachSlides].style.display = 'none';
    }
}




