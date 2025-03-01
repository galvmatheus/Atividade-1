document.addEventListener("DOMContentLoaded", function() {
    const botao = document.getElementById("toggle-theme");
    const body = document.body;

    botao.addEventListener("click", function() {
        if (body.classList.contains("light-theme")) {
            body.classList.replace("light-theme", "dark-theme");
            botao.textContent = "☀️ Modo Claro"; // Muda o texto do botão
        } else {
            body.classList.replace("dark-theme", "light-theme");
            botao.textContent = "🌙 Modo Escuro"; // Muda o texto do botão
        }
    });
});