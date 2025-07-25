# 🐱 Gatinhos para Dias Difíceis

Um Progressive Web App (PWA) feito com carinho, pensado para ser um refúgio acolhedor em momentos difíceis. 
A cada clique, o app busca uma nova imagem de gatinho na API `cataas.com` e a acompanha com uma frase de conforto e afeto, criando um pequeno ritual de autocuidado.

## ✨ Sobre o Projeto
Este projeto foi desenvolvido como parte da disciplina de Desenvolvimento para Dispositivos Móveis. 
O objetivo era criar uma aplicação web que consumisse uma API externa e que fosse instalável em dispositivos móveis e desktop, funcionando também offline graças às tecnologias de PWA. A escolha do tema "Gatinhos para Dias Difíceis" visa oferecer uma experiência que promova bem-estar, calma e um momento de leveza no dia a dia do usuário.

## 🛠️ Tecnologias Utilizadas
* **HTML5:** Para a estrutura semântica da página.
* **CSS3:** Para a estilização, design responsivo e criação de uma atmosfera acolhedora.
* **JavaScript (ES6+):** Para toda a lógica de interatividade, consumo da API e manipulação do DOM.
* **TheCatAPI (cataas.com):** API externa utilizada para buscar imagens aleatórias de gatos.
* **PWA (Progressive Web App):**
    * **Manifest.json:** Para tornar a aplicação instalável.
    * **Service Worker:** Para permitir o funcionamento offline, cacheando os principais recursos da aplicação.

## 🚀 Como Rodar a Aplicação
Para visualizar e interagir com o projeto em sua máquina local, siga os passos abaixo. 
O método com servidor local é o mais recomendado para garantir que todas as funcionalidades, incluindo as chamadas para a API, funcionem corretamente.

### Método 1: Com um Servidor Local (Recomendado)
Esta é a forma mais segura de evitar erros de CORS (Cross-Origin Resource Sharing) que podem ocorrer ao fazer requisições a uma API a partir de um arquivo local.

1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/wellonlywell/trabalhos-IFSC.git](https://github.com/wellonlywell/trabalhos-IFSC.git)
    ```
2.  **Navegue até a Pasta do Projeto:**
    ```bash
    cd trabalhos-IFSC/disciplina-dispositivos-moveis/atividade-pwa
    ```
3.  **Use a Extensão "Live Server" no VS Code (ou outro servidor similar):**
    * Se você usa o Visual Studio Code, instale a extensão [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer).
    * Com a pasta do projeto aberta no VS Code, clique com o botão direito no arquivo `index.html`.
    * Selecione a opção **"Open with Live Server"**.
    * Pronto! A aplicação será aberta no seu navegador padrão.

### Método 2: Abrindo o Arquivo Diretamente
Você também pode simplesmente abrir o arquivo `index.html` no seu navegador.
1.  Navegue até a pasta do projeto no seu computador.
2.  Dê um duplo-clique no arquivo `index.html`.
3.  **Atenção:** Dependendo das configurações de segurança do seu navegador, a chamada para a API de gatinhos pode ser bloqueada ao rodar o arquivo desta forma. Se as imagens não carregarem, por favor, utilize o **Método 1**.

## 📱 Printscreen da Aplicação Mobile
<img width="402" height="598" alt="image" src="https://github.com/user-attachments/assets/73af9cc6-bc37-48e7-b688-59cf8eb4492e" />
<img width="403" height="591" alt="image" src="https://github.com/user-attachments/assets/68577405-8800-4f3c-a8a2-acb7e877eb28" />
<img width="413" height="584" alt="image" src="https://github.com/user-attachments/assets/03ad7599-ecc1-47f5-ade8-31e4202fa72c" />


