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