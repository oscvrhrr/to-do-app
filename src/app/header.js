function header() {
    const header = document.createElement("header"),
    title = document.createElement("div"),
    addNewTaskBtn = document.createElement("button"),
    options = document.createElement("div"),
    buttonContainer = document.createElement("div");
    
    title.classList.add('header-board-title');
    buttonContainer.appendChild(addNewTaskBtn);
    buttonContainer.appendChild(options);

    options.classList.add('options')
    title.textContent = '';
    addNewTaskBtn.textContent = '+ Add New Task';
    
    const ElementList = [title, buttonContainer];

    ElementList.forEach(item  => {
    header.appendChild(item);
  });

  return header;
}

export {header}