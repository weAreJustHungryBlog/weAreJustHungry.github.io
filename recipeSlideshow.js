$(document).ready(function(){
	showSlides(slideIndex);
	setInterval(function(){plusSlides(1);}, 5000);
});

//vars
var slideIndex = 1;
var slides = document.getElementsByClassName("recipeSlides");
var dots = document.getElementsByClassName("dot");

function plusSlides(n){
	showSlides(slideIndex += n);
}

function currentSlides(n){
	showSlides(slideIndex = n, 2);
}

function showSlides(n){
	//reset n values that are not in range of the slides
	if (n>slides.length){
		slideIndex = 1;
	}
	if (n<1){
		slideIndex = slides.length;
	}

	//hide all the slides
	for (var i = 0; i<slides.length; i++){
		slides[i].style.display = "none";
	} 

	//get rid of all the activedot classes to make all dots grey
	for (var j = 0; j<dots.length; j++){
		dots[j].className = dots[j].className.replace(" activeDot", "");
	}

	//display correct slide
	slides[slideIndex-1].style.display = "block";

	//display correct dot as black
	dots[slideIndex-1].className += " activeDot";
}

