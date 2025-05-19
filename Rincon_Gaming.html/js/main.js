// Inicialización del Slider
const swiper = new Swiper('.main-slider', {
    // Configuración básica
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    
    // Efectos
    effect: 'fade',
    fadeEffect: {
        crossFade: true
    },
    
    // Navegación
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    
    // Paginación
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

// Menú móvil
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Animación suave al hacer scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Efecto de aparición al hacer scroll
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observar elementos para animación
document.querySelectorAll('.noticias-grid > *, .videos-grid > *').forEach(el => {
    observer.observe(el);
}); 