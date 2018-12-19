<template>
  <div class="event-test-page">
    <h4 @click="test()">输出event队列</h4>
    <h4 @click="test1()">增加event</h4>
    <h4 @click="test2()">删除event</h4>
    <h4 @click="test3()">执行队列</h4>
  </div>
</template>

<script>
import Vue from 'Vue'
export default {
  name: 'eventTest',
  data () {
    return {

    }
  },
  mounted() {
    this.$nextTick(function(){

    })
  },
  computed: {
    // //这里的三点叫做 : 扩展运算符
    // ...mapState({
    //   show: state => state.state.show
    // }),
  },
  methods: {
    eventFun(a) {
        setTimeout(() => {
          console.log(a);
          this.$store.commit('delEvent');
          this.keepOnEvent();
        }, 5000);
    },
    keepOnEvent() {
        if(this.$store.state.event.eventList.length){
          this.test3();  
        } else {
          console.log('没有可执行的事件');
          this.$store.commit('stopEvent');
        }
    },
    test() {
      console.log(this.$store.state.event.eventList);
      console.log(this.$store.state.event.isEventKeepOn);
    },
    test1() {
      console.log("增加event");
      let event = {
        name: 'test',
        block: 256186443,
        data: '测试',
        num: this.$store.state.event.eventList.length
      }
      this.$store.commit('addEvent', event);
    },
    test2() {
      console.log("删除event");
      this.$store.commit('delEvent');
    },
    test3() {
      let event = this.$store.state.event.eventList[0];
      this.eventFun(event.num);
      if(!this.$store.state.event.isEventKeepOn){
        this.$store.commit('startEvent');
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>