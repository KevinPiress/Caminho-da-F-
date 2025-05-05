// Inicializa a biblioteca AOS (Animate On Scroll)
// Você pode ajustar as configurações globais aqui se desejar
// Veja a documentação da AOS para mais opções: https://github.com/michalsnik/aos
AOS.init({
  duration: 800, // Duração da animação em ms
  once: true, // Animação acontece apenas uma vez
  offset: 50, // Gatilho da animação um pouco antes do elemento aparecer
});

// Rolagem Suave para links de navegação internos
document.querySelectorAll('header nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Previne o comportamento padrão do link

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Calcula a posição do elemento alvo ajustando pela altura do header (se ele for sticky)
            const headerOffset = document.querySelector('header').offsetHeight;
            const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - headerOffset - 20; // -20 para um pequeno espaço extra

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth" // Efeito de rolagem suave
            });
        }
    });
});