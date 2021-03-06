
var fStack = document.getElementById("skill-wrapper");

var pButton = document.getElementById("project-button");

var projects = document.getElementById('projects');

var projectHeader  = document.getElementById('project-header');

var logo =document.querySelector(".mode-logo");

var shade =document.querySelector(".mode-logo .shade");

var home = document.getElementById('home');

var upButton =  document.getElementById("go-up")

var glide = document.querySelector('.glide');

var glideInit = new Glide(glide,{
    type: 'carousel',
    gap:'10px',
    animationTimingFunc:'ease-in-out',
    bound:true,
    startAt: 0,
    perView: 4,
    animationDuration:500,
    autoplay:2000,
      });
glideInit.mount();


AOS.init({
    duration:800,
});

pButton.addEventListener('click',()=>{
    home.classList.add("animated","fadeOut", "1s");
    projectHeader.classList.add("animated","fadeInUp","slower");
    zenscroll.to(projects, 1500);
})

home.addEventListener('animationend', () =>{
    home.classList.remove("animated","fadeOut");
});
projectHeader.addEventListener('animationend', () =>{
    projectHeader.classList.remove("animated","fadeInUp");
});

upButton.addEventListener("click",()=>{

    zenscroll.to(home,700);
})

function scrollFunction() {
    if (document.body.scrollTop > 20
         || document.documentElement.scrollTop > 20) {
     upButton.style.visibility = "visible";
     upButton.style.opacity = "1";
    } else {
      upButton.style.opacity = "0";
      upButton.style.visibility = "hidden";
    }
  }

window.onscroll = function(){scrollFunction()};

var msg  = document.title;
var speed = 150;
var pos = 0;

function moveTitle()
{
     var ml = msg.length;
        
    title = msg.substr(pos,ml)  +" || "+ msg.substr(0,pos);
  document.title = title;
    
  pos++;
  if (pos > ml) pos=0;
  window.setTimeout("moveTitle()",speed);
}

moveTitle();