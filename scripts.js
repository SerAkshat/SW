window.onload = function() {
    const section = document.querySelector('.section');
    const war = document.querySelector('.war');
    const collide = document.querySelector('.collide');
    const thunderbolt = document.querySelector('.thunderbolt');
    const buttonContainer = document.querySelector('.button-container');

    section.style.display = 'none';
    war.style.display = 'none';
    collide.style.display = 'none';
    thunderbolt.style.display = 'none';
    buttonContainer.style.display = 'none';

    setTimeout(() => {
        section.style.display = '';
        war.style.display = '';
        collide.style.display = '';
        thunderbolt.style.display = '';
    }, 50);


    setTimeout(() => {
        buttonContainer.style.display = 'flex';
    }, 3000);
};

setTimeout(() => {
    document.querySelector('.section').style.display = 'none';
    document.querySelector('.war').style.display = 'none';
}, 2500);
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('collapsed');
}

