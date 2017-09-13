var timer=document.querySelector('.timer');
var start=Date.now();
var clear=setInterval(function(){
    var timeNow=Date.now();
    var elapsed=timeNow-start;
    elapsed/=1000;
    var minutes=(Math.floor(elapsed/60));
    var seconds=(Math.floor(elapsed%60));
    if(minutes<10)
    {
        minutes='0'+minutes;
    }
    if(seconds<10)
        {
        seconds='0'+seconds;
        }
    timer.innerHTML=`${minutes}:${seconds}`;
    if(elapsed>600)
        {
            setTimeout(function(){alert('Game over');},600);
            setTimeout(function(){window.location.reload();},600);
        }
},1000);