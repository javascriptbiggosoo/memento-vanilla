import TodoInput from "./ToDoInput.js";
import TodoList from "./ToDoList.js";

class Todo {
  #toDos = [];

  constructor({ $target }) {
    const $toDoContainer = document.createElement("section");
    $toDoContainer.classList.add("todo-container");
    $target.append($toDoContainer);

    this.$toDoList = new TodoList({
      $target: $toDoContainer,
      initialToDos: this.#toDos,
      onToDoClick: this.handleToDoClick,
    });
    this.$toDoInput = new TodoInput({
      $target: $toDoContainer,
      onSubmit: this.handleToDoSubmit,
    });
  }

  handleToDoClick = (toDoIdx) => {
    const nextState = this.#toDos;
    nextState[toDoIdx].완료여부 = true;
    this.setToDos(this.#toDos);
  };

  handleToDoSubmit = (ev) => {
    ev.preventDefault();
    const $input = ev.target.querySelector("input");
    const 할일 = $input.value;
    const nextToDos = [...this.#toDos, { 할일, 완료여부: false }];
    this.setToDos(nextToDos);

    $input.value = "";
  };

  setToDos = (nextToDos) => {
    this.#toDos = nextToDos;

    this.$toDoList.setToDos(this.#toDos);
  };
}

export default Todo;
