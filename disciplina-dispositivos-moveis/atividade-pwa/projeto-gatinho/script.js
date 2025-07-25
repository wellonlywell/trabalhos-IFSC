const frases = [
  "Respira. Você está indo bem.",
  "Hoje pode ser difícil, mas você não está sozim.",
  "Tudo bem não estar bem agora.",
  "Você é importante e merece cuidado.",
  "Vai passar. Um passo de cada vez.",
  "Se abraça. Você está fazendo o seu melhor.",
  "Sinta o calor desse gatinho no seu coração.",
  "Permita-se descansar. Você merece.",
  "Você não precisa dar conta de tudo agora.",
  "Tem amor esperando por você, inclusive em você.",
  "Feche os olhos, respira fundo e sente o carinho da vida.",
  "Não se cobre tanto, sua existência já é linda.",
  "Hoje vale comer algo gostoso e ficar quietim no casulo.",
  "Cuide de você como cuidaria de um gatinho fofo.",
  "Tudo que você sente é válido. Está tudo bem.",
  "Seu corpo merece descanso, não cobrança.",
  "Você não precisa se provar agora. Só existir já basta.",
  "Imagine um abraço quentinho te envolvendo agora.",
  "Chorar não é fraqueza, é forma de desaguar o peso.",
  "Você não precisa apressar sua cura. Ela vem no tempo dela.",
  "Pode se acolher devagarinho, sem culpa.",
  "Gatinhos entendem dias difíceis, e estão com você.",
  "Uma respiração profunda pode ser um recomeço.",
  "O mundo é menos duro quando você se trata com carinho.",
  "O afeto pode morar em pequenos momentos. Esse é um deles.",
  "Hoje talvez seja só sobre sobreviver. E isso já é muito.",
  "Descanse como um gatinho hoje, durma por horas.",
  "Se enrosque num cobertor e se permita miar baixinho.",
  "Tire uma soneca do nada, igual um gato sábio faria.",
  "Se estique bem devagar… e sinta seu corpo agradecer.",
  "Se alimente com calma, como um gatinho lambendo sua comidinha.",
  "Hoje você merece um ronron de paz no peito.",
  "Encontre seu cantinho seguro, como um gatinho na caixa favorita.",
  "Seja curioso, mas sem pressa. Tudo no tempo de um gato.",
  "Você pode se limpar das culpas como um gato se lambendo: com delicadeza.",
  "Mesmo quando se esconde, você continua sendo adorável.",
  "Gatinhos também têm dias preguiçosos. Você pode ter os seus.",
  "Que seu coração ronrone um pouquinho de alívio hoje.",
  "Beba água como um gatinho elegante e cuide do seu corpinho.",
  "Se alguém não te entende hoje, apenas olhe como um gato: superior e fofo.",
  "Gatos se deitam no sol e descansam. Você pode fazer o mesmo."
];

// Pegando as referências dos elementos
const botao = document.getElementById("btn-gatinho");
const imagemGato = document.getElementById("imagem-gato");
const fraseEl = document.getElementById("frase");
const imagemWrapper = document.querySelector(".imagem-wrapper");

// A função principal, agora usando async/await para melhor controle
async function buscarConteudo() {
  imagemWrapper.classList.add("loading");
  botao.disabled = true;

  try {
    const frase = frases[Math.floor(Math.random() * frases.length)];
    fraseEl.textContent = frase;

    const timestamp = new Date().getTime();
    const urlGato = `https://cataas.com/cat?width=500&${timestamp}`;
    
    const resposta = await fetch(urlGato);
    const blobDaImagem = await resposta.blob();
    const urlDoObjeto = URL.createObjectURL(blobDaImagem);
    
    imagemGato.src = urlDoObjeto;

  }  catch (erro) {
    console.error("Erro ao buscar conteúdo:", erro);
    fraseEl.textContent = "Oops, não consegui encontrar um gatinho agora. Tente novamente!";
  } finally {
    imagemGato.onload = () => {
        imagemWrapper.classList.remove("loading");
        botao.disabled = false;
    };
  }
}

botao.addEventListener("click", buscarConteudo);

document.addEventListener("DOMContentLoaded", buscarConteudo);

// 1. REGISTRO DO SERVICE WORKER
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then(registration => {
        console.log('Service Worker registrado com sucesso:', registration);
      })
      .catch(error => {
        console.log('Falha ao registrar o Service Worker:', error);
      });
  });
}

// 2. LÓGICA PARA O BOTÃO DE INSTALAÇÃO
let pedidoInstalacao;
const installAppBt = document.getElementById('installAppBt');

// O navegador dispara este evento se o app ainda não foi instalado
window.addEventListener('beforeinstallprompt', (event) => {
  // Previne o comportamento padrão de mostrar o prompt automaticamente
  event.preventDefault();
  // Guarda o evento para que possamos usá-lo depois
  pedidoInstalacao = event;
  // Mostra nosso botão de instalar
  if (installAppBt) {
    installAppBt.style.display = 'block';
  }
});

// Função que será chamada quando o botão for clicado no HTML
function installApp() {
  if (pedidoInstalacao) {
    // Mostra o prompt de instalação para o usuário
    pedidoInstalacao.prompt();

    // Espera pela escolha do usuário
    pedidoInstalacao.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('Usuário aceitou a instalação');
      } else {
        console.log('Usuário recusou a instalação');
      }
      // Limpa o evento, pois ele não pode ser usado novamente
      pedidoInstalacao = null;
      if (installAppBt) {
        installAppBt.style.display = 'none';
      }
    });
  }
}
