// 1. Efeito de Scroll na Navbar (Muda altura e fundo)
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// 2. Menu Mobile (Hambúrguer Funcional)
const mobileMenu = document.getElementById('mobile-menu');
const navLinksContainer = document.querySelector('.nav-links');
// Para o mobile, vamos clonar os links e o botão e criar um overlay
const navWrapper = document.querySelector('.nav-wrapper');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    // Cria um overlay simples se não existir
    let overlay = document.querySelector('.mobile-overlay');
    
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.classList.add('mobile-overlay');
        // Clona o conteúdo da nav-wrapper para o overlay
        const menuContent = navWrapper.cloneNode(true);
        menuContent.style.display = 'flex';
        menuContent.style.flexDirection = 'column';
        menuContent.style.alignItems = 'center';
        menuContent.style.justifyContent = 'center';
        menuContent.style.gap = '30px';
        
        overlay.appendChild(menuContent);
        document.body.appendChild(overlay);
        
        // Adiciona estilos inline rápidos para o overlay (Premium não usa alert, usa design)
        overlay.style.position = 'fixed';
        overlay.style.top = '0'; overlay.style.left = '0';
        overlay.style.width = '100%'; overlay.style.height = '100vh';
        overlay.style.background = '#F5F1ED'; overlay.style.zIndex = '999';
        overlay.style.display = 'flex'; overlay.style.transition = '0.5s';
        overlay.style.opacity = '0'; overlay.style.visibility = 'hidden';

        // Fechar ao clicar em um link clonado
        overlay.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                closeMenu(overlay);
            });
        });
    }
    if (mobileMenu.classList.contains('active')) {
        overlay.style.opacity = '1';
        overlay.style.visibility = 'visible';
        document.body.style.overflow = 'hidden'; // Impede scroll do fundo
    } else {
        closeMenu(overlay);
    }
});

function closeMenu(overlay) {
    mobileMenu.classList.remove('active');
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';
    document.body.style.overflow = 'auto';
}

// 3. Scroll Smooth (Suave) para os links internos (Funcionalidade Obrigatória)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80, // Ajuste para a altura da nav
                behavior: 'smooth'
            });
        }
    });
});

// 4. Scroll Reveal (Animação de Surgimento Orgânico)
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 100; // Distância do fundo da tela para ativar

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add('active');
        }
    });
};
// Ativa no scroll e uma vez no carregamento
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// 5. Envio de Formulário (Simulação Funcional)
const organicForm = document.getElementById('organic-form');

organicForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Impede o recarregamento da página
    
    const btn = organicForm.querySelector('button');
    const originalText = btn.innerText;
    
    // Feedback visual premium
    btn.innerText = "Conectando...";
    btn.style.opacity = "0.6";
    btn.style.transform = "scale(0.95)";
    btn.disabled = true;

    // Simula envio de API (2 segundos)
    setTimeout(() => {
        // Cria uma notificação elegante em vez de um alert básico
        const notification = document.createElement('div');
        notification.innerHTML = `<i class="fas fa-check-circle" style="color: #8DA399; margin-right: 10px;"></i> Sua mensagem fluiu até nós. Responderemos em breve.`;
        notification.style.position = 'fixed';
        notification.style.bottom = '30px'; notification.style.right = '30px';
        notification.style.background = 'white'; notification.style.color = '#2C2C2C';
        notification.style.padding = '20px 30px'; notification.style.borderRadius = '15px';
        notification.style.boxShadow = '0 10px 30px rgba(0,0,0,0.1)';
        notification.style.zIndex = '1001'; notification.style.fontFamily = 'Urbanist, sans-serif';
        notification.style.transition = '0.5s'; notification.style.transform = 'translateY(20px)';
        notification.style.opacity = '0';

        document.body.appendChild(notification);

        // Anima a notificação entrando
        setTimeout(() => {
            notification.style.transform = 'translateY(0)';
            notification.style.opacity = '1';
        }, 100);

        // Restaura o botão
        btn.innerText = originalText;
        btn.style.opacity = "1";
        btn.style.transform = "scale(1)";
        btn.disabled = false;
        organicForm.reset();

        // Remove a notificação após 4 segundos
        setTimeout(() => {
            notification.style.transform = 'translateY(20px)';
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 500);
        }, 4000);

    }, 2300);
});