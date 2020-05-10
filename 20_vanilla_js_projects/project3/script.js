const video=document.getElementById('video');
const play=document.getElementById('play');
const stop=document.getElementById('stop');
const progress=document.getElementById('progress');
const timestamp=document.getElementById('timestamp');

function toggleVideoStatus(){

};

function updatePauseIcon(){

};

video.addEventListener('click',toggleVideoStatus);

video.addEventListener('pause',updatePlayIcon);
video.addEventListener('play',updatePauseIcon);
video.addEventListener('timeUpdate',updateProgress);

play.addEventListener('click',toggleVideoStatus);
stop.addEventListener('click',stopVideo);

