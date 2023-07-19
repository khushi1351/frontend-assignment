const ham = document.getElementById('ham');
const cross = document.getElementById('cross');
const body = document.querySelector('body');
const hamburger = document.querySelector('.hamburger-menu');
const header = document.querySelector('header');
const container = document.querySelector('.container')
ham.addEventListener('click',()=>{
    ham.style = "display: none !important";
    cross.style = "display: block !important";
    cross.style.color = "white";
    hamburger.style = "transform: translateX(5%)";
    header.style.opacity = "0.2";
    container.style.opacity = "0.2";

})

cross.addEventListener('click', ()=>{
    cross.style = "display: none !important";
    ham.style = "display: block !important";
    ham.style.color = "white";
     header.style.opacity = "1";
    container.style.opacity = "1";
    hamburger.style = "transform: translateX(130%)"
})
