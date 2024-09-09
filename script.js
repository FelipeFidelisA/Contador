document.getElementById('contarBtn').addEventListener('click', function() {
    const inicio = document.getElementById('inicio').value;
    const passo = document.getElementById('passo').value;
    const fim = document.getElementById('fim').value;
    let resultado = '';

    // Verifica se os campos estão vazios
    if (inicio === '') {
        alert('Por favor, preencha o campo "Início".');
        return;
    }
    if (passo === '') {
        alert('Por favor, preencha o campo "Passo".');
        return;
    }
    if (fim === '') {
        alert('Por favor, preencha o campo "Fim".');
        return;
    }

    // Converte os valores para número
    const inicioNum = parseInt(inicio);
    const passoNum = parseInt(passo);
    const fimNum = parseInt(fim);

    // Realiza a contagem
    for (let i = inicioNum; passoNum > 0 ? i <= fimNum : i >= fimNum; i += passoNum) {
        resultado += i + ' ';
    }

    // Exibe o resultado
    document.getElementById('resultado').textContent = resultado;
});