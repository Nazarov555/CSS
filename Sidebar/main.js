const menuBtn = document.querySelector('.menu_button');
const closeBtn = document.querySelector('.close_button');
const sidebar = document.querySelector('.sidebar-wrapper');

menuBtn.addEventListener('click', ()=>{
    sidebar.classList.toggle('open');
});

closeBtn.addEventListener('click', ()=>{
    sidebar.classList.remove('open');
});