
function widgetContainer() {
  const container = document.createElement("div"),
    containerTitle = document.createElement("h3"),
    list = document.createElement("ul");
    list.id = 'board-list';

  containerTitle.innerText =  "All Boards"
  container.classList.add('widget-container')
  container.appendChild(containerTitle);
  container.appendChild(list);

  const newButton = createNewBoardComponent()
  list.appendChild(newButton)

  return container;
}


function boardForm() {
  const form = document.createElement('form');
  form.classList.add('form')
  
  const title = document.createElement('h3');
  title.innerText = 'Add New Board';
  form.appendChild(title);


  const boardInputLabel = document.createElement('label'),
  boardNameInput = document.createElement('input');
  boardInputLabel.innerText = 'Board Name';
  boardNameInput.id = "board-name";
  form.appendChild(boardInputLabel)
  form.appendChild(boardNameInput)
  boardNameInput.setAttribute('required', true)

  const boardColumnLabel = document.createElement('label'),
  boardColumnInput = document.createElement('select');
  const boardColumnTodo = document.createElement('option');
  const boardColumnDoing = document.createElement('option');
  const boardColumnDone = document.createElement('option');

  boardColumnInput.id = 'board-column';
  boardColumnInput.appendChild(boardColumnTodo);
  boardColumnInput.appendChild(boardColumnDoing);
  boardColumnInput.appendChild(boardColumnDone);

  boardColumnTodo.textContent = 'ToDo';
  boardColumnDoing.textContent = 'Doing';
  boardColumnDone.textContent = 'Done';


  boardColumnLabel.innerText = 'Board Columns'
  form.appendChild(boardColumnLabel)
  form.appendChild(boardColumnInput)
  const addNewColumnBtn = document.createElement('div'),
  createNewBoardBtn = document.createElement('button');
  createNewBoardBtn.setAttribute('type', 'submit');
  addNewColumnBtn.innerText = '+ Add New Column'
  createNewBoardBtn.innerText = 'Create New Board'
  createNewBoardBtn.classList.add('create-new-board-btn')
    
  let currentColumns = 1
  const maxColumns = 3;
  addNewColumnBtn.addEventListener('click', () => {

    if(currentColumns < maxColumns) {
    const newbtn = document.createElement('select');
    
    const columnTodo = document.createElement('option');
    const columnDoing = document.createElement('option');
    const columnDone = document.createElement('option');

    newbtn.appendChild(columnTodo);
    newbtn.appendChild(columnDoing);
    newbtn.appendChild(columnDone);

    columnTodo.textContent = 'ToDo';
    columnDoing.textContent = 'Doing';
    columnDone.textContent = 'Done';

    boardColumnInput.parentNode.insertBefore(newbtn, boardColumnInput.nextSibling);
    currentColumns++

    } else if(currentColumns === maxColumns) {
      return alert('Max Columns Reached')
    }
    

  })
  
  form.appendChild(addNewColumnBtn)
  form.appendChild(createNewBoardBtn)
  


  document.body.appendChild(form)

  return form
}

function createNewBoardComponent() {
  const button = document.createElement('div');
  button.classList.add('new-board-button');
  button.innerText = "+ Create New Board";

  const form = boardForm();
  
  button.addEventListener('click', () => {
    form.style.display = 'flex'

  })
  


  return button
}







export { widgetContainer, createNewBoardComponent };
