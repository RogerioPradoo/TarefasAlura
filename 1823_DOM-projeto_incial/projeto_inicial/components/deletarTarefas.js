const Botaodeletar = () => {
    const botaoDeletar = document.createElement('button')

    botaoDeletar.innerText = 'deletar';
    botaoDeletar.addEventListener('click', deletarTarefa);

    return botaoDeletar
}

const deletarTarefa = (e) => {
    const botaoDeletar = e.target;

    const tarefaDeletada = botaoDeletar.parentElement;
    tarefaDeletada.remove();

    return botaoDeletar;
}

export default Botaodeletar