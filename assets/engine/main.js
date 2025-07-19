const botao = document.getElementById('gerarGatinho');
const imagem = document.querySelector('img');

function buscarImagemGato() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(resposta => resposta.json())
        .then(dados => {
            const urlImagem = dados[0].url;
            imagem.src = urlImagem;
        })
        .catch(erro => {
            console.error('Ocorreu um erro', erro);
            alert('Não foi possível carregar a imagem do gatinho. Tente novamente!')
        })
};


botao.addEventListener('click', buscarImagemGato);