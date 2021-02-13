// Função para responsividade com Mobile

const celular = document.querySelector('.telaMobile');
const desktop = document.querySelector('.telaDesktop');


window.addEventListener('resize', function(){
        if (window.innerWidth < 750){
                celular.classList.remove('telaMobile')
        } else {
                celular.classList.add('telaMobile')
        }
}, true);

