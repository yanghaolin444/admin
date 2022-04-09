<template>
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ doneTotal }}</span> / 全部</span
    >的个数{{ total }}
    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>
<script>
export default {
  props: ["todos"],
  computed: {
    total() {
      return this.todos.length;
    },
    doneTotal() {
      return this.todos.reduce((pre, current) => {
        return pre + (current.done ? 1 : 0);
      }, 0);
      //reduce返回的值是最后一次遍历返回的值
    },
    isAll: {
      get() {
        return this.doneTotal === this.total;
      },
      set(value) {
        this.$bus.$emit("checkAllTodo", value);
      },
    },
  },
  methods: {
    // checkAll(e){
    //   this.checkAllTodo(e.target.checked)
    // }
    clearAll() {
      if (confirm("你确定要删除吗？")) {
        this.$bus.$emit("clearAllTodo");
      }
    },
  },
};
</script>
<style lang="less" scoped>
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>
