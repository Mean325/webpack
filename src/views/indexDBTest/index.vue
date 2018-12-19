<template>
  <div class="indexdb-test-page">
    <h4 @click="openDB()">创建数据库</h4>
    <h4 @click="addData()">添加数据</h4>
    <h4 @click="putData()">更新数据</h4>
    <h4 @click="getDataByKey()">根据主键获取数据</h4>
    <h4 @click="deleteData()">删除指定数据</h4>
    <h4 @click="getAllData()">获取所有数据</h4>
    <h4 @click="deleteDB()">删除数据库</h4>
    <mt-button type="default">default</mt-button>
  </div>
</template>

<script>
import Vue from 'vue'
export default {
  name: 'indexDBTest',
  data() {
    return{
        
    }
  },
  computed: {

  },
  methods: {
    openDB() {
      let myDB = this.$myDB;
      this.$indexDB.openDB(myDB, this.callbackFun);
    },
    callbackFun() {
      console.log("打开数据库成功");
    },
    addData() {
      let myDB = this.$myDB;
      let cartData = [
        {
          id: 1,
          num: 1,
          string: 'test1'
        }
      ]
      this.$indexDB.addData(myDB.db, myDB.ojstore.name, cartData);
      console.log("添加数据");
    },
    putData() {
      let myDB = this.$myDB;
      let cartData = [
        {
          id: 1,
          num: 2,
          string: 'test2'
        }
      ]
      this.$indexDB.putData(myDB.db, myDB.ojstore.name, cartData);
      console.log("添加数据");
    },
    getDataByKey() {
      let myDB = this.$myDB;
      let cartData = [
        {
          id: 1
        }
      ]
      this.$indexDB.getDataByKey(myDB.db, myDB.ojstore.name, cartData[0].id);
    },
    deleteData() {
      let myDB = this.$myDB;
      let key = 1;
      this.$indexDB.deleteData(myDB.db, myDB.ojstore.name, key);
    },
    getAllData() {
      let myDB = this.$myDB;
      this.$indexDB.getAllData(myDB.db, myDB.ojstore.name);
    },
    deleteDB() {
      let myDB = this.$myDB;
      this.$indexDB.deleteDB(myDB.name);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>