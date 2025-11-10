/* ===== JAVASCRIPT DE "LA PAKI GEMZZ" ===== */

// Espera a que todo el contenido de la página se cargue
document.addEventListener("DOMContentLoaded", function() {
    
    // --- LÓGICA EXISTENTE: Cambiar color del menú al hacer scroll ---
    const navbar = document.querySelector('#menu-principal');
    const scrollTrigger = 50; 

    function onScroll() {
        if (window.scrollY > scrollTrigger) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    }

    window.addEventListener('scroll', onScroll);
    onScroll(); // Llama a la función al cargar por si la página carga a mitad
    

    // --- NUEVA LÓGICA: Smooth Scroll Inteligente con Offset ---

    // 1. Selecciona todos los enlaces del menú que apunten a un ID (#)
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link[href^="#"]');

    // 2. Itera sobre cada enlace
    navLinks.forEach(link => {
        
        // 3. Añade un "oyente" de clic a cada uno
        link.addEventListener('click', function(e) {
            
            // 4. Previene el "salto" instantáneo por defecto
            e.preventDefault();

            // 5. Obtiene el ID del destino (ej: "#contacto")
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // 6. Obtiene la altura del menú
                const navbarHeight = navbar.offsetHeight;

                // 7. Calcula la posición final
                // (Posición del elemento - altura del menú - 20px de espacio extra)
                const targetPosition = targetElement.offsetTop - navbarHeight - 20;

                // 8. Ejecuta el scroll suave de JavaScript
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    console.log("¡JavaScript de LA PAKI GEMZZ cargado! (Scroll inteligente activado) ✨");
});