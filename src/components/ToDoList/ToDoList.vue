<template>
  <section class="todoapp">
    <h1>Education plan</h1>
    <div class="header">
      <input
          class="new-todo"
          autofocus
          autocomplete="off"
          placeholder="What needs to be done?"
          v-model="newTodo"
          @keyup.enter="addTodo"
      />
    </div>
    <div class="main" v-show="todos.length" v-cloak>
      <input
          id="toggle-all"
          class="toggle-all"
          type="checkbox"
          v-model="allDone"
      />
      <label for="toggle-all"></label>
      <ul class="todo-list">
        <li
            v-for="todo in filteredTodos"
            class="todo"
            :key="todo.id"
            :class="{ completed: todo.completed, editing: todo == editedTodo }"
        >
          <div class="view">
            <input class="toggle" type="checkbox" v-model="todo.completed" />
            <label @dblclick="editTodo(todo)">{{ todo.title }}</label>
            <button class="destroy" @click="removeTodo(todo)"></button>
          </div>
          <input
              class="edit"
              type="text"
              v-model="todo.title"
              v-todo-focus="todo == editedTodo"
              @blur="doneEdit(todo)"
              @keyup.enter="doneEdit(todo)"
              @keyup.esc="cancelEdit(todo)"
          />
        </li>
      </ul>
    </div>
    <footer class="footer" v-show="todos.length" v-cloak>
        <span class="todo-count">
          <strong>{{ remaining }}</strong> {{ remaining | pluralize }} left
        </span>
      <ul class="filters">
        <li>
          <a href="#/all" :class="{ selected: visibility == 'all' }">All</a>
        </li>
        <li>
          <a href="#/active" :class="{ selected: visibility == 'active' }"
          >Active</a
          >
        </li>
        <li>
          <a
              href="#/completed"
              :class="{ selected: visibility == 'completed' }"
          >Completed</a
          >
        </li>
      </ul>
      <button
          class="clear-completed"
          @click="removeCompleted"
          v-show="todos.length > remaining"
      >
        Clear completed
      </button>
    </footer>
  </section>
</template>

<script>
  // localStorage persistence
  let STORAGE_KEY = "stay-focused-todo";
  let todoStorage = {
    fetch: function() {
      let todos = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
      todos.forEach(function(todo, index) {
        todo.id = index;
      });
      todoStorage.uid = todos.length;
      return todos;
    },
    save: function(todos) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
    }
  };

  // visibility filters
  let filters = {
    all: function(todos) {
      return todos;
    },
    active: function(todos) {
      return todos.filter(function(todo) {
        return !todo.completed;
      });
    },
    completed: function(todos) {
      return todos.filter(function(todo) {
        return todo.completed;
      });
    }
  };

  export default {
    name: "ToDoList",
    data() {
      return {
        todos: todoStorage.fetch(),
        newTodo: "",
        editedTodo: null,
        visibility: "all"
      }
    },

    watch: {
      todos: {
        handler: function(todos) {
          todoStorage.save(todos);
        },
        deep: true
      }
    },

    computed: {
      filteredTodos: function() {
        return filters[this.visibility](this.todos);
      },
      remaining: function() {
        return filters.active(this.todos).length;
      },
      allDone: {
        get: function() {
          return this.remaining === 0;
        },
        set: function(value) {
          this.todos.forEach(function(todo) {
            todo.completed = value;
          });
        }
      }
    },

    filters: {
      pluralize: function(n) {
        return n === 1 ? "item" : "items";
      }
    },

    methods: {
      addTodo: function() {
        let value = this.newTodo && this.newTodo.trim();
        if (!value) {
          return;
        }
        this.todos.push({
          id: todoStorage.uid++,
          title: value,
          completed: false
        });
        this.newTodo = "";
      },

      removeTodo: function(todo) {
        this.todos.splice(this.todos.indexOf(todo), 1);
      },

      editTodo: function(todo) {
        this.beforeEditCache = todo.title;
        this.editedTodo = todo;
      },

      doneEdit: function(todo) {
        if (!this.editedTodo) {
          return;
        }
        this.editedTodo = null;
        todo.title = todo.title.trim();
        if (!todo.title) {
          this.removeTodo(todo);
        }
      },

      cancelEdit: function(todo) {
        this.editedTodo = null;
        todo.title = this.beforeEditCache;
      },

      removeCompleted: function() {
        this.todos = filters.active(this.todos);
      }
    },

    directives: {
      "todo-focus": function(el, binding) {
        if (binding.value) {
          el.focus();
        }
      }
    }
  }

</script>

<style scoped>
  .todoapp {
    background: #fff;
    min-width: 230px;
    max-width: 550px;
    margin: 140px auto 0;
    position: relative;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2),
    0 25px 50px 0 rgba(0, 0, 0, 0.1);
  }

  .todoapp input::placeholder {
    font-style: italic;
    font-weight: 300;
    color: #e6e6e6;
  }

  h1 {
    font-size: 30px;
    font-weight: 100;
    margin: 0;
    padding: 10px 0;
    text-align: center;
  }

  .new-todo,
  .edit {
    border: 1px solid #999;
    box-sizing: border-box;
    color: inherit;
    font-size: 20px;
    margin: 0;
    padding: 6px;
    position: relative;
    width: 100%;
  }

  .new-todo {
    background: rgba(0, 0, 0, .003);
    box-shadow: inset 0 -2px 1px rgba(0,0,0, .03);
    border: none;
    padding: 16px 16px 16px 60px;
  }

  .main {
    border-top: 1px solid #e6e6e6;
    position: relative;
    z-index: 2;
  }

  .toggle-all {
    width: 1px;
    height: 1px;
    opacity: 0;
    position: absolute;
    right: 100%;
    bottom: 100%;
  }

  .toggle-all + label {
    width: 60px;
    height: 34px;
    font-size: 0;
    position: absolute;
    top: -52px;
    left: -13px;
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
  }

  .toggle-all + label:before {
    content: '+';
    font-size: 22px;
    color: #e6e6e6;
    padding: 10px 27px 10px 27px;
  }

  .toggle-all:checked + label:before {
    color: #737373;
  }

  .todo-list {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .todo-list li {
    position: relative;
    font-size: 20px;
    border-bottom: 1px solid #ededed;
  }

  .todo-list li:last-child {
    border-bottom: none;
  }

  .todo-list li.editing {
    border-bottom: none;
    padding: 0;
  }

  .todo-list li.editing .edit {
    display: block;
    width: calc(100% - 43px);
    padding: 12px 16px;
    margin: 0 0 0 43px;
  }

  .todo-list li.editing .view {
    display: none;
  }

  .todo-list li .toggle {
    border: none;
    bottom: 0;
    height: auto;
    margin: auto 0;
    position: absolute;
    text-align: center;
    top: 0;
    width: 40px;
  }

  .todo-list li .toggle {
    opacity: 0;
  }

  .todo-list li .toggle + label {
    /*
      Firefox requires `#` to be escaped - https://bugzilla.mozilla.org/show_bug.cgi?id=922433
      IE and Edge requires *everything* to be escaped to render, so we do that instead of just the `#` - https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/7157459/
    */
    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23ededed%22%20stroke-width%3D%223%22/%3E%3C/svg%3E');
    background-repeat: no-repeat;
    background-position: center left;
  }

  .todo-list li .toggle:checked + label {
    background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%22-10%20-18%20100%20135%22%3E%3Ccircle%20cx%3D%2250%22%20cy%3D%2250%22%20r%3D%2250%22%20fill%3D%22none%22%20stroke%3D%22%23bddad5%22%20stroke-width%3D%223%22/%3E%3Cpath%20fill%3D%22%235dc2af%22%20d%3D%22M72%2025L42%2071%2027%2056l-4%204%2020%2020%2034-52z%22/%3E%3C/svg%3E');
  }

  .todo-list li label {
    word-break: break-all;
    padding: 15px 15px 15px 60px;
    display: block;
    line-height: 1.2;
    transition: color 0.4s;
  }

  .todo-list li.completed label {
    color: #d9d9d9;
    text-decoration: line-through;
  }

  .todo-list li .destroy {
    display: none;
    position: absolute;
    top: 0;
    right: 10px;
    bottom: 0;
    width: 40px;
    height: 40px;
    margin: auto 0;
    font-size: 30px;
    color: #cc9a9a;
    transition: color 0.2s ease-out;
  }

  .todo-list li .destroy:hover {
    color: #af5b5e;
  }

  .todo-list li .destroy:after {
    content: '×';
  }

  .todo-list li:hover .destroy {
    display: block;
  }

  .todo-list li .edit {
    display: none;
  }

  .todo-list li.editing:last-child {
    margin-bottom: -1px;
  }

  .footer {
    color: #777;
    display: flex;
    justify-content: space-between;
    padding: 10px 15px;
    text-align: center;
    border-top: 1px solid #e6e6e6;
  }


  .todo-count strong {
    font-weight: 300;
  }

  .filters {
    display: flex;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .filters li a {
    color: inherit;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border: 1px solid transparent;
    border-radius: 3px;
  }

  .filters li a:hover {
    border-color: rgba(175, 47, 47, 0.1);
  }

  .filters li a.selected {
    border-color: rgba(175, 47, 47, 0.2);
  }

  .clear-completed,
  html .clear-completed:active {
    position: relative;
    line-height: 20px;
    text-decoration: none;
    cursor: pointer;
  }

  .clear-completed:hover {
    text-decoration: underline;
  }

  .info {
    margin: 65px auto 0;
    color: #bfbfbf;
    font-size: 10px;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
    text-align: center;
  }

  .info p {
    line-height: 1;
  }

  .info a {
    color: inherit;
    text-decoration: none;
    font-weight: 400;
  }

  .info a:hover {
    text-decoration: underline;
  }

</style>