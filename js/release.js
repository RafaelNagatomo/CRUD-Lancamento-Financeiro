const tbody = document.querySelector('#r-CrudRow')
const btnInput = document.querySelector('#r-btnInput')

const formInputDate = document.querySelector('#r-date')
const formInputDescription = document.querySelector('#r-description')
const formInputType = document.querySelector('#r-type')
const formInputCategory = document.querySelector('#r-category')
const formInputValue = document.querySelector('#r-value')
const btnOk = document.querySelector('#i-ok')

const modalInputDate = document.querySelector('#m-date')
const modalInputOperation = document.querySelector('#m-operation')
const modalInputDescription = document.querySelector('#m-description')
const modalInputType = document.querySelector('#m-type')
const modalInputCategory = document.querySelector('#m-category')
const modalInputValue = document.querySelector('#m-value')

const modalEdit = document.getElementById("modal-edit")

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

function editItem(index) {

  const rowEdit = document.querySelector(`#row-${index}`)
  const rowTop = document.querySelector(`#row-${index}`).getBoundingClientRect().top
  
  modalEdit.style.display = 'flex'
  modalEdit.style.top = rowTop + 'px'
  rowEdit.style.opacity = "0"
  rowEdit.style.zIndex = '-1'
  rowEdit.style.color = '#d9d9d901'
  
  modalInputDate.value = data[index].date
  modalInputOperation.value = data[index].operation
  modalInputDescription.value = data[index].description
  modalInputType.value = data[index].type
  modalInputCategory.value = data[index].category
  modalInputValue.value = data[index].value
  
  btnOk.onclick = e => {

    data[index].date = modalInputDate.value
    data[index].operation = modalInputOperation.value
    data[index].description = modalInputDescription.value
    data[index].type = modalInputType.value
    data[index].category = modalInputCategory.value
    data[index].value = modalInputValue.value
    
    modalEdit.style.display = 'none'
    modalEdit.style.top = ""

    modalInputDate.value = ""
    modalInputOperation.value = ""
    modalInputDescription.value = ""
    modalInputType.value = ""
    modalInputCategory.value = ""
    modalInputValue.value = ""
    
    
    loadItens()

  }
}

function deleteItem(index) {
  
  let result = confirm("Are you sure, you want to delete this item?")

  if (result == true) {
    data.splice(index, 1)
    loadItens()
  }
  
}

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
    <td>R$ ${item.value}</td>
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