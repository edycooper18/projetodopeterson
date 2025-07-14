
document.write('<h1>Nunca desista dos seus sonhos.</h1>');
document.write('<p>Cada passo dado com determinação é um avanço rumo aos seus sonhos. O caminho pode ser longo, mas a jornada vale cada esforço.</p>');
document.write('<p>Os desafios são oportunidades disfarçadas. Enfrente-os com coragem e verá que sua força é maior do que imagina.</p>');

const toggleTheme = document.getElementById("toggleTheme");

toggleTheme.addEventListener('click', () => {
document.body.classList.toggle('dark');
toggleTheme.textContent = document.body.classList.contains('dark')? '☀️' : '🌙' ;
});