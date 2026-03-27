/**
 * ARQUIVO DE FUNÇÕES UTILITÁRIAS
 * Contém funções auxiliares reutilizáveis para processamento de dados
 */

/**
 * Extrai o ID do vídeo do YouTube a partir de uma URL
 * Trata URLs no formato: https://www.youtube.com/watch?v=VIDEOID
 * @param {string} url - A URL do YouTube
 * @returns {string} O ID do vídeo do YouTube ou um ID padrão se não conseguir extrair
 */
export function getYouTubeId(url) {
    // Se não há URL fornecida, retorna um ID padrão
    if (!url) return "7RUA0IOfar8";
    
    // Se a URL contém 'v=' (formato comum de YouTube)
    if (url.includes('v=')) {
        // Divide a URL pelo 'v=' e pega o ID
        // Depois divide pelo '&' para remover parâmetros adicionais
        return url.split('v=')[1].split('&')[0];
    }
    
    // Se nenhum padrão foi reconhecido, extrai a última parte da URL
    return url.split('/').pop();
}

/**
 * Gera uma pontuação de relevância aleatória (compatibilidade)
 * Retorna um número entre 80 e 100 para simular um score de relevância
 * @returns {number} Um número aleatório entre 80 e 100 (representando percentual)
 */
export function getRandomMatchScore() {
    // Gera um número de 0 a 19 e adiciona 80
    // Resultado: número entre 80 e 99
    return Math.floor(Math.random() * 20 + 80);
}

/**
 * Retorna a duração de forma aleatória
 * Se o título tem progresso (série), retorna número de temporadas
 * Se não tem progresso (filme), retorna duração em horas e minutos
 * @param {boolean} hasProgress - Se true, é uma série; se false, é um filme
 * @returns {string} A duração formatada (ex: "2h 45m" ou "10 temporadas")
 */
export function getRandomDuration(hasProgress) {
    // Se é uma série (tem progresso)
    if (hasProgress) {
        // Retorna texto de temporadas
        return '10 temporadas';
    } else {
        // Se é um filme, retorna duração em horas e minutos
        // Gera minutos aleatórios entre 0 e 59
        return '2h ' + Math.floor(Math.random() * 59) + 'm';
    }
}

/**
 * Retorna um badge de classificação etária aleatório
 * Com 50% de chance retorna 'A16', com 50% retorna '16'
 * Também retorna a classe CSS correspondente
 * @returns {Object} Um objeto com properties 'text' e 'class'
 * Exemplo: { text: 'A16', class: 'red-accent' } ou { text: '16', class: '' }
 */
export function getRandomAgeBadge() {
    // Gera um número aleatório entre 0 e 1
    // Se maior que 0.5 (50% de chance), retorna 'A16'
    return Math.random() > 0.5 
        ? { text: 'A16', class: 'red-accent' } 
        : { text: '16', class: '' };
}
