const element = document.querySelector('.films');
console.log(element);

// Create the keyframes and timing options
element.animate(
  [
    { transform: 'translateX(0%)' }, 
    { transform: 'translateX(-100%)' } 
  ],
  {
    duration: 50000,     
    iterations: Infinity,
  }
);
const films=document.querySelector(".all-films");
var upcomingbtn=document.querySelector(".upcoming-btn");
var rated=document.querySelector(".rated");
var popular=document.querySelector(".popular");
var now=document.querySelector(".selected");
//upcoming.addEventListener("click",upcoming);

function nowfilm(){
    films.innerHTML=`
                  <!-- film-1 -->
                <div class="film-image">
                    <img src="/images/film-1.svg">
                </div>
                 <!-- film-2 -->
                 <div class="film-image">
                    <img src="/images/film-2.png">
                </div>
                 <!-- film-3 -->
                 <div class="film-image">
                    <img src="/images/film-3.png">
                </div>
                 <!-- film-4 -->
                 <div class="film-image">
                    <img src="/images/film-4.png">
                </div>
    `
}

function upcoming(){
    films.innerHTML=`
                   <!-- film-1 -->
                <div class="film-image">
                    <img src="/images/alien-1.png">
                </div>
                 <!-- film-2 -->
                 <div class="film-image">
                    <img src="/images/film-2.png">
                </div>
                 <!-- film-3 -->
                 <div class="film-image">
                    <img src="/images/film-3.png">
                </div>
                 <!-- film-4 -->
                 <div class="film-image">
                    <img src="/images/film-4.png">
                </div>
                 <div class="film-image">
                    <img src="/images/film-4.png">
                </div>
                 <div class="film-image">
                    <img src="/images/film-4.png">
                </div>
                 <div class="film-image">
                    <img src="/images/film-4.png">
                </div>
                 <div class="film-image">
                    <img src="/images/film-4.png">
                </div>
    `
    now.classList.remove();
    rated.classList.remove();
    popular.classList.remove();
    upcomingbtn.classList.toggle("selected");
}

function ratedfilm(){
    films.innerHTML=`
                   <!-- film-1 -->
                <div class="film-image">
                    <img src="/images/alien-1.png">
                </div>
                 <!-- film-2 -->
                 <div class="film-image">
                    <img src="/images/film-2.png">
                </div>
                 <!-- film-3 -->
                 <div class="film-image">
                    <img src="/images/film-3.png">
                </div>
                 <!-- film-4 -->
                 <div class="film-image">
                    <img src="/images/film-4.png">
                </div>
                 <div class="film-image">
                    <img src="/images/film-4.png">
                </div>
            
    `
    rated.classList.toggle("selected");
}

function Popular(){
    films.innerHTML=`
                  <!-- film-1 -->
                <div class="film-image">
                    <img src="/images/film-1.svg">
                </div>
                 <!-- film-2 -->
                 <div class="film-image">
                    <img src="/images/film-2.png">
                </div>
                 <!-- film-3 -->
                 <div class="film-image">
                    <img src="/images/film-3.png">
                </div>
                 <!-- film-4 -->
                 <div class="film-image">
                    <img src="/images/film-4.png">
                </div>
                <div class="film-image">
                    <img src="/images/film-4.png">
                </div>
                <div class="film-image">
                    <img src="/images/film-4.png">
                </div>
    `
    popular.classList.toggle("selected");
}