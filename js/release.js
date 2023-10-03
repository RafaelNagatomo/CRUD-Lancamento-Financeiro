const tbody = document.querySelector('#r-CrudRow')
const lDescription = document.querySelector('#r-description')
const lType = document.querySelector('#r-type')
const lCategory = document.querySelector('#r-category')
const lValue = document.querySelector('#r-value')
const btnInput = document.querySelector('#r-btnInput')

let itens
let id = index
let index = 0

function insertItem(item, index) {
    let tr = document.createElement('tr')

    tr.innerHTML = `
        <td>${item.data}</td>
        <td>${item.op}</td>
        <td>${item.des}</td>
        <td>${item.type}</td>
        <td>${item.cat}</td>
        <td>R$${item.val}</td>
        <td>
            <i onclick="editItem(${index})" id="i-edit" class="material-symbols-outlined">edit_note</i>
            <i onclick="editItem(${index})" id="i-del" class="material-symbols-outlined">delete</i>
        </td>
    `
    tbody.appendChild(tr)
}

btnInput.onclick = e => {
  
    if (lDescription.value == '' || lType.value == '' || lCategory.value == '') {
      return
    }
  
    e.preventDefault();
  
    if (id !== undefined) {
    //   itens[id].nome = date.value
    //   itens[id].funcao = operation.value
      itens[id].description = lDescription.value
      itens[id].Type = lType.value
      itens[id].Category = lCategory.value
      itens[id].Value = lValue.value
    } else {
      itens.push({'nome': lDescription.value, 'funcao': lType.value, 'salario': lType.value})
    }
  }
  