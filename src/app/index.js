import '../sass/style.scss';
import { board } from './board';
import { header } from './header';
import { getFormValues } from './logic/board-objs';




document.body.appendChild(header())
document.body.appendChild(board())
getFormValues()


