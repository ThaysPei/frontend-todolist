//aqui a função faz a busca pelos dados lá no backend
const fetchTask =  async () => {
    const response = await fetch('http://localhost:333/task');
    const task = await response.json()
    return task;
}

//agora a função que vai gerar a resposta visual dentro do frontend
//essa resposta estará preenchendo toda a linha que corresponde ao input
//das tasks. Por isso o nome é createRow. Criar linha.

const createElement = (tag, innerText = '') => {
    const element = document.createElement(tag);
    element.innerText = innerText;
    return element;
}


const createRow = (task) => {
    const tr = document.createElement('tr');
    const tdTitle = createElement('td', 'titulo da task');

    console.log(tdTitle);
}
createRow({});
