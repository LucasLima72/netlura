/**
 * COMPONENTE CAROUSEL (CARROSSEL)
 * Cria um carrossel de filmes/séries com título e lista de cards
 */

// Importa a função que cria um card individual
import { createCard } from './Card.js';

/**
 * Cria um carrossel (seção) com categoria de filmes/séries
 * @param {Object} category - Objeto com dados da categoria
 * @param {string} category.title - Título da categoria (ex: "Épicos", "Séries")
 * @param {Array} category.items - Array de itens (filmes/séries) da categoria
 * @returns {HTMLElement} O elemento section completo com o carrossel
 */
export function createCarousel(category) {
    // Cria o elemento div principal que representa a seção de um carrossel
    const section = document.createElement('div');
    
    // Adiciona a classe 'slider-section' para estilização
    section.className = 'slider-section';

    // ========== CABEÇALHO DO CARROSSEL ==========
    // Cria a div para o cabeçalho (título + indicadores)
    const header = document.createElement('div');
    
    // Adiciona a classe 'slider-header' para estilização
    header.className = 'slider-header';

    // ========== TÍTULO DA CATEGORIA ==========
    // Cria o elemento h2 para o título da categoria
    const title = document.createElement('h2');
    
    // Adiciona a classe 'slider-title' para estilização
    title.className = 'slider-title';
    
    // Define o texto do título (ex: "Épicos", "Séries", etc)
    title.innerText = category.title;

    // ========== INDICADORES ==========
    // Cria a div para os indicadores (pontos de navegação)
    const indicators = document.createElement('div');
    
    // Adiciona a classe 'slider-indicators' para estilização
    indicators.className = 'slider-indicators';

    // Adiciona o título ao cabeçalho
    header.appendChild(title);
    
    // Adiciona os indicadores ao cabeçalho
    header.appendChild(indicators);
    
    // Adiciona o cabeçalho à seção
    section.appendChild(header);

    // ========== LINHA DE FILMES ==========
    // Cria a div que conterá todos os cards de filmes em linha
    const row = document.createElement('div');
    
    // Adiciona a classe 'movie-row' para estilização e comportamento de scroll
    row.className = 'movie-row';

    // ========== CRIAÇÃO DOS CARDS ==========
    // Itera sobre cada item (filme/série) na categoria
    category.items.forEach(item => {
        // Cria um card para o item chamando a função createCard
        const card = createCard(item);
        
        // Adiciona o card criado à linha de filmes
        row.appendChild(card);
    });

    // Adiciona a linha de filmes à seção
    section.appendChild(row);
    
    // Retorna a seção completa com o carrossel pronto para ser inserido no DOM
    return section;
}
