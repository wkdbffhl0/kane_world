const triggerMargin = 300;
const elementList = document.querySelectorAll('.ani');

function animationFun()
{
    for(const element of elementList)
    {
        if(!element.classList.contains('show'))
        {
            if(window.innerHeight > element.getBoundingClientRect().top + triggerMargin)
            {
                element.classList.add('show');
            }
        }
    }
}


window.addEventListener('load', animationFun);
window.addEventListener('scroll', animationFun);
               