const novaTarefa = document.querySelector(".nova-tarefa-input");
const addTarefaBtn = document.querySelector(".nova-tarefa-btn");
const tarefaContainer = document.querySelector(".tarefa-container");

const validarInput = () => novaTarefa.value.trim().length > 0;

const handleAddTarefa = () => {
    const inputIsValido = validarInput();

    if (!inputIsValido) {
        return novaTarefa.classList.add("error");
    }

    const tarefaItemContainer = document.createElement("div");
    tarefaItemContainer.classList.add("tarefa-item");

    const tarefaConteudo = document.createElement("p");
    tarefaConteudo.innerText = novaTarefa.value;

    tarefaConteudo.addEventListener("click", () => handleClick(tarefaConteudo));

    const deletarItem = document.createElement("i");
    deletarItem.classList.add("fa-solid", "fa-trash");

    deletarItem.addEventListener("click", () => handleDeletar(tarefaItemContainer));

    tarefaItemContainer.appendChild(tarefaConteudo);
    tarefaItemContainer.appendChild(deletarItem);

    tarefaContainer.appendChild(tarefaItemContainer);

    novaTarefa.value = ""; 

    updateLocalStorage();
};

const handleClick = (tarefaConteudo) => {
    const tarefas = tarefaContainer.childNodes;

    tarefas.forEach((tarefa) => {
        if (tarefa.nodeType === Node.ELEMENT_NODE && tarefa.firstChild.isSameNode(tarefaConteudo)) {
            tarefa.firstChild.classList.toggle("concluido");
        }
    });
    updateLocalStorage();
};

const handleDeletar = (tarefaItemContainer) => {
    tarefaContainer.removeChild(tarefaItemContainer);
    updateLocalStorage();
};

const handleInputMudar = () => {
    const inputIsValido = validarInput();

    if (inputIsValido) {
        novaTarefa.classList.remove("error"); 
    }
};

const updateLocalStorage = () => {
    const tarefas = tarefaContainer.childNodes;

    const localStorageTarefas = [...tarefas].filter(tarefa => tarefa.nodeType === Node.ELEMENT_NODE).map(tarefa => {
        const conteudo = tarefa.firstChild;
        const isConcluida = conteudo.classList.contains("concluido");

        return { description: conteudo.innerText, isConcluida };
    });
    
    localStorage.setItem("tarefas", JSON.stringify(localStorageTarefas))
};

const refreshTarefas = () => {
    const tarefasDoLocalStorage = JSON.parse(localStorage.getItem("tarefas"))
    
for (const tarefa of tarefasDoLocalStorage){
    const tarefaItemContainer = document.createElement("div");
    tarefaItemContainer.classList.add("tarefa-item");

    const tarefaConteudo = document.createElement("p");
    tarefaConteudo.innerText = tarefa.description;

    if (tarefa.isConcluida){
        tarefaConteudo.classList.add("concluido");
    }

    tarefaConteudo.addEventListener("click", () => handleClick(tarefaConteudo));

    const deletarItem = document.createElement("i");
    deletarItem.classList.add("fa-solid", "fa-trash");

    deletarItem.addEventListener("click", () => handleDeletar(tarefaItemContainer));

    tarefaItemContainer.appendChild(tarefaConteudo);
    tarefaItemContainer.appendChild(deletarItem);

    tarefaContainer.appendChild(tarefaItemContainer);
} 
}

refreshTarefas();

addTarefaBtn.addEventListener("click", handleAddTarefa);
novaTarefa.addEventListener("input", handleInputMudar);
