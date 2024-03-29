export function navBar() {
    const buttonMenu = document.querySelector('.header__button');
    const navMenu = document.querySelector('.header__nav');
    
    const navIcon = document.querySelector('.header__menu-icon');
    const closeIcon = 'fa-solid fa-xmark fa-2xl header__menu-icon';
    const menuIcon = 'fa-solid fa-bars fa-2xl header__menu-icon';
    
    buttonMenu.addEventListener('click', ()=> {
        navMenu.classList.toggle('header__nav--active');
        if (navIcon.className === menuIcon ) {
            navIcon.classList.toggle('rotate');
            navIcon.className = navIcon.className.replace(menuIcon, closeIcon);
        } else {
            navIcon.classList.toggle('rotate');
            navIcon.className = navIcon.className.replace(closeIcon, menuIcon);
        }
    })
}
