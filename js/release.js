const tbody = document.querySelector('#r-CrudRow')
const btnInput = document.querySelector('#r-btnInput')

const formInputDate = document.querySelector('#r-date')
const formInputDescription = document.querySelector('#r-description')
const formInputType = document.querySelector('#r-type')
const formInputCategory = document.querySelector('#r-category')
const formInputValue = document.querySelector('#r-value')

const modalInputDate = document.querySelector('#m-date')
const modalInputOperation = document.querySelector('#m-operation')
const modalInputDescription = document.querySelector('#m-description')
const modalInputType = document.querySelector('#m-type')
const modalInputCategory = document.querySelector('#m-category')
const modalInputValue = document.querySelector('#m-value')

const modalEdit = document.getElementById("modal-edit")
const btnOk = document.querySelector('#i-ok')

const modalDelete = document.getElementById('modal-delete')
const btnOkDelete = document.querySelector('#i-ok-delete')
const btnCancel = document.querySelector('#i-cancel-delete')

let index
let op
const data = []

//Funçao checa botao radio no formulario e imprime valor "Income" ou "Expense"

const chkRadioBtn = () => {
  if (document.querySelector('#radio-one').checked) {
    op = document.querySelector('#radio-one').value
  }
  if (document.querySelector('#radio-two').checked) {
    op = document.querySelector('#radio-two').value
  }
}

//Edita informacoes inseridas

function editItem(index) {
  
  modalEdit.showModal()
  
  modalInputDate.value = data[index].date
  modalInputOperation.value = data[index].operation
  modalInputDescription.value = data[index].description
  modalInputType.value = data[index].type
  modalInputCategory.value = data[index].category
  modalInputValue.value = data[index].value
  
  //Botao "ok" dentro da modal Edit

  btnOk.onclick = e => {

    data[index].date = modalInputDate.value
    data[index].operation = modalInputOperation.value
    data[index].description = modalInputDescription.value
    data[index].type = modalInputType.value
    data[index].category = modalInputCategory.value
    data[index].value = modalInputValue.value
    
    modalEdit.close()

    modalInputDate.value = ""
    modalInputOperation.value = ""
    modalInputDescription.value = ""
    modalInputType.value = ""
    modalInputCategory.value = ""
    modalInputValue.value = ""
    
    loadItens()

  }
}

//Deleta linha escolhida abrindo "modal-delete"

function deleteItem(index) {
  
  modalDelete.showModal()
  
  btnOkDelete.onclick = e => {
   
    data.splice(index, 1)
    modalDelete.close()

    loadItens()
  
  }

  btnCancel.onclick = e => {
    modalDelete.close()
  }

}

//Carrega todos itens

function loadItens() {
  
  tbody.innerHTML = ''
  
  data.forEach((item, index) => {
    insertItem(item, index)
    
  })
}

// Insere uma linha no CRUD com os valores no array "data"

function insertItem(item, index) {

  tbody.insertAdjacentHTML("afterbegin",
    `<tr id="row-${index}">
    <td>${item.date}</td>
     <td>${item.operation}</td>
    <td>${item.description}</td>
    <td>${item.type}</td>
    <td>${item.category}</td>
    <td>$ ${item.value}</td>
    <td>
    <i-edit onclick="editItem(${index})" id="i-edit-${index}" class="material-symbols-outlined" >edit_note</i-edit>
    <i-del onclick="deleteItem(${index})" id="i-del-${index}" class="material-symbols-outlined" >delete</i-del>
    </td>
    </tr>`)
}


btnInput.onclick = e => {

  chkRadioBtn()

  data.push({
    'date': formInputDate.value,
    'operation': op,
    'description': formInputDescription.value,
    'type': formInputType.value,
    'category': formInputCategory.value,
    'value': formInputValue.value
  })

  formInputDate.value = ""
  formInputDescription.value = ""
  formInputType.value = ""
  formInputCategory.value = ""
  formInputValue.value = ""
  
  loadItens()
}