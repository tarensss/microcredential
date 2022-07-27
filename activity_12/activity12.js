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
)}


function slidesshow(n){
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







