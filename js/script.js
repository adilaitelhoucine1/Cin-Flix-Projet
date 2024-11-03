const element = document.querySelector('.films');

element.animate(
  [
    { 
        transform: 'translateX(0%)' 
    }, 
    { 
        transform: 'translateX(-50%)' 
    } 
  ],

  {
    duration: 30000, 
    iterations: Infinity,
  }
  
);



// animation  script end

const films=document.querySelector(".all-films");
var upcomingbtn=document.querySelector(".upcoming-btn");
var rated=document.querySelector(".rated");
var popular=document.querySelector(".popular");
var now=document.querySelector(".selected");
//upcoming.addEventListener("click",upcoming);

function nowfilm(){
    films.innerHTML=`
                  <!-- film-1 -->
                <div class="film-image more">
                    <img src="/images/film-1.svg">
                    <h1 style="margin: auto;">shang shi</h1>
                </div>
                 <!-- film-2 -->
                 <div class="film-image more">
                    <img src="/images/film-2.png">
                    <h1 style="margin: auto;">film 1</h1>
                </div>
                 <!-- film-3 -->
                 <div class="film-image more">
                    <img src="/images/film-3.png">
                    <h1 style="margin: auto;">film 2</h1>
                </div>
                 <!-- film-4 -->
                 <div class="film-image more">
                    <img src="/images/film-4.png">
                    <h1 style="margin: auto;">film 3</h1>
                </div>
    `
    upcomingbtn.classList.remove("selected");
    rated.classList.remove("selected");
    popular.classList.remove("selected");
    now.classList.toggle("selected");
    document.querySelector("#search").addEventListener("input" , filtercards);
}

function upcoming(){
    films.innerHTML=`
                   <!-- film-1 -->
                <div class="film-image more">
                    <img src="/images/alien-1.png">
                    <h1 style="margin: auto;">film 4</h1>
                </div>
                 <!-- film-2 -->
                 <div class="film-image more">
                    <img src="/images/film-2.png">
                    <h1 style="margin: auto;">film 5</h1>
                </div>
                 <!-- film-3 -->
                 <div class="film-image more">
                    <img src="/images/film-3.png">
                    <h1 style="margin: auto;">film 6</h1>
                </div>
                 <!-- film-4 -->
                 <div class="film-image more">
                    <img src="/images/film-4.png">
                    <h1 style="margin: auto;">film 7</h1>
                </div>
                 <div class="film-image more">
                    <img src="/images/film-4.png">
                    <h1 style="margin: auto;">film 8</h1>
                </div>
                 <div class="film-image more">
                    <img src="/images/film-4.png">
                    <h1 style="margin: auto;">film 9</h1>
                </div>
    `
    now.classList.remove("selected");
    rated.classList.remove("selected");
    popular.classList.remove("selected");
    upcomingbtn.classList.toggle("selected");
    document.querySelector("#search").addEventListener("input" , filtercards);
}

function ratedfilm(){
    films.innerHTML=`
                   <!-- film-1 -->
                <div class="film-image more">
                    <img src="/images/alien-1.png">
                    <h1 style="margin: auto;">film 1</h1>
                </div>
                 <!-- film-2 -->
                 <div class="film-image more">
                    <img src="/images/film-2.png">
                    <h1 style="margin: auto;">film 2</h1>
                </div>
                 <!-- film-3 -->
                 <div class="film-image more">
                    <img src="/images/film-3.png">
                    <h1 style="margin: auto;">film 3</h1>
                </div>
                 <!-- film-4 -->
                 <div class="film-image more">
                    <img src="/images/film-4.png">
                    <h1 style="margin: auto;">film 4</h1>
                </div>
                 <div class="film-image more">
                    <img src="/images/film-4.png">
                    <h1 style="margin: auto;">film 5</h1>
                </div>
            
    `
    upcomingbtn.classList.remove("selected");
    now.classList.remove("selected");
    popular.classList.remove("selected");
    rated.classList.toggle("selected");
    document.querySelector("#search").addEventListener("input" , 'filtercards');
}

function Popular(){
    films.innerHTML=`
                  <!-- film-1 -->
                <div class="film-image more">
                    <img src="/images/film-1.svg">
                    <h1 style="margin: auto;">film 1</h1>
                </div>
                 <!-- film-2 -->
                 <div class="film-image more">
                    <img src="/images/film-2.png">
                    <h1 style="margin: auto;">film 2</h1>
                </div>
                 <!-- film-3 -->
                 <div class="film-image more">
                    <img src="/images/film-3.png">
                    <h1 style="margin: auto;">film 3</h1>
                </div>
                 <!-- film-4 -->
                 <div class="film-image more">
                    <img src="/images/film-4.png">
                    <h1 style="margin: auto;">film 4</h1>
                </div>
                <div class="film-image more">
                    <img src="/images/film-4.png">
                    <h1 style="margin: auto;">film 5</h1>
                </div>
                <div class="film-image more">
                    <img src="/images/film-4.png">
                    <h1 style="margin: auto;">film 6</h1>
                </div>
    `
    upcomingbtn.classList.remove("selected");
    rated.classList.remove("selected");
    now.classList.remove("selected");
    popular.classList.toggle("selected");
    document.querySelector("#search").addEventListener("input" , filtercards);
}

//filter live
document.querySelector("#search").addEventListener("input" , filtercards);

function filtercards(){
    const searchInput = document.querySelector("#search");
    const value = searchInput.value.toLowerCase();
    const cards =  document.querySelectorAll(".more") ;
    cards.forEach((card)=>{
        let text = card.textContent.toLowerCase();
        if(text.includes(value)){
            card.style.display = "";
        }else{
            card.style.display = "none";
        }
    })
}
//filter  live ends

//a chaque clique redirect to page details
let film_cards=document.querySelectorAll(".film-image");

film_cards.forEach((element) => 
    element.addEventListener("click",redirect));
function redirect(){
    window.location.href = "detailsfilm.html";
}

const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');

burgerMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});
// document.querySelector(".burger-menu").addEventListener("click",shownavbar);
// function shownavbar(){
//    document.querySelector(".show").innerHTML.style.display='block'
// }