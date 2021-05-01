const selectElement = (s) => document.querySelector(s);

//Abrir menu
selectElement(".open").addEventListener("click", () => {
  selectElement(".nav-list").classList.add("active");
});

//Cerrar menu
selectElement(".close").addEventListener("click", () => {
  selectElement(".nav-list").classList.remove("active");
});

/****smooth Scroll */
const scroll = new SmoothScroll('.nav-item a[href*="#"]', {
  speed: 800,
  speedAsDuration: true,
});

/********SLIDER TESTIMONIOS******** */
let slides = selectElement(".testimonios-column-slider").children;
let left = selectElement(".left");
let right = selectElement(".right");
let totalSlides = slides.length;
var index = 0;

left.onclick = function () {
  next("next");
};
right.onclick = function () {
  next("prev");
};


function next(direction){

  if(direction=="next"){
     index++;
      if(index==totalSlides){
       index=0;
      }
  } 
  else{
          if(index==0){
           index=totalSlides-1;
          }
          else{
           index--;
          }
   }

 for(i=0;i<slides.length;i++){
         slides[i].classList.remove("active");
 }
 slides[index].classList.add("active");     

}
