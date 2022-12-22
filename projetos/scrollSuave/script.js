function subirTela() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    })
}

function verificaScroll() {
    if (window.scrollY == 0) {
        document.querySelector(".scrollbutton").style.display = 'none';
    } else {
        document.querySelector(".scrollbutton").style.display = 'block';
    }
}

//setInterval(verificaScroll, 1000) executa função a cada 1 segundo, porém executa diversas vezes sem necessidade, não muito eficiente.
window.addEventListener("scroll", verificaScroll);