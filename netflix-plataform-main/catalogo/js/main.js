/**
 * ARQUIVO PRINCIPAL DO CATÁLOGO
 * Responsável por inicializar o catálogo quando a página de catálogo é carregada
 * Importa as categorias e cria os carrosséis
 */

// Importa o array de categorias do arquivo data.js
import { categories } from './data.js';

// Importa a função para criar carrosséis do arquivo de componentes
import { createCarousel } from './components/Carousel.js';

/**
 * Event listener que executa quando o DOM está completamente carregado
 * Realiza a inicialização do catálogo
 */
document.addEventListener('DOMContentLoaded', () => {
    // Obtém o nome do perfil ativo salvo no localStorage
    const nomePerfil = localStorage.getItem('perfilAtivoNome');
    
    // Obtém a imagem do perfil ativo salva no localStorage
    const imagemPerfil = localStorage.getItem('perfilAtivoImagem');

    // Se há dados de perfil salvos, atualiza os elementos da página
    if (nomePerfil && imagemPerfil) {
        // Seleciona o elemento que exibe o nome do perfil (link Kids)
        const kidsLink = document.querySelector('.kids-link');
        
        // Seleciona a imagem do ícone do perfil
        const profileIcon = document.querySelector('.profile-icon');
        
        // Se o elemento kids-link existir, atualiza seu texto com o nome do perfil
        if (kidsLink) kidsLink.textContent = nomePerfil;
        
        // Se o elemento profile-icon existir, atualiza sua imagem
        if (profileIcon) profileIcon.src = imagemPerfil;
    }

    // Seleciona o container onde os carrosséis serão adicionados
    const container = document.getElementById('main-content');
    
    // Se o container existir na página
    if (container) {
        // Itera sobre cada categoria no array de categorias
        categories.forEach(category => {
            // Cria um carrossel para a categoria
            const carousel = createCarousel(category);
            
            // Adiciona o carrossel ao container
            container.appendChild(carousel);
        });
    }
});
