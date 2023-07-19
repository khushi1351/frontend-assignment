const ham = document.getElementById('ham');
const cross = document.getElementById('cross');
const body = document.querySelector('body');
const hamburger = document.querySelector('.hamburger-menu');
ham.addEventListener('click',()=>{
    // console.log('hello');
    ham.style = "display: none !important";
    cross.style = "display: block !important";
    cross.style.color = "white";
    hamburger.style = "transform: translateX(0%)"

})

cross.addEventListener('click', ()=>{
    console.log('bye');
    cross.style = "display: none !important";
    ham.style = "display: block !important";
    ham.style.color = "white";
    body.style.opacity = '1';
    hamburger.style = "transform: translateX(130%)"
})