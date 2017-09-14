/* Game Data-16x16 Number of mines=40 */
var firstClick=0;
var arr=[];
var board=document.querySelector('.board');
var scoreBoard=document.querySelector('.score');
console.log(board);
for(var i=0;i<256;i++)
    {
       arr[i]=document.createElement('button');
        arr[i].style.positon='relative';
        arr[i].style.width='6.25%';
        arr[i].style.height='6.25%';
        board.appendChild(arr[i]);
        arr[i].bomb=false;
        arr[i].pressed=false;
        arr[i].rightPressed=false;
        arr[i].index=i;
    arr[i].top=i-16;
    arr[i].bottom =i+16;
    arr[i].left=i-1;
    arr[i].right=i+1;
    arr[i].northWest=i-17;
    arr[i].northEast=i-15;
    arr[i].southWest=i+15;
    arr[i].southEast=i+17;
        if(i%16==0)
            {
                arr[i].left=-1;
                arr[i].northWest=-1;
                arr[i].southWest=-1
                if(i==0)
                    {
                arr[i].top=-1;
                arr[i].northEast=-1;
                    }
                if(i==240)
                    {
                        arr[i].bottom=-1;
                        arr[i].southEast=-1;
                    }
            }
        if(i%16==15)
            {
                arr[i].right=-1;
                arr[i].northEast=-1;
                arr[i].southEast=-1;
                if(i==15)
                    {
                        arr[i].top=-1;
                        arr[i].northWest=-1;
                    }
                if(i==255)
                    {
                        arr[i].bottom=-1;
                        arr[i].southWest=-1;
                    }
            }
        if(i>0&&i<15)
            {
                arr[i].top=-1;
                arr[i].northEast=-1;
                arr[i].northWest=-1;
            }
        if(i>240&&i<255)
            {
                arr[i].bottom=-1;
                arr[i].southEast=-1;
                arr[i].southWest=-1;
            }
            //console.log(arr[i].top);
    }
arr[0].flags=40;

var bombIndex=[];
for(i=0;i<45;i++)
    {
        var randomNumber=Math.floor(Math.random()*256);
        //console.log(randomNumber);
        if(bombIndex.indexOf(randomNumber)==-1)
        {
        bombIndex[i]=randomNumber;
        arr[bombIndex[i]].bomb=true;
        //console.log(bombIndex);
        }
        else
            i--; //To prevent the loop from advancing
        
    }
//showBomb();  //Testing randomness of bomb generation
/*check(0);
check(15);
check(240);
check(255);
check(35);*/


for(var x=0;x<arr.length;x++)
    {
        //console.log(arr[x].bomb);
        arr[x].onclick =function(e){
            console.log(e);
            firstClick++; //update firstclick so as this condition is not selected again.
            if(this.bomb==true)
            {
            if(firstClick==1) //Traces wether if it's the first click or not.
            {
                if(this.bomb==true)
                    {
                        for(var e=0;e<256;e++)
                        {
                            if(arr[e].bomb==false)
                                {
                                arr[e].bomb=true;
                                    break;
                                }
                        }
                    }
                this.bomb=false; //If it is then erase the bomb there.
                check(this.index); //Continue as if there was no bomb at that button initialaly only.
                      
            }
            else 
            {
            showBomb();
            setTimeout(function(){alert('Game over')},600);
            setTimeout(function(){window.location.reload()},700);
            }
            }
            else
            check(this.index);
        };
    }
function showBomb()
{
    for(var i=0;i<256;i++)
        {
            if(arr[i].bomb==true)
             arr[i].style.backgroundColor="red";
        }
}
function check(i)
{
    var count=calculateBombs(i);
    if(count!=0)
        {
            open(arr[i]);
            arr[i].innerHTML=count.toString();
        }
    else
        {
            open(arr[i]);
            if(arr[i].top!=-1&&arr[arr[i].top].pressed==false)
                check(arr[i].top);
            if(arr[i].bottom!=-1&&arr[arr[i].bottom].pressed==false)
                check(arr[i].bottom);
            if(arr[i].right!=-1&&arr[arr[i].right].pressed==false)
                check(arr[i].right);
            if(arr[i].left!=-1&&arr[arr[i].left].pressed==false)
                check(arr[i].left);
            if(arr[i].northEast!=-1&&arr[arr[i].northEast].pressed==false)
                check(arr[i].northEast);
            if(arr[i].northWest!=-1&&arr[arr[i].northWest].pressed==false)
                check(arr[i].northWest);
            if(arr[i].southEast!=-1&&arr[arr[i].southEast].pressed==false)
                check(arr[i].southEast);
            if(arr[i].southWest!=-1&&arr[arr[i].southWest].pressed==false)
                check(arr[i].southWest);
            
        }
}
function open(u)
{
    u.style.backgroundColor="blue";
    u.pressed=true;
    if(u.rightPressed==true)
        {
            arr[0].flags++;
            scoreBoard.innerHTML=`${arr[0].flags}`;
        }
}
function calculateBombs(j)
{
    var count=0;
    if(arr[j].top!=-1)
        {
            if(arr[arr[j].top].bomb==true)
                count++;
        }
    if(arr[j].bottom!=-1)
        {
            if(arr[arr[j].bottom].bomb==true)
                count++;
        }
    if(arr[j].right!=-1)
        {
            if(arr[arr[j].right].bomb==true)
                count++;
        }
    if(arr[j].left!=-1)
        {
            if(arr[arr[j].left].bomb==true)
                count++;
        }
    if(arr[j].northEast!=-1)
        {
            if(arr[arr[j].northEast].bomb==true)
                count++;
        }
    if(arr[j].northWest!=-1)
        {
            if(arr[arr[j].northWest].bomb==true)
                count++;
        }
    if(arr[j].southEast!=-1)
        {
            if(arr[arr[j].southEast].bomb==true)
                count++;
        }
    if(arr[j].southWest!=-1)
        {
            if(arr[arr[j].southWest].bomb==true)
                count++;
        }
    return count;
}
/*function restart()
{
    for(var i=0;i<arr.length;i++)
        {
            arr[i].style.backgroundColor='buttonface';
            arr[i].pressed=false;
            arr[i].bomb=false;
            firstClick=0;
            arr[i].innerHTML="";
        }
      for(i=0;i<45;i++)
    {
        var randomNumber=Math.floor(Math.random()*256);
        //console.log(randomNumber);
        if(bombIndex.indexOf(randomNumber)==-1)
        {
        bombIndex[i]=randomNumber;
        arr[bombIndex[i]].bomb=true;
        //console.log(bombIndex);
        }
        else
            i--; //To prevent the loop from advancing
        
    }
}*/