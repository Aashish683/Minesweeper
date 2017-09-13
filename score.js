for(var i=0;i<256;i++)
    {
        arr[i].addEventListener('click',gamewin);
    }
function gamewin()
{
    var flag=1;
    for(var i=0;i<256;i++)
        {
            if(arr[i].bomb==false)
                {
                 if(arr[i].pressed==false)
                    flag=0
                }
        }
    if(flag==0)
     ;
    else
        {
            setTimeout(function(){alert('Game Won')},600);
            setTimeout(function(){window.location.reload();
            },600);
        }
}