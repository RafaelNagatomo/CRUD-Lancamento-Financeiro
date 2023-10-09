const tbody = document.querySelector('#r-CrudRow')
const lDate = document.querySelector('#r-date')
const lDescription = document.querySelector('#r-description')
const lType = document.querySelector('#r-type')
const lCategory = document.querySelector('#r-category')
const lValue = document.querySelector('#r-value')
const btnInput = document.querySelector('#r-btnInput')

let op

//Funçao checa botao radio no formulario e imprime valor "Income" ou "Expense"

const chkRadioBtn = () => {
  if (document.querySelector('#radio-one').checked) {
    op = document.querySelector('#radio-one').value;
  }
  if (document.querySelector('#radio-two').checked) {
    op = document.querySelector('#radio-two').value;
  }
}

// Insere uma linha no CRUD com os valores do formulario

function insertItem(id) {

  tbody.insertAdjacentHTML("afterbegin",
    `<tr>
        <td>${lDate.value}</td>
        <td>${op}</td>
        <td>${lDescription.value}</td>
        <td>${lType.value}</td>
        <td>${lCategory.value}</td>
        <td>R$${lValue.value}</td>
        <td>
          <i onclick="editItem(${id})" id="i-edit" class="material-symbols-outlined">edit_note</i>
          <i onclick="editItem(${id})" id="i-del" class="material-symbols-outlined">delete</i>
        </td>
      </tr>`)
}

//Checa botao radio, insere linha no CRUD, apaga valores do formulario

btnInput.onclick = e => {

  chkRadioBtn();
  insertItem();

  lDate.value = ""
  lDescription.value = ""
  lType.value = ""
  lCategory.value = ""
  lValue.value = ""
}