<template>
  <div class="container">
      <Card
        v-for="(item, index) in this.$parent.todoList"
        class="todoCard"
        :key="item.text"
        :class="{done:item.finished}"
      >
      <div
      @click="itemClick(index)"
      >{{item.text}}</div>
      </Card>
  </div>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.14.1/lodash.min.js"></script>

<script>

export default {
  props: ["full-list", "changeStatus"],
  data() {
    return {};
  },
  methods: {
    itemClick(i) {
      this.$emit("changeStatus", i);
    }
  }
};
</script>

<style scope lang="scss">
.container {
  margin: 0 100px;
  .todoCard {
    margin: 10px 0;
    div{
      cursor: pointer;
    }
  }
  .done {
    background-color: lightpink;
    text-decoration-line: line-through;
  }
}

.flip-list-move {
  transition: transform 1s;
}
</style>