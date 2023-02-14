$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
 
});

function mudarEstado(){
    const darkModeStorage = localStorage.getItem('dark-mode')
    const sidenav = document.querySelector('#sidebar')
    const html = document.querySelector('body')
    const cards = document.querySelectorAll('.card');
    const cardsTexts = document.querySelectorAll('#text-cards');
    if(darkModeStorage == null){
        html.setAttribute("dark", "true")
        cards.forEach(card => {
            card.classList.add('bg-dark');
            card.classList.add('text-light');
          });
          cardsTexts.forEach(card => {
            card.classList.add('text-light');
          });
        sidenav.setAttribute("dark", "true")
        localStorage.setItem('dark-mode', true)
    }else{
        html.removeAttribute("dark")
        sidenav.removeAttribute("dark")
        localStorage.removeItem('dark-mode')
        cards.forEach(card => {
            card.classList.remove('bg-dark');
            card.classList.remove('text-light');
          });
          cardsTexts.forEach(card => {
            card.classList.remove('text-light');
          });
    }
}