var burger=document.querySelector('.burger');
var menu=document.querySelector('.menu');
var divv=document.querySelector('.logo');

// var imgg='logo.png';
// divv.appendChild(imgg);


function ani(){
    burger.addEventListener('click',function(e){e.preventDefault();
     menu.classList.toggle('actie');})
}

ani();