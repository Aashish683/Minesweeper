console.log(arr);
var scoreBoard=document.querySelector('.score');
var refresh=document.querySelector('.refresh');
scoreBoard.innerHTML=40;
for(var i=0;i<256;i++)
{
   
    arr[i].oncontextmenu =function(){
        if(arr[0].flags>=1)
            {
        if(this.pressed==false&&this.rightPressed==false)
        {
        this.style.backgroundColor='yellow';
        this.rightPressed=true;
        arr[0].flags--;
        scoreBoard.innerHTML=`${arr[0].flags}`;
        }
        else if(this.rightPressed==true)
            {
                this.style.backgroundColor='buttonface';
                this.rightPressed=false;
                arr[0].flags++;
                scoreBoard.innerHTML=`${arr[0].flags}`;
            }
            }
        else
            {
                   if(this.rightPressed==true)
            {
                this.style.backgroundColor='buttonface';
                this.rightPressed=false;
                arr[0].flags++;
                scoreBoard.innerHTML=`${arr[0].flags}`;
            }
            }
        return false;
    };
}
refresh.onclick=function(){
    window.location.reload();
}
