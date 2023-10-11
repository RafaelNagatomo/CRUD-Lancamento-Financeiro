const tbody = document.querySelector('#r-CrudRow')
const lDate = document.querySelector('#r-date')
const lDescription = document.querySelector('#r-description')
const lType = document.querySelector('#r-type')
const lCategory = document.querySelector('#r-category')
const lValue = document.querySelector('#r-value')
const btnInput = document.querySelector('#r-btnInput')

let op
const itens = []

//Funçao checa botao radio no formulario e imprime valor "Income" ou "Expense"

const chkRadioBtn = () => {
  if (document.querySelector('#radio-one').checked) {
    op = document.querySelector('#radio-one').value;
  }
  if (document.querySelector('#radio-two').checked) {
    op = document.querySelector('#radio-two').value;
  }
}

// Insere uma linha no CRUD com os valores array

function insertItem(item, index) {

  tbody.insertAdjacentHTML("afterbegin",
    `<tr>
  <td>${item.date}</td>
  <td>${item.operation}</td>
  <td>${item.description}</td>
  <td>${item.type}</td>
  <td>${item.category}</td>
  <td>R$${item.value}</td>
  <td>
  <i onclick="editItem(${index})" id="i-edit" class="material-symbols-outlined">edit_note</i>
  <i onclick="delItem(${index})" id="i-del" class="material-symbols-outlined">delete</i>
  </td>
  </tr>`)
}


function delItem(index) {
  itens.splice(index, 1)
  loadItens()
}

function loadItens() {
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })
}

btnInput.onclick = e => {
  
  chkRadioBtn();

  itens.push({ 'date': lDate.value, 'operation': op, 'description': lDescription.value, 'type': lType.value, 'category': lCategory.value, 'value': lValue.value });

  loadItens();

  lDate.value = ""
  lDescription.value = ""
  lType.value = ""
  lCategory.value = ""
  lValue.value = ""
}