function widgetContainer() {
  const container = document.createElement("div"),
    containerTitle = document.createElement("h3"),
    list = document.createElement("ul");

  containerTitle.innerText =  "All Boards"
    container.classList.add('widget-container')
  container.appendChild(containerTitle);
  container.appendChild(list);

  return container;
}

export { widgetContainer };
