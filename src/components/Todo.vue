<template>
  <div class="container">
      <Card
        v-for="(item, index) in this.$parent.todoList"
        class="todoCard"
        :key="index"
        :class="{done:item.finished}"
        v-if="!item.finished"
      >
        <div @click="itemClick(index)">{{item.text}}</div>
      </Card>
  </div>
</template>

<script>
export default {
  props:[
    'changeStatus'
  ],
  methods:{
    itemClick(i){
      this.$emit('changeStatus',i)
    }
  }
};
</script>

<style scope lang="scss">
.container {
  margin: 0 100px;
  .todoCard {
    margin: 10px 0;
    div {
      cursor: pointer;
    }
  }
  .done {
    background-color: #468de97f;
    text-decoration-line: line-through;
  }
}
</style>