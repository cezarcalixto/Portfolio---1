const buttomMobile = document.querySelector('[data-buttom="buttom"]');
const nav = document.querySelector('.nav');

buttomMobile.addEventListener('click', ()=> {
    console.log('clicou')
    nav.classList.toggle('ativado')
    buttomMobile.classList.toggle('ativado')
})