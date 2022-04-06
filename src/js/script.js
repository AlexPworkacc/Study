const   humburger = document.querySelector('.humburger'),
        menu = document.querySelector('.menu'),
        closeElem = document.querySelector('.menu__close'),
        closeElem2 = document.querySelector('.menu__overlay');

humburger.addEventListener('click', ()=>{
    menu.classList.add('active');
});

closeElem.addEventListener('click', ()=>{
    menu.classList.remove('active');
});
closeElem2.addEventListener('click', ()=>{
    menu.classList.remove('active');
});
