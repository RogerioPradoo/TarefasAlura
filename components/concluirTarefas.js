const BotaoConcluido = () => {
    const botao = document.createElement('button');

    botao.classList.add('check-button');
    botao.innerText = 'concluir';

    botao.addEventListener('click', concluirTarefa);

    return botao;
}

const concluirTarefa = (e) => {
    const botaoConcluido = e.target;

    const tarefaCompleta = botaoConcluido.parentElement;

    tarefaCompleta.classList.toggle('done');
}

export default BotaoConcluido
