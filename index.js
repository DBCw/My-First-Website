const navSlide = ()=> {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.ul');
    const ul = document.querySelectorAll('.ul li');

    burger.addEventListener('click', () =>{
        //Toggle Nav
        nav.classList.toggle('nav-active');

    
//Animate Links
ul.forEach((link, index) => {
    if(link.style.animation) {
        link.style.animation = '';
    } else{
 link.style.animation =`ulFade 0.5s ease forwards ${index / 7 + 1.2}s`
    }
});
//Burger Animation
burger.classList.toggle('toggle');

});
    }

navSlide();