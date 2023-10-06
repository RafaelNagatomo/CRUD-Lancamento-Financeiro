const tbody = document.querySelector('#r-CrudRow')
const lDate = document.querySelector('#r-date')
const lDescription = document.querySelector('#r-description')
const lType = document.querySelector('#r-type')
const lCategory = document.querySelector('#r-category')
const lValue = document.querySelector('#r-value')
const btnInput = document.querySelector('#r-btnInput')

let op
// let id = index
let index = 0


const chkRadioBtn = () => {
  if (document.querySelector('#radio-one').checked){
    op = document.querySelector('#radio-one').value;
  }
  if(document.querySelector('#radio-two').checked){
    op = document.querySelector('#radio-two').value;
  }
}


function insertItem(index) {
  let tr = document.createElement('tr')

  tr.innerHTML = `
    <td>${lDate.value}</td>
    <td>${op}</td>
    <td>${lDescription.value}</td>
    <td>${lType.value}</td>
    <td>${lCategory.value}</td>
    <td>R$${lValue.value}</td>
    <td>
      <i onclick="editItem(${index})" id="i-edit" class="material-symbols-outlined">edit_note</i>
      <i onclick="editItem(${index})" id="i-del" class="material-symbols-outlined">delete</i>
    </td>
  `
  tr.classList = ""
  tbody.appendChild(tr)
}

btnInput.onclick = e => {
  chkRadioBtn()
  insertItem();
  
  lDate.value = ""
  lDescription.value = ""
  lType.value = ""
  lCategory.value = ""
  lValue.value = ""
}
