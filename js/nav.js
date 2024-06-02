const burger = document.querySelector('.burger');
        const navbar = document.querySelector('.navbar');
        const navLinks = document.querySelector('.nav-links');
        
        burger.addEventListener('click', () => {
            navbar.classList.toggle('nav-active');
            burger.classList.toggle('toggle');
        });