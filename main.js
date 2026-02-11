var lastScrollTop =0;
navbar = document.getElementById('navbar');

const tema = document.getElementById("botaoTema");

botaoTema.addEventListener("click", () => {
    document.body.classList.toggle("modo-escuro");
});

window.addEventListener('scroll',function(){
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop){
        navbar.style.top ='-90px';
    }else {
        navbar.style.top ='0'
    }
    lastScrollTop = scrollTop;
})


const header = document.getElementById('main-header');
const sections = document.querySelectorAll('.watch-section');

let visibleSections = 0;

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            visibleSections++;
        } else {
            visibleSections--;
        }
    });

    if (visibleSections > 0) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}, {
    threshold: 0.5
});

sections.forEach(section => observer.observe(section));
