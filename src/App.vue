<template>
  <div>
    <!-- <headerbox></headerbox> -->
    <!-- <router-view></router-view> -->
    <!-- <foot></foot> -->
    <div id="root">
      <div class="todo-container">
        <div class="todo-wrap">
          <bc @addTodo="addTodo" />
          <dc :to="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo" />
          <ac :todos="todos" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import headerbox from "./components/header/index.vue";
import foot from "./components/footer/index.vue";
import ac from "./test/1.vue";
import bc from "./test/2.vue";
import cc from "./test/3.vue";
import dc from "./test/4.vue";

export default {
  data() {
    return {
      todos: JSON.parse(localStorage.getItem("todos")) || [],
    };
  },
  components: {
    headerbox,
    foot,
    ac,
    bc,
    cc,
    dc,
  },
  methods: {
    addTodo(todoObj) {
      this.todos.unshift(todoObj);
    },
    checkTodo(id) {
      this.todos.forEach((item) => {
        if (item.id === id) item.done = !item.done;
      });
    },
    deleteTodo(id) {
      this.todos = this.todos.filter((item) => {
        return item.id !== id;
      });
    },
    checkAllTodo(done) {
      this.todos.forEach((todo) => {
        todo.done = done;
      });
    },
    clearAllTodo() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
  },
  watch: {
    todos: {
      deep: true,
      handler(value) {
        localStorage.setItem("todos", JSON.stringify(value));
      },
    },
  },
  mounted() {
    this.$bus.$on("checkAllTodo", this.checkAllTodo);
    this.$bus.$on("clearAllTodo", this.clearAllTodo);
  },
};
</script>

<style>
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>
