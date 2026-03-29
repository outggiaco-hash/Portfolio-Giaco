// 1. Efeito de Scroll no Header
window.addEventListener('scroll', () => {
    const header = document.querySelector('#header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 2. Animação de Revelação ao Rolar (Scroll Reveal)
const revealElements = document.querySelectorAll('.reveal');

const scrollReveal = () => {
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementTop < windowHeight - 100) {
            el.classList.add('active');
        }
    });
};

window.addEventListener('scroll', scrollReveal);
window.addEventListener('load', scrollReveal); // Executa ao carregar

// 3. Menu Mobile (Simples e Funcional)
const menuBtn = document.querySelector('.mobile-menu-icon');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    // Para uma versão de venda, você pode adicionar uma classe 'active'
    // e estilizar um menu overlay no CSS
    alert('Funcionalidade de menu lateral acionada. Customize no script.js');
});

// 4. Smooth Scroll para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// 5. Simulação de envio de formulário
const form = document.querySelector('.contact-form');
if(form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button');
        const originalText = btn.innerText;
        
        btn.innerText = "Enviando...";
        btn.style.opacity = "0.7";
        
        setTimeout(() => {
            alert('Mensagem enviada com sucesso! (Simulação)');
            btn.innerText = originalText;
            btn.style.opacity = "1";
            form.reset();
        }, 2000);
    });
}
function comprar(nome, preco) {
    // Codifica os dados para a URL e redireciona
    const url = `confirmacao.html?produto=${encodeURIComponent(nome)}&preco=${encodeURIComponent(preco)}`;
    window.location.href = url;
}
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Ajuste esse valor conforme a altura da sua navbar
                behavior: 'smooth'
            });
        }
    });
});