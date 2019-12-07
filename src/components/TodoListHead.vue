<template>
  <div class="container">
    <Row :gutter="32">
      <Col span="20">
        <Input class="headerInput" placeholder="new todos" v-model="todo" />
      </Col>
      <Col span="4">
        <Button type="primary" class="add" @click="add(todo)">ADD</Button>
      </Col>
    </Row>
  </div>
</template>

<script>
export default {
  name: "todolisthead",
  data() {
    return {
      todo: ""
    };
  },
  methods: {
    add(txt) {
      if (this.todo) {
        this.todo = "";
        this.$emit("addNew", txt);
      }
      return 
    }
  },
  props: ["addNew"]
};
</script>

<style scoped lang="scss">
.container {
  .add {
    width: 100%;
  }
}
</style>