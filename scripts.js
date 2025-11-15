const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")
const cards = document.querySelectorAll('.card')


function mostrarForm(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function esconderForm(){
    form.style.left = "-330px"
    form.style.transform = "translatex(0%)"
    mascara.style.visibility = "hidden"
}

cards.forEach(card => {

    card.addEventListener('mouseenter', () => {
        card.style.transition = "transform 0.1s ease";
        card.style.transform = "translateY(-8px) scale(1.10)"; // pequeno salto ao entrar
    });

    card.addEventListener('mousemove', (e) => {
        const rect =card.getBoundingClientRect();
        const x = e.clientX - rect.left; //posição  do mouse dentro do card
        const Y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height /2;

        const rotateX = ((Y - centerY) / centerY) * -20; 
        const rotateY = ((x - centerX) / centerX) * 20;

        card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px) scale(1.12)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transition = "transform 0.3s ease";
        card.style.transform = 'rotateX(0) rotateY(0) scale(1)';
    });
});