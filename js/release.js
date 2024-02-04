const tbody=document.querySelector("#r-CrudRow"),btnInput=document.querySelector("#r-btnInput"),formInputDate=document.querySelector("#r-date"),formInputDescription=document.querySelector("#r-description"),formInputType=document.querySelector("#r-type"),formInputCategory=document.querySelector("#r-category"),formInputValue=document.querySelector("#r-value"),modalInputDate=document.querySelector("#m-date"),modalInputOperation=document.querySelector("#m-operation"),modalInputDescription=document.querySelector("#m-description"),modalInputType=document.querySelector("#m-type"),modalInputCategory=document.querySelector("#m-category"),modalInputValue=document.querySelector("#m-value"),modalEdit=document.getElementById("modal-edit"),btnOk=document.querySelector("#i-ok"),modalDelete=document.getElementById("modal-delete"),btnOkDelete=document.querySelector("#i-ok-delete"),btnCancel=document.querySelector("#i-cancel-delete");let index,op;const data=[],chkRadioBtn=()=>{document.querySelector("#radio-one").checked&&(op=document.querySelector("#radio-one").value),document.querySelector("#radio-two").checked&&(op=document.querySelector("#radio-two").value)};function editItem(a){modalEdit.showModal(),modalInputDate.value=data[a].date,modalInputOperation.value=data[a].operation,modalInputDescription.value=data[a].description,modalInputType.value=data[a].type,modalInputCategory.value=data[a].category,modalInputValue.value=data[a].value,btnOk.onclick=()=>{data[a].date=modalInputDate.value,data[a].operation=modalInputOperation.value,data[a].description=modalInputDescription.value,data[a].type=modalInputType.value,data[a].category=modalInputCategory.value,data[a].value=modalInputValue.value,modalEdit.close(),modalInputDate.value="",modalInputOperation.value="",modalInputDescription.value="",modalInputType.value="",modalInputCategory.value="",modalInputValue.value="",loadItens()}}function deleteItem(a){modalDelete.showModal(),btnOkDelete.onclick=()=>{data.splice(a,1),modalDelete.close(),loadItens()},btnCancel.onclick=()=>{modalDelete.close()}}function loadItens(){tbody.innerHTML="",data.forEach((a,b)=>{insertItem(a,b)})}function insertItem(a,b){tbody.insertAdjacentHTML("afterbegin",`<tr id="row-${b}">
    <td>${a.date}</td>
     <td>${a.operation}</td>
    <td>${a.description}</td>
    <td>${a.type}</td>
    <td>${a.category}</td>
    <td>$ ${a.value}</td>
    <td>
    <i-edit onclick="editItem(${b})" id="i-edit-${b}" class="material-symbols-outlined" >edit_note</i-edit>
    <i-del onclick="deleteItem(${b})" id="i-del-${b}" class="material-symbols-outlined" >delete</i-del>
    </td>
    </tr>`)}btnInput.onclick=()=>{chkRadioBtn(),data.push({date:formInputDate.value,operation:op,description:formInputDescription.value,type:formInputType.value,category:formInputCategory.value,value:formInputValue.value}),formInputDate.value="",formInputDescription.value="",formInputType.value="",formInputCategory.value="",formInputValue.value="",loadItens()};