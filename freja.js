
/* Har hentet inspiration ud fra denne video på youtube  https://www.youtube.com/watch?v=flItyHiDm7E */
/* skærmlæsning - aria-label  https://www.w3schools.com/accessibility/accessibility_labels.php */

/* Fejlfinding: Tjekker om filen er korrekt linket */
console.log('This file is working!');

/* DOM: Henter elementer fra HTML */
/* Variabler: Gemmes i cost */
const toggleButton = document.getElementById('header-toggle');
const navMenu = document.querySelector('.header__nav');

/* Dom + Arrays: Henter menupunkterne og laver det om til array */
const navItems = Array.from(document.querySelectorAll('.nav__item'));

/* Funktion til at åbne/lukke menuen og Event - klik på menu-knap  */
toggleButton.addEventListener('click',()=>{

    /* Variabel + objekt */
    const isOpen = navMenu.classList.toggle('header__nav--active');
    toggleButton.classList.toggle('header__toggle--active');

    /* Kontrolsstruktur if - else */
    if(isOpen){
        toggleButton.setAttribute('aria-label', 'Luk menu');
    } else{
        toggleButton.setAttribute('aria-label','Åbn menu');
    }
    
})

/* Loop: Gennemløber menues elementer */
for(let i = 0; i < navItems.length; i++){
    navItems[i].addEventListener('click',function(){

        navMenu.classList.remove('header__nav--active');
        toggleButton.classList.remove('header__toggle--active');

        /* Sikkerhed: Æmdre aria-label tilbage */
        toggleButton.setAttribute('aria-label', 'Åbn menu');

    });
}
