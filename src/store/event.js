export default {
  state: {
    eventList: [],
    isEventKeepOn: false,                             //事件是否在执行flag,false时添加event时自动执行,true时不在重复执行执行event事件
  },
  getters: {
    // getters 和 vue 中的 computed 类似 , 都是用来计算 state 然后生成新的数据 ( 状态 ) 的。
    // not_show(state) { //这里的state对应着上面这个state
    //   return !state.show;
    // }
  },
  mutations: {
    // 1.mutations 中的方法是不分组件的, 假如你在 dialog_stroe.js 文件中的定义了
    // switch_dialog 方法, 在其他文件中的一个 switch_dialog 方法, 那么
    // $store.commit('switch_dialog') 会执行所有的 switch_dialog 方法。
    // 2.mutations里的操作必须是同步的。
    addEvent(state, event) { //这里的state对应着上面这个state
      state.eventList.push(event);
    },
    delEvent(state) {
      state.eventList.shift();
    },
    startEvent(state) {
      state.isEventKeepOn = true;
      console.log('开始执行事件');
    },
    stopEvent(state) {
      state.isEventKeepOn = false;
      console.log('停止执行事件');
    }
  },
  actions: {
    // 将异步操作放在action中
    add11(context) { //这里的context和我们使用的$store拥有相同的对象和方法
      context.commit('addNumber');
      context.commit('addTen');
    },
  }
}