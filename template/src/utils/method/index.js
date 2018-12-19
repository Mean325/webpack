var MyMethod = {};
MyMethod.install = function (Vue, options) {
  // 注入组件
  // 假如是给比如methods属性的某个方法，例如以下的test2，
  // 若组件中有test2就不会执行插件中的这个test2，如果组件中没有才会执行插件中的这个test2
  Vue.mixin({
    methods: {
      test2() {
          console.log("我是注入的方法");
      }
    }
  })

  // 添加实例属性及方法
  // 该变量都不会被不同组件所共享，假如有A,B两个组件。A里面的no数值改变，B组件里的no数值是不会跟着改变的
  Vue.prototype.no = 1;
  Vue.prototype.console1 = function () {
    console.log('1');
  };
}
export default MyMethod;