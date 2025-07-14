alert('Olá, visitante!');
document.write('<h1>Obrigado por acessar meu site!!</h1>');
document.write('<p>Meu nome é Eduardo e estou muito feliz por ter entrado no meu site! :)</p>');
document.write('<p>Fique a vontade para navegar por ele!!</p>');

const toggleTheme = document.getElementById("toggleTheme");

toggleTheme.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        toggleTheme.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});