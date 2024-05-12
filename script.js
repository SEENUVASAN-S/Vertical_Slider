const slidesbar=document.querySelector('.slidebar');
const sideleft=document.querySelector('.left-side');
const sideright=document.querySelector('.right-side');
const upbutton=document.querySelector('.up');
const downbutton=document.querySelector('.down');
const slideslength=sideright.querySelectorAll('div').length;
let activeslideindex=0;
sideleft.style.top=`-${(slideslength-1)*100}vh`;
upbutton.addEventListener('click',()=>slidechange('up'));
downbutton.addEventListener('click',()=>slidechange('down'));
function slidechange(direction)
{
    const currentheight=slidesbar.clientHeight;
    if(direction=='up')
    {
        activeslideindex++;
        if(activeslideindex>slideslength-1)
        {
            activeslideindex=0;
        }
        sideleft.style.transform = `translatey(${activeslideindex * currentheight}px)`;
        sideright.style.transform=`translatey(-${activeslideindex*currentheight}px)`;
    }
    if(direction=='down')
    {
        activeslideindex--;
        if(activeslideindex<0)
        {
            activeslideindex=3;
        }
        sideleft.style.transform = `translatey(${activeslideindex * currentheight}px)`;
        sideright.style.transform=`translatey(-${activeslideindex*currentheight}px)`;
    }
}