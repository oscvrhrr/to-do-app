
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
  document.body.appendChild(form)

  return form
}

function createNewBoardComponent() {
  const button = document.createElement('div');
  button.classList.add('new-board-button');
  button.innerText = "+ Create New Board";

  const form = boardForm();
  
  button.addEventListener('click', () => {
    form.style.display = 'block'
  })
  


  return button
}

// boardForm()





export { widgetContainer };
