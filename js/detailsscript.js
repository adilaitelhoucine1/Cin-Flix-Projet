const fdetails=document.querySelector(".film-details");
const about=document.querySelector(".about");
const comentaire =document.querySelector(".upcoming-btn");
var commentform=document.querySelector(".comment-form");

function filmcomment(){
    fdetails.innerHTML=`

    `
    comentaire.classList.toggle("selected");
    about.classList.remove("selected");

   
}

function About(){

    commentform.innerHTML="";
    fdetails.innerHTML=`
                         <p class="dt-description">
                            From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.
                        </p>
                        <div class="rating">
                            <h4>5.9/10</h4><img src="images/yellow-star.png">
                            <span style="margin: 10px; color: white;">|</span>
                            <img src="images/empty-star.png">
                             <a onclick="showrating()" href="">Rate</a>
                        </div>
                        <div class="actors">
                            <img src="images/actor1.png">
                            <img src="images/actor2.png">
                            <img src="images/actor3.png">
                        </div>
    `
    about.classList.toggle("selected");
    comentaire.classList.remove("selected");
}

function rating(){
   var rating=document.querySelector(".rating");
   rating.innerHTML=`
   <div class="rating-box">
      <header>How was your experience?</header>
      <div class="stars">
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star"></i>
      </div>
      <button onclick="updatecomment()">Rate</button>
    </div>
   `

 // Select all elements with the "i" tag and store them in a NodeList called "stars"
 const stars = document.querySelectorAll(".stars i");
// Loop through the "stars" NodeList
stars.forEach((star, index1) => {
  // Add an event listener that runs a function when the "click" event is triggered
  star.addEventListener("click", () => {
    // Loop through the "stars" NodeList Again
    stars.forEach((star, index2) => {
      // Add the "active" class to the clicked star and any stars with a lower index
      // and remove the "active" class from any stars with a higher index
      index1 >= index2 ? star.classList.add("active") : star.classList.remove("active");
    });
  });
});
}
function updatecomment(){
    var rating=document.querySelector(".rating");
   rating.innerHTML=`             
                            <h4><span class="rating-count">5.9</span>/10</h4><img src="images/yellow-star.png">
                            <span style="margin: 10px; color: white;">|</span>
                            <img src="images/empty-star.png">
                            <a onclick="rating()" href="#">Rate</a>                     
   `
};

 var likescount=document.querySelector(".likes-count");
 var likeicon=document.querySelector(".likeimg");

const original='images/like-icon.png';
const full='images/like-icon-full.png';

//Update like
likeicon.addEventListener("click",function(){
    var  likeinteger =parseInt(likescount.textContent);
   console.log(likeinteger);
    if(likeicon.src.endsWith("icon.png")){
        likeinteger++;
        likeicon.src=full;
    }else{
        likeinteger--;
        likeicon.src=original;
    }
    likescount.textContent=likeinteger;
})
 
const commentaire=document.querySelector(".film-details");
let newcoment=document.querySelector("textarea");
let commentbody=document.querySelector(".comment-description");


function AddComment(){
    
  filmcomment(); // pour  avoir coment side in ghe screen
  fdetails.innerHTML=`
    <div class="comments">
                    <div class="commentaire">
                            <div class="personal-info">
                                    <img src="images/me.png">
                                    <h5>Adil Ait Elhoucine </h5>
                                    <img class="stars" src="images/rating-starts.png">
                            </div>
                            <div class="comment-body">
                                <p class="comment-description">${newcoment.value}</p>
                            </div>
                    </div>
    </div>
    `
    newcoment.value="";

}
let favoriteicon=document.querySelector(".favorite-icon");
let maindtimage=document.querySelector(".main-dt-image").src;

favoriteicon.addEventListener("click",()=>{
  localStorage.setItem('favoriteimage','images/film-details.png');
    window.alert("is Added ");
})