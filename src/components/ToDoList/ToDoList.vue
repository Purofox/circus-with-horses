<template>
  <section class="todopage">
    <div class="todobody">
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
      <div class="footer" v-show="todos.length" v-cloak>
        <div class="filters">
          <button @click="FilterKey = 'all'" :class="{ selected: FilterKey == 'all' }">All</button>
          <button @click="FilterKey = 'active'" :class="{ selected: FilterKey == 'active' }">Active</button>
          <button @click="FilterKey = 'completed'" :class="{ selected: FilterKey == 'completed' }">Completed</button>
        </div>
        <button
            class="clear-completed"
            @click="removeCompleted"
            v-show="todos.length > remaining"
        >
          Clear completed
        </button>
      </div>
    </div>
    <router-link class="back-to-main" to="/">Back</router-link>
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

  let filters = {
    all: function(todos) {
      return todos;
    },
    active: function(todos) {
      console.log('active!');
      return todos.filter(function(todo) {
        return !todo.completed;
      });
    },
    completed: function(todos) {
      console.log('completed!');
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
        FilterKey: "all"
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
        return filters[this.FilterKey](this.todos);
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
      },
    },

    directives: {
      "todo-focus": function(el, binding) {
        if (binding.value) {
          el.focus();
        }
      }
    },
  }

</script>

<style scoped>
  .todopage {
    background: url("../../assets/plane-bg.jpg") no-repeat center;
    background-size: cover;
    height: 100%;
    padding-top: 140px;
  }

  .todobody {
    background: #fff;
    min-width: 230px;
    max-width: 550px;
    margin: 0 auto;
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
    background: url('../../assets/002-check-box.svg') no-repeat center left;
    background-size: 20px;
    cursor: pointer;
    font-size: 0;
    height: 34px;
    left: 10px;
    position: absolute;
    top: -47px;
    width: 60px;
  }

  .todo-list {
    list-style: none;
    margin: 0;
    max-height: 50vh;
    overflow-y: auto;
    padding: 0;
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

    background: url('../../assets/001-blank-check-box.svg') no-repeat center left;
    background-size: 20px;
  }

  .todo-list li .toggle:checked + label {
    background: url('../../assets/002-check-box.svg') no-repeat center left;
    background-size: 20px;
  }

  .todo-list li label {
    display: block;
    margin: 10px 10px;
    padding: 5px 5px 5px 50px;
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

  .filters button {
    border: 1px solid#4d4d4d;
    color:  #4d4d4d;
    margin: 3px;
    padding: 3px 7px;
    text-decoration: none;
    border-radius: 3px;
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

  .back-to-main {
    align-items: center;
    background: #b52525;
    border-radius: 50%;
    bottom: 5vh;
    color: #fff;
    display: flex;
    font-size: 20px;
    justify-content: center;
    height: 90px;
    left: 5vw;
    position: absolute;
    text-decoration: none;
    transition: .4s;
    width: 90px;
  }

  .back-to-main:hover {
    animation: pulse 2s infinite;
    transition: .4s;
  }

  @keyframes pulse {
    from {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }

    50% {
      -webkit-transform: scale3d(1.05, 1.05, 1.05);
      transform: scale3d(1.05, 1.05, 1.05);
    }

    to {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale3d(1, 1, 1);
    }
  }

</style>