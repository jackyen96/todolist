<template>
  <div>
    <Tabs
      class="switchTab"
      vaue="all"
      @on-tab-remove="tabRemove"
      @on-click="tabClick"
      v-if="options.length"
      :value="$route.path"
    >
      <TabPane v-for="item in options" :key="item.name" :label="item.name" :name="item.route"></TabPane>
    </Tabs>
    <transition name="fade" mode="out-in">
      <router-view @changeStatus="changeStatus"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "",
      options: [
        { name: "ALL", route: "/all" },
        { name: "TODO", route: "/todo" },
        { name: "FINISHED", route: "/finished" }
      ],
      todoList: [
        { text: "fhinish works for toay", finished: true },
        { text: "go get a job", finished: false },
        { text: "go find an apartment", finished: false },
        { text: "go watch a formula 1 race", finished: false }
      ]
    };
  },
  methods: {
    tabClick(name) {
      this.$router.push(name);
    },
    tabRemove() {},
    addNew(txt) {
      this.todoList.unshift({ text: txt, finished: false });
    },
    changeStatus(index) {
      this.todoList[index].finished = !this.todoList[index].finished;
      console.log("changeStatus");
    }
  }
};
</script>

<style scope lang="scss">
.switchTab {
  margin: 0 100px;
}


.fade-enter-active,
.fade-leave-active{
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to{
  opacity:0;
}
</style>