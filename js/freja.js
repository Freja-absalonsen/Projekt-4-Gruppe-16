
/* Har hentet inspiration ud fra denne video på youtube  https://www.youtube.com/watch?v=flItyHiDm7E */
/* skærmlæsning - aria-label  https://www.w3schools.com/accessibility/accessibility_labels.php */

console.log('This file is working!');


const toggleButton = document.getElementById('header-toggle');
const navMenu = document.querySelector('.header__nav');

const navItems = Array.from(document.querySelectorAll('.nav__item'));

/* Funktion til at åbne/lukke menuen og Event - klik på menu-knap  */
toggleButton.addEventListener('click',()=>{

    const isOpen = navMenu.classList.toggle('header__nav--active');
    toggleButton.classList.toggle('header__toggle--active');

    if(isOpen){
        toggleButton.setAttribute('aria-label', 'Luk menu');
    } else{
        toggleButton.setAttribute('aria-label','Åbn menu');
    }
    
})

for(let i = 0; i < navItems.length; i++){
    navItems[i].addEventListener('click',()=>{

        navMenu.classList.remove('header__nav--active');
        toggleButton.classList.remove('header__toggle--active');

        toggleButton.setAttribute('aria-label', 'Åbn menu');

    });
}
