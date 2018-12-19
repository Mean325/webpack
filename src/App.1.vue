<template>
  <div id="app">
    <!-- <h4 @click="test()">连接websocket1</h4>
    <h4 @click="test1()">发送消息1</h4>
    <h4 @click="test3()">连接websocket2</h4>
    <h4 @click="test4()">发送消息2</h4>
    <h4 @click="console1()">全局方法调用1</h4>
    <h4 @click="test2()">全局方法调用2</h4>
    <h4>全局filter: {{ 1544094712 | formatTime }}</h4>
    <h4>Vuex获取数据: {{ $store.state.state.number }}</h4>
    <h4 @click="test6()">修改Vuex数据1</h4>
    <h4 @click="test7()">修改Vuex数据2</h4>
    <h4>Vuex getters: {{ $store.getters.not_show }}</h4>
    <h4 @click="test9()">axios封装</h4>
    <h4 @click="test10()">事件队列测试</h4>
    <router-view/> -->
    <router-view/>
  </div>
</template>

<script>
import Vue from 'Vue'
import {addClass} from 'common/js/dom'
export default {
  name: 'App',
  mounted() {
    this.$nextTick(function(){
      let body = document.body;
      addClass(body, 'yellow');
    })
  },
  computed: {
    // //这里的三点叫做 : 扩展运算符
    // ...mapState({
    //   show: state => state.state.show
    // }),
  },
  methods: {
    // test() {
    //   let uri = "0x31A9515C2167ddb7CE2374745F354901f5a42607@47.98.228.81:8189";
    //   this.socketApi.initWebSocket(uri);
    // },
    // test1() {
    //   let uri = "0x31A9515C2167ddb7CE2374745F354901f5a42607@47.98.228.81:8189";
    //   let agentData = "message";
    //   this.socketApi.sendSock(uri, agentData, this.test2());
    // },
    // test2(e) {
    //   console.log(e);
    // },
    // test3() {
    //   let uri = "0x0d14D659f37e73F9132EBb1d96a0c0641e6b327C@47.254.39.10:8189";
    //   this.socketApi.initWebSocket(uri, this.test2);
    // },
    // test4() {
    //   let uri = "0x0d14D659f37e73F9132EBb1d96a0c0641e6b327C@47.254.39.10:8189";
    //   let agentData = {
    //     AssetType: "TNC",
    //     ChannelName: "0x6dee680ef17a4fafed603cce62ae986259b13c847b77ff8948dd9b79053ff57f",
    //     MessageBody: {
    //       Commitment: "0x99ab1190609d6fd0912e3e96c9a46d27a5e69e7f265fa5404f98858fee4d5e7951ca8894e7e98c4a184f020869c0fa820b452cb71bbf8ee9997df610d65e4ba101",
    //       FounderDeposit: 1000000000,
    //       PartnerDeposit: 1000000000
    //     },
    //     MessageType: "Founder",
    //     NetMagic: "527465737419990331",
    //     Receiver: "0x0d14D659f37e73F9132EBb1d96a0c0641e6b327C@47.254.39.10:8189",
    //     Sender: "0xbe9C101867339ef9483090c468018aD1E3923336@47.254.39.10:8866",
    //     TxNonce: 1
    //   };
    //   this.socketApi.sendSock(uri, agentData, this.test5());
    // },
    // test5() {
    //   console.log("发送成功");
    // },
    // test6() {
    //   this.$store.commit('addNumber');
    // },
    // test7() {
    //   this.$store.dispatch('add11');
    // },
    // test8() {
    //   this.$store.getters.not_show;
    // },
    // test9() {
    //   let params = JSON.stringify({
    //     "jsonrpc": "2.0",
    //     "method": "getBalance",
    //     "params": ["AW25dxZZRJYjgXApEacYAEQDNPGDuFGCWF"],
    //     "id": 1
    //   })

    //   this.$api.axiosdemo.post(params).then(res => {
    //     console.log(res)
    //   })
    // }
  }
}
</script>

<style lang="scss">
$background: #CCCCCC;
body{
  background: $background;
}
.yellow{
  background: yellow;
}
#app {
  // font-family: 'Avenir', Helvetica, Arial, sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  // margin-top: 60px;
}
</style>
