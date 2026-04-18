        // 1. Lógica do Menu Hamburger
        const menuToggle = document.getElementById('menuToggle');
        const menuOverlay = document.getElementById('menuOverlay');
        const menuLinks = document.querySelectorAll('.menu-overlay a');
        let isMenuOpen = false;

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                menuOverlay.classList.add('active');
                menuToggle.children[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                menuToggle.children[1].style.opacity = '0';
                menuToggle.children[2].style.transform = 'rotate(-45deg) translate(7px, -8px)';
            } else {
                menuOverlay.classList.remove('active');
                menuToggle.children[0].style.transform = 'none';
                menuToggle.children[1].style.opacity = '1';
                menuToggle.children[2].style.transform = 'none';
            }
        }

        menuToggle.addEventListener('click', toggleMenu);
        menuLinks.forEach(link => {
            link.addEventListener('click', toggleMenu);
        });

        // 2. Lógica de Scroll da Navbar (Mudar cor ao descer)
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // 3. Inicialização do Swiper Carousel (Estilo Apple/Awwwards)
        var swiper = new Swiper(".mySwiper", {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 1.5,
                slideShadows: false,
                scale: 0.88,
            },
            loop: true,
            speed: 800,
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            }
        });

        // 4. Lógica do Visualizador 360 Real (Video Scrubbing)
        const slider360 = document.getElementById('slider360');
        const video360 = document.getElementById('video360');

        slider360.addEventListener('input', (e) => {
            if (video360.readyState >= 2) { // Verifica se o vídeo está carregado o suficiente
                const percentage = e.target.value / 100;
                // Calcula o tempo do vídeo proporcional à posição do slider
                video360.currentTime = video360.duration * percentage;
            }
        });

        // 5. Animações GSAP de Scroll (O segredo do estilo Awwwards)
        gsap.registerPlugin(ScrollTrigger);

        const revealElements = document.querySelectorAll(".gsap-reveal");

        revealElements.forEach((el) => {
            gsap.to(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%", // Inicia quando o topo do elemento chega a 85% da tela
                    toggleActions: "play none none reverse"
                },
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out"
            });
        });

        // 6. Animação específica para o Scroll Indicator (Desaparecer ao rolar)
        gsap.to(".scroll-indicator", {
            scrollTrigger: {
                trigger: ".hero",
                start: "top top",
                end: "20% top",
                scrub: true
            },
            opacity: 0,
            y: -20,
            ease: "none"
        });
