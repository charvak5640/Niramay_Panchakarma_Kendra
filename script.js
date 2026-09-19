document.addEventListener('DOMContentLoaded', () => {

    // 1. Hero Image Auto-Slider
    const slides = document.querySelectorAll('.hero-slider .slide');
    let currentSlide = 0;

    if (slides.length > 1) {
        setInterval(() => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        }, 4000);
    }

    // 2. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // 3. Interactive Panchkarma Tabs
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.getAttribute('data-tab');

            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(c => c.classList.remove('active'));

            btn.classList.add('active');
            const targetEl = document.getElementById(target);
            if (targetEl) {
                targetEl.classList.add('active');
            }
        });
    });

    // 4. Appointment Date Constraint (Prevents past dates)
    const datePicker = document.getElementById('appointment-date');
    if (datePicker) {
        const today = new Date().toISOString().split('T')[0];
        datePicker.setAttribute('min', today);
    }

    // 5. Form Submission & Toast Handling
    const form = document.querySelector('.appointment-form form');
    const toast = document.querySelector('.toast');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (toast) {
                toast.textContent = 'Appointment Request Received! We will contact you shortly.';
                toast.style.display = 'block';

                setTimeout(() => {
                    toast.style.display = 'none';
                }, 4000);
            }
            form.reset();
        });
    }
});