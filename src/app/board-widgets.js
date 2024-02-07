
function widgetContainer() {
  const container = document.createElement("div"),
    containerTitle = document.createElement("h3"),
    list = document.createElement("ul");

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
  form.appendChild(boardInputLabel)
  form.appendChild(boardNameInput)

  const boardColumnLabel = document.createElement('label'),
  boardColumnInput = document.createElement('input')
  // boardColumnInput = document.createElement('input');

  boardColumnLabel.innerText = 'Board Columns'
  form.appendChild(boardColumnLabel)
  form.appendChild(boardColumnInput)

  const addNewColumnBtn = document.createElement('div'),
  createNewBoardBtn = document.createElement('div');
  addNewColumnBtn.innerText = '+ Add New Column'
  createNewBoardBtn.innerText = 'Create New Board'
  createNewBoardBtn.classList.add('create-new-board-btn')
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






export { widgetContainer };
