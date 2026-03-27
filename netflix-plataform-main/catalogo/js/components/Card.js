/**
 * COMPONENTE CARD
 * Cria um card de filme/série com todos os elementos interativos
 * Inclui a imagem, botões de ação, preview de vídeo no hover, etc
 */

// Importa funções utilitárias do arquivo utils.js
import { getYouTubeId, getRandomMatchScore, getRandomDuration, getRandomAgeBadge } from '../utils.js';

/**
 * Cria um card de filme/série
 * @param {Object} item - Objeto com dados do filme/série
 * @param {string} item.img - URL da imagem do poster
 * @param {number} item.progress - Progresso de visualização (0 = não assistido)
 * @param {string} item.youtube - URL do vídeo no YouTube para preview
 * @returns {HTMLElement} O elemento card completo pronto para ser inserido no DOM
 */
export function createCard(item) {
    // Cria o elemento div que será o card
    const card = document.createElement('div');
    
    // Adiciona a classe 'movie-card' para estilização
    card.className = 'movie-card';
    
    // Se o item tem progresso de visualização, adiciona a classe 'has-progress'
    // Isso mudará sua aparência no CSS
    if (item.progress) {
        card.classList.add('has-progress');
    }

    // ========== ELEMENTO DE IMAGEM ==========
    // Cria o elemento img para exibir o poster
    const img = document.createElement('img');
    
    // Define a URL da imagem
    img.src = item.img;
    
    // Define o texto alternativo (exibido se a imagem não carregar)
    img.alt = `Movie cover`;

    // ========== ELEMENTO DE IFRAME PARA VÍDEO ==========
    // Cria um iframe para executar vídeos do YouTube
    const iframe = document.createElement('iframe');
    
    // Remove a borda padrão do iframe
    iframe.frameBorder = "0";
    
    // Permite autoplay e conteúdo criptografado
    iframe.allow = "autoplay; encrypted-media";

    // Extrai o ID do vídeo da URL do YouTube
    const videoId = getYouTubeId(item.youtube);

    // Adiciona o iframe e a imagem ao card
    // O iframe fica por trás da imagem e aparece ao fazer hover
    card.appendChild(iframe);
    card.appendChild(img);

    // ========== ELEMENTOS DE DETALHES ==========
    // Gera um badge de classificação etária aleatório
    const ageBadge = getRandomAgeBadge();

    // Cria a div que conterá todos os detalhes do filme
    const details = document.createElement('div');
    
    // Adiciona a classe 'card-details' para estilização
    details.className = 'card-details';
    
    // Define o HTML interno com todos os botões e informações
    details.innerHTML = `
        <!-- Container dos botões de ação -->
        <div class="details-buttons">
            <!-- Botões do lado esquerdo (Play, +/✓, Like) -->
            <div class="left-buttons">
                <!-- Botão Play -->
                <button class="btn-icon btn-play-icon"><i class="fas fa-play" style="margin-left:2px;"></i></button>
                
                <!-- Botão + (adicionar) ou ✓ (verificado) -->
                <!-- Se tem progress, mostra ✓ (completado), senão mostra + (adicionar) -->
                ${item.progress ? '<button class="btn-icon"><i class="fas fa-check"></i></button>' : '<button class="btn-icon"><i class="fas fa-plus"></i></button>'}
                
                <!-- Botão Like (polegar para cima) -->
                <button class="btn-icon"><i class="fas fa-thumbs-up"></i></button>
            </div>
            
            <!-- Botões do lado direito -->
            <div class="right-buttons">
                <!-- Botão de mais informações (chevron para baixo) -->
                <button class="btn-icon"><i class="fas fa-chevron-down"></i></button>
            </div>
        </div>
        
        <!-- Container com informações principais -->
        <div class="details-info">
            <!-- Score de compatibilidade/relevância (entre 80-100%) -->
            <span class="match-score">${getRandomMatchScore()}% relevante</span>
            
            <!-- Badge de classificação etária (16, A16, etc) -->
            <span class="age-badge ${ageBadge.class}">${ageBadge.text}</span>
            
            <!-- Duração (em hours:minutes para filmes ou temporadas para séries) -->
            <span class="duration">${getRandomDuration(item.progress)}</span>
            
            <!-- Qualidade do vídeo -->
            <span class="resolution">HD</span>
        </div>
        
        <!-- Tags/Gêneros do filme -->
        <div class="details-tags">
            <span>Empolgante</span>
            <span>Animação</span>
            <span>Ficção</span>
        </div>
    `;
    
    // Adiciona os detalhes ao card
    card.appendChild(details);

    // ========== BARRA DE PROGRESSO (se houver) ==========
    // Se o item tem progresso (série iniciada ou filme em andamento)
    if (item.progress) {
        // Cria o container da barra de progresso
        const pbContainer = document.createElement('div');
        pbContainer.className = 'progress-bar-container';
        
        // Cria o elemento que representa o progresso (a parte preenchida)
        const pbValue = document.createElement('div');
        pbValue.className = 'progress-value';
        
        // Define o width (largura) como a porcentagem do progresso
        pbValue.style.width = `${item.progress}%`;
        
        // Adiciona o progresso ao container
        pbContainer.appendChild(pbValue);
        
        // Adiciona a barra de progresso ao card
        card.appendChild(pbContainer);
    }

    // ========== INTERAÇÕES DO MOUSE ==========
    // Variável para armazenar o timeout (será usada para limpar o timer se necessário)
    let playTimeout;
    
    /**
     * Event listener para quando o mouse entra no card
     * Pré-carrega o vídeo do YouTube e faz a animação
     */
    card.addEventListener('mouseenter', () => {
        // Obtém a posição do card em relação à viewport
        const rect = card.getBoundingClientRect();
        
        // Obtém a largura da janela
        const windowWidth = window.innerWidth;
        
        // Se o card está muito à esquerda (menos de 100px da borda)
        // Adiciona classe para expandir para a direita
        if (rect.left < 100) {
            card.classList.add('origin-left');
        } 
        // Se o card está muito à direita (menos de 100px da borda)
        // Adiciona classe para expandir para a esquerda
        else if (rect.right > windowWidth - 100) {
            card.classList.add('origin-right');
        }

        // Define um timeout de 600ms antes de começar a tocar o vídeo
        // Isso evita que o vídeo comece imediatamente, dando tempo para o hover effect
        playTimeout = setTimeout(() => {
            // Define a URL do iframe com o vídeo do YouTube
            // Parâmetros:
            // - autoplay=1: inicia automaticamente
            // - mute=1: começa silenciado
            // - controls=0: sem controles visíveis
            // - modestbranding=1: sem logo grande do YouTube
            // - loop=1: repete o vídeo
            // - playlist=ID: necessário para loop funcionar
            iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&controls=0&modestbranding=1&loop=1&playlist=${videoId}`;
            
            // Adiciona classe para mostrar o iframe
            iframe.classList.add('playing');
            
            // Adiciona classe para esconder/modificar a imagem enquanto o vídeo toca
            img.classList.add('playing-video');
        }, 600);
    });

    /**
     * Event listener para quando o mouse sai do card
     * Para o vídeo e restaura o estado original
     */
    card.addEventListener('mouseleave', () => {
        // Limpa o timeout se o mouse saiu antes dos 600ms
        clearTimeout(playTimeout);
        
        // Remove a classe que mostra o iframe
        iframe.classList.remove('playing');
        
        // Remove a classe que modificava a imagem
        img.classList.remove('playing-video');
        
        // Limpa a URL do iframe (para o vídeo)
        iframe.src = "";
        
        // Remove as classes de origem (que controlam a direção da expansão)
        card.classList.remove('origin-left');
        card.classList.remove('origin-right');
    });

    // Retorna o card completo pronto para ser inserido no DOM
    return card;
}
