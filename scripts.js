const Modal = {
    open(){
        document.querySelector('.modal-overlay').classList.add('active')
    },
    close(){
        document.querySelector('.modal-overlay').classList.remove('active')
    }
}

const transactions = [
    {
        id: 1,
        description: 'Luz',
        amount: -50000,
        date: '23/01/2021'
    },
    {
        id: 2,
        description: 'Website',
        amount: 50000,
        date: '23/01/2021'
    },
    {
        id: 3,
        description: 'Internet',
        amount: 20000,
        date: '23/01/2021'
    },
]


const Transaction = {
    incomes() {
        //somar as entradas
    },
    expenses() {
        //somar as saídas
    },
    total() {
        //entradas - saídas
    }
}

// Eu preciso pegar as minhas transações do meu objeto aqui no javascript e colocar la no HTML.

const DOM = {
    innerHTMLTransaction () {

        const html = `
        <tr>
            <td class="description">Luz</td>
            <td class="expense">- R$ 500,00</td>
            <td class="date">23/01/2021</td>
            <td>
            <img src="img/minus.svg" alt="Remover transação">
            </td>
        </tr>
  
     `
    }
}