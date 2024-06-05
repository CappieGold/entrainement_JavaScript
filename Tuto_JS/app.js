import { TodoList } from "../compoments/TodoList.js";
import { createElement } from "../dom.js";
import { fetchJSON } from "./api.js";

try {
  const todos = await fetchJSON('https://jsonplaceholder.typicode.com/todos?_limit=5')
  const list = new TodoList(todos)
  list.appendTo(document.querySelector('#todolist'))
} catch (e) {
  const alertElement = createElement('div', {
    class: 'alert alert-danger m-2',
    role: 'alert'
  })
  alertElement.innerText = 'Impossible de charger les elements'
  document.body.prepend(alertElement)
  console.error(e)
}
