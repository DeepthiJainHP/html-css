const container=document.querySelector('.container');
const seats=document.querySelectorAll('rows .seat:not(.occupied)');
const count=document.getElementById('count');
const total=document.getElementById('total');
const movie=document.getElementById('movie');

const ticketPrice=movie.value;
console.log(typeof ticketPrice);
console.log('sdf');
container.addEventListener('click',(e)=>{
    console.log(e);
});

