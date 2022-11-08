

document.getElementById("AddBtn").addEventListener("click", (e) => {
    e.preventDefault();

    // ---check--AddToDos--field--
    let AddTodo = document.getElementById("AddToDos");
    if (AddTodo != "") {
        todoText = AddTodo.value;
    }

    // ----Tasks---section-
    let showTaskDiv = document.getElementById("ShowTasks");
    // ---todo--divs--
    let todoDiv = document.createElement("div");
    //  ------append---tododiv---
    showTaskDiv .appendChild(todoDiv);
    todoDiv.className = "todoDivs";

    // ---add--p-tage--dodoDiv---
    let para = document.createElement("p");
    todoDiv.appendChild(para);
    // ------added--id--in-p-to-make-the-content-editable
    para.id="contentEditable";
    para.innerText = todoText;
    AddTodo.value= " ";
    
    // ---todo--btn--div--
    let btnDiv = document.createElement("div");
    todoDiv.appendChild(btnDiv);
    btnDiv.id = "btnCon";

    // -----action--btns----

    // -----edit---btn-----
    let editBtn = document.createElement("button");
    btnDiv.appendChild(editBtn);
    editBtn.value = "edit";
    let editIcon = document.createElement('i');
    editBtn.appendChild(editIcon);
    editIcon.className = "fa fa-light fa-pen-to-square";
    editBtn.className = "dinamic-btns";
    editBtn.id = "dinamicEditBtn";
    editBtn.title="edit";

    // ---edit--success--btn---
    let successbtn=document.createElement("button");
    btnDiv.appendChild(successbtn);
    let successMsg=document.createTextNode("Ok");
    successbtn.append(successMsg);
    successbtn.className="dinamic-btns"

    // ----delete--btn--
    let delBtn = document.createElement("button");
    btnDiv.appendChild(delBtn);
    delBtn.value = "delete";
    let DelIcon = document.createElement('i');
    delBtn.appendChild(DelIcon);
    DelIcon.className = "fas fa-trash-alt";
    delBtn.className = "dinamic-btns"
    delBtn.id = "dinamicDelBtn";
    delBtn.title="delete";


    // -----del--todos---
    delBtn.addEventListener("click", () => {
      let delDoto=delBtn.parentElement.parentElement;
      delDoto.remove();
    })

    // ------edit---todos----
    editBtn.addEventListener("click",()=>{
        document.getElementById("contentEditable").contentEditable='true';
        DelIcon.classList.remove("fas fa-trash-alt");
        let success=document.createTextNode("Ok");
        DelIcon.append(success);
    });

});



