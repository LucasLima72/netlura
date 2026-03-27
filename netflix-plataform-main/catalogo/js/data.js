/**
 * ARQUIVO DE DADOS - CATÁLOGO
 * Contém os dados de categorias e itens (filmes/séries) a serem exibidos
 */

// Array de categorias com seus respectivos itens
// Cada categoria contém um título e uma lista de itens (filmes/séries)
export const categories = [
    {
        // Primeira categoria: "Épicos"
        title: "Épicos",
        // Array com os filmes desta categoria
        items: [
            {
                // URL da imagem do filme (usando URLs públicas)
                img: "https://upload.wikimedia.org/wikipedia/en/6/67/Forrest_Gump_poster.jpg",
                // Indica se está no Top 10
                top10: true,
                // Badge exibido no card (ex: "Clássico")
                badge: "Clássico",
                // Cor do badge (ex: "red", "green")
                badgeColor: "red",
                // Progresso de visualização (0 = não assistido)
                progress: 0,
                // Link do vídeo no YouTube para preview
                youtube: "https://www.youtube.com/watch?v=bLvqoHBptjg"
            },
            {
                img: "https://aventurasnahistoria.com.br/wp-content/uploads/entretenimento/gladiador_2_VvnGVes.jpg",
                progress: 0,
                youtube: "https://www.youtube.com/watch?v=cXg62-t8BWs"
            },
            {
                img: "https://i.ytimg.com/vi/OQgySPQ5M3Y/maxresdefault.jpg",
                progress: 0,
                youtube: "https://www.youtube.com/watch?v=zckJCxYxn1g"
            },
            {
                img: "https://ingresso-a.akamaihd.net/img/cinema/cartaz/14413-destaque.jpg",
                progress: 0,
                youtube: "https://www.youtube.com/watch?v=a06zxOyQrAs"
            },
        ]
    },
    {
        // Segunda categoria: "Séries"
        title: "Séries",
        // Array com as séries desta categoria
        items: [
            {
                img: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=600&auto=format&fit=crop",
                top10: true,
                // Badge para nova temporada
                badge: "Nova temporada",
                badgeColor: "red",
                youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k"
            },
            {
                img: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=600&auto=format&fit=crop",
                top10: true,
                youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k"
            },
            {
                img: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=600&auto=format&fit=crop",
                // Badge para novo episódio
                badge: "Novo episódio",
                badgeColor: "red",
                youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k"
            },
            {
                img: "https://images.unsplash.com/photo-1505686994434-e3cc5abf1330?q=80&w=600&auto=format&fit=crop",
                badge: "Novidade",
                badgeColor: "red",
                youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k"
            },
        ]
    },
    {
        // Terceira categoria: "Para maratonar"
        title: "Para maratonar",
        // Array com conteúdos para maratonar
        items: [
            {
                img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop",
                top10: true,
                youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k"
            },
            {
                img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop",
                top10: true,
                badge: "Novidade",
                badgeColor: "red",
                youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k"
            },
            {
                img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop",
                top10: true,
                badge: "Novo episódio",
                badgeColor: "red",
                youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k"
            },
            {
                img: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?q=80&w=600&auto=format&fit=crop",
                top10: true,
                badge: "Novo episódio",
                badgeColor: "red",
                youtube: "https://www.youtube.com/watch?v=wLo9bfgla4k"
            },
        ]
    }
];
