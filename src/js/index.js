const botaoMostrarProjetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)');

botaoMostrarProjetos.addEventListener('click', () => {
    mostrarMaisProjetos();
    esconderBotao();
});

function esconderBotao() {
    botaoMostrarProjetos.classList.add("remover");
}

function mostrarMaisProjetos() {
    projetosInativos.forEach(projetoInativo => {
        projetoInativo.classList.add('ativo');
    });
}

const botaoMostrarCertificados = document.querySelector('.btn-mostrar-certificados');
const certificadosInativos = document.querySelectorAll('.certificado:not(.ativo)');

botaoMostrarCertificados.addEventListener('click', () => {
    mostrarMaisCertificados();
    esconderBotaoCertificados();
});

function esconderBotaoCertificados() {
    botaoMostrarCertificados.classList.add("remover");
}

function mostrarMaisCertificados() {
    certificadosInativos.forEach(certificadoInativo => {
        certificadoInativo.classList.add('ativo');
    });
}