console.log(arr);
var scoreBoard=document.querySelector('.score');
var refresh=document.querySelector('.refresh');
scoreBoard.innerHTML=40;
var flags=40;
for(var i=0;i<256;i++)
{
   
    arr[i].oncontextmenu =function(){
        if(flags>=1)
            {
        if(this.pressed==false&&this.rightPressed==false)
        {
        this.style.backgroundColor='yellow';
        this.rightPressed=true;
        flags--;
        scoreBoard.innerHTML=`${flags}`;
        }
        else if(this.rightPressed==true)
            {
                this.style.backgroundColor='buttonface';
                this.rightPressed=false;
                flags++;
                scoreBoard.innerHTML=`${flags}`;
            }
            }
        else
            {
                   if(this.rightPressed==true)
            {
                this.style.backgroundColor='buttonface';
                this.rightPressed=false;
                flags++;
                scoreBoard.innerHTML=`${flags}`;
            }
            }
    };
}
refresh.onclick=function(){
    window.location.reload();
}
