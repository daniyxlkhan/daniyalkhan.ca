/* SHOW MENU */
const navMenu = document.getElementById('nav-menu'),                                            
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

if(navToggle) {
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               
    })
}

if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

/* REMOVE PHONE MENU */
const navLink = document.querySelectorAll('.nav__link');

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/* SHADOW HEADER */
const shadowHeader = () => {
    const header = document.getElementById('header')
 
    window.scrollY >= 50 ? header.classList.add('shadow-header')
                          : header.classList.remove('shadow-header')
 }
 window.addEventListener('scroll', shadowHeader)


/* SHOW SCROLL UP */ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
    const scrollDown = window.scrollY;

    sections.forEach((current) => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id');
        const navLink = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

        if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
            navLink.classList.add('active-link');
        } else {
            navLink.classList.remove('active-link');
        }
    });
};

window.addEventListener('scroll', scrollActive);


/* SCROLL REVEAL ANIMATION */
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.home__info, .contact__mail', {origin: 'right'})
sr.reveal('.home__name , .contact__social, .contact__data', {origin: 'left'})
sr.reveal('.about__container, .section-title-1, .about__info', {origin: 'left'})
sr.reveal('.projects__card', {interval: 70})


/* EMAIL JS */
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message');
    
const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0gqglme', 'template_a2hm0ca', '#contact-form', 'Cf3ywRrQehouSxS7z')
        .then(() => {
            contactMessage.textContent = 'Message sent successfully ✅';

            setTimeout(() => {
                contactMessage.textContent = '';
            }, 5000);
            
            contactForm.reset();
        })
        .catch(() => {
            contactMessage.textContent = 'Message not sent ❌';
        });
};

contactForm.addEventListener('submit', sendEmail);

