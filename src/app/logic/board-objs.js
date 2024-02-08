import { board } from "../board";
import { createNewBoardComponent } from "../board-widgets";
import { closeForm } from "../form";

function getFormValues() {
    const form = document.getElementsByClassName('form')[0];
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        let boardName = document.getElementById("board-name").value;
        let columnName = document.getElementById("board-column").value;
        const board = boardFactory(boardName, columnName);
        const boardButton = createNewBoardComponent();
        const headerTitle = document.getElementsByClassName('header-board-title')[0];

        boardName = document.getElementById("board-name");
        columnName = document.getElementById("board-column");

        columnName.value = '';
        boardName.value = '';

        headerTitle.innerText = board.boardName;
        boardButton.innerText = board.boardName;

        closeForm()
        appendNewBoard(boardButton)

    })


}

function boardFactory(name, todo, doing, done) {
    return {
        boardName: name,
        todo: todo,
        doing: doing,
        done: done
    }
}

function appendNewBoard(button) {
    const boardList = document.getElementById('board-list');
    boardList.prepend(button);


}





export {boardFactory, getFormValues}