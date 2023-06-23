import conclui from './components/concluirTarefas.js'
import deleta from "./components/deletarTarefas.js"

const criarTarefa = (e) => {
    e.preventDefault();

    const lista = document.querySelector('[data-list]');
    const capturandoInput = document.querySelector('[data-form-input]');
    const valorInput = capturandoInput.value


    const tarefa = document.createElement('li');
    tarefa.classList.add('task');
    const conteudo = `<p class="content">${valorInput}</p>`;

    tarefa.innerHTML = conteudo;

    tarefa.appendChild(conclui());
    tarefa.appendChild(deleta());

    lista.appendChild(tarefa);
    capturandoInput.value = " ";
}

const novaTarefa = document.querySelector('[data-form-button]');

novaTarefa.addEventListener('click', criarTarefa);