// Guarda o perfil ativo no localStorage e navega para o catálogo
const profileLinks = document.querySelectorAll('.profile-link');

if (profileLinks.length > 0) {
    profileLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            const nome = link.dataset.name;
            const imagem = link.dataset.image;
            const destino = link.getAttribute('href') || 'netflix-plataform-main/catalogo/catalogo.html';

            if (nome) localStorage.setItem('perfilAtivoNome', nome);
            if (imagem) localStorage.setItem('perfilAtivoImagem', imagem);

            window.location.href = destino;
        });
    });
}
