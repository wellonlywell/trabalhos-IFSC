document.addEventListener('DOMContentLoaded', () => {

    // --- 1. DADOS DAS CATEGORIAS ---
    const dadosOceano = {
        mamiferos: [
            {
                titulo: 'Baleia Jubarte',
                imagem: 'https://www.veracel.com.br/wp-content/uploads/2020/04/post-baleia.jpg',
                descricao: 'Conhecidas por seus saltos espetaculares e cantos complexos, as baleias jubarte são gigantes gentis dos oceanos.',
                alt: 'Uma baleia jubarte com sua cauda para fora da água.'
            },
            {
                titulo: 'Golfinho-nariz-de-garrafa',
                imagem: 'https://mega.ibxk.com.br/2023/12/06/06164200531690.jpg',
                descricao: 'Extremamente inteligentes e sociais, são um dos mamíferos marinhos mais conhecidos e queridos.',
                alt: 'Um golfinho nadando logo abaixo da superfície da água azul.'
            }
        ],
        recifes: [
            {
                titulo: 'Recifes de Coral',
                imagem: 'https://images.ecycle.com.br/wp-content/uploads/2021/11/10183748/q-u-i-0G01UI1MQhg-unsplash-2-scaled.jpg.webp',
                descricao: 'Chamados de "florestas tropicais do mar", os recifes de coral abrigam uma biodiversidade incrível.',
                alt: 'Muitos corais coloridos no fundo do mar com peixes ao redor.'
            },
            {
                titulo: 'Peixe-palhaço',
                imagem: 'https://images.unsplash.com/photo-1535591273668-578e31182c4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wzOTAwNXwwfDF8c2VhcmNofDF8fGNsb3duZmlzaHxlbnwwfHx8fDE2ODM3ODE1NDR8MA&ixlib=rb-4.0.3&q=80&w=400',
                descricao: 'Famosos por sua simbiose com anêmonas, vivem protegidos entre seus tentáculos venenosos.',
                alt: 'Close-up de um peixe-palhaço em sua anêmona.'
            }
        ],
        abissais: [
            {
                titulo: 'Peixe-pescador',
                imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Humpback_anglerfish.png/440px-Humpback_anglerfish.png',
                descricao: 'Habitantes das profundezas escuras, usam uma isca bioluminescente para atrair presas.',
                alt: 'Ilustração científica de um peixe-pescador abissal com sua isca luminosa acesa.'
            },
            {
                titulo: 'Lula-gigante',
                imagem: 'https://conexaoplaneta.com.br/wp-content/uploads/2023/01/lula-gigante-japao-3-conexao-planeta.jpg',
                descricao: 'Uma criatura lendária e raramente vista, pode atingir tamanhos imensos nas profundezas do oceano.',
                alt: 'Uma lula-gigante com seus enormes olhos e tentáculos flutuando na escuridão do oceano profundo.'
            }
        ]
    };

    // --- 2. SELEÇÃO DOS ELEMENTOS DO DOM ---
    const cardContainer = document.getElementById('card-container');
    const navLinks = document.querySelectorAll('.nav-link[data-category]');

    // --- 3. FUNÇÃO PARA RENDERIZAR OS CARTÕES ---
    function renderizarCartoes(categoria) {
        const dados = dadosOceano[categoria];
        if (!dados) {
            cardContainer.innerHTML = '<p class="text-center">Categoria não encontrada.</p>';
            return;
        }

        const cardsHTML = dados.map(item => `
            <div class="col-sm-12 col-md-6 col-lg-4 mb-4">
                <div class="card h-100 shadow-sm">
                    <img src="${item.imagem}" class="card-img-top" alt="${item.alt}">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">${item.titulo}</h5>
                        <p class="card-text">${item.descricao}</p>
                    </div>
                </div>
            </div>
        `).join('');

        cardContainer.innerHTML = cardsHTML;
    }

    // --- 4. ADICIONAR EVENTOS DE CLIQUE AOS LINKS DO MENU ---
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            navLinks.forEach(l => {
                l.classList.remove('active');
                l.removeAttribute('aria-current');
            });

            link.classList.add('active');
            link.setAttribute('aria-current', 'page');

            const categoria = link.dataset.category;
            renderizarCartoes(categoria);
        });
    });

    // --- 5. CARGA INICIAL ---
    renderizarCartoes('mamiferos');

    // --- 6. REGISTRO DO SERVICE WORKER ---
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('./service-worker.js')
                .then(registration => {
                    console.log('Service Worker registrado com sucesso: ', registration.scope);
                })
                .catch(err => {
                    console.log('Registro do Service Worker falhou: ', err);
                });
        });
    }
});