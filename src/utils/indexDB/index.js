// 用来获取和设置 删除 localStorage 存储

let local = {
  save(key, value) {
    if (typeof value === 'string') {
      localStorage.setItem(key, value);
    } else {
      localStorage.setItem(key, JSON.stringify(value));
    }
  },
  fetch(key) {
    return JSON.parse(localStorage.getItem(key)) || {}
  },
  del(key) {
    if (key) {
      localStorage.removeItem(key);
    } else {
      localStorage.clear();
    }
  }
}

// 用来获取和设置indexDB参数
let myDB = {
  name: "数据库名称1", //数据库名称
  version: 1, //版本号
  db: null, //db对象
  ojstore: {
    name: "表名", //存储空间表的名字
    keypath: "id" //主键
  }
};

let indexDB = {
  indexedDB: window.indexedDB || window.webkitindexedDB,
  IDBKeyRange: window.IDBKeyRange || window.webkitIDBKeyRange, //键范围

  // 创建数据库 indexedDB.openDB方法用于打开数据库, 
  // 第一个参数是数据库配置参数, 格式为如上myDB,
  // 第二个参数是回调函数。
  openDB: function (myDB, callback) {
    let self = this;
    let version = myDB.version || 1;
    let request = self.indexedDB.open(myDB.name, version);
    request.onerror = function (e) {
      console.log(e.currentTarget.error.message);
    };
    // 打开数据库，获取db对象
    request.onsuccess = function (e) {
      myDB.db = e.target.result;
      console.log('成功建立并打开数据库:' + myDB.name + ' version' + version);
      callback();
    };

    // 第一次打开数据库时,创建存储空间表
    request.onupgradeneeded = function (e) {
      let db = e.target.result,
        transaction = e.target.transaction,
        store;
      if (!db.objectStoreNames.contains(myDB.ojstore.name)) {
        //没有该对象空间时创建该对象空间
        store = db.createObjectStore(myDB.ojstore.name, {
          keyPath: myDB.ojstore.keypath
        });
        console.log('成功建立对象存储空间：' + myDB.ojstore.name);
      }
    }
    //打开数据库失败
    request.onerror = function (e) {
      console.log("数据库打开失败...");
    }
  },
  // 删除数据库 indexedDB.openDB方法用于删除数据库,
  deleteDB(dbname) {
    let self = this;
    self.indexedDB.deleteDatabase(dbname);
    console.log(dbname + '数据库已删除')
  },
  //关闭数据库
  closeDB(db) {
    db.close();
    console.log('数据库已关闭')
  },
  // 添加数据，重复添加会报错
  // data为数组
  addData(db, storename, data) {
    let self = this;
    let store = db.transaction(storename, 'readwrite').objectStore(storename),
      request;

    for (var i = 0; i < data.length; i++) {
      request = store.add(data[i]);

      request.onsuccess = function () {
        console.log('add添加数据已存入数据库')
      };

      request.onerror = function () {
        console.log('add添加数据库中已有该数据')
        self.putData(db, storename, data);
      };
    }
  },
  // 添加数据，重复添加会更新原有数据
  putData: function (db, storename, data) {
    console.log(data);
    for (var i = 0; i < data.length; i++) {
      if (data[i].id) {
        var modData = data[i];
        this.getDataByKey(db, storename, modData.id, function (res) {
          var store = db.transaction(storename, 'readwrite').objectStore(storename),
            request;

          request = store.put(modData);
          request.onsuccess = function () {
            console.log('put添加数据已存入数据库')
          };
          request.onerror = function () {
            console.log('put数据失败')
          };
        })
      };
    }
  },
  //获取所有数据
  getAllData(db, storename, callback) {
    var store = db.transaction(storename, 'readwrite').objectStore(storename);
    var allRecords = store.getAll();

    allRecords.onsuccess = function () {
      console.log(allRecords.result);
      if (typeof (callback) === 'function') {
        callback(allRecords.result);
      }
    };
  },
  //根据存储空间的键找到对应数据
  getDataByKey: function (db, storename, key, callback) {
    var store = db.transaction(storename, 'readwrite').objectStore(storename);
    var request = store.get(key);

    request.onerror = function () {
      console.log('getDataByKey error');
    };

    request.onsuccess = function (e) {
      var result = e.target.result;
      console.log('查找数据成功', result)
      if (typeof (callback) === 'function') {
        callback(result);
      }
    };
  },
  //删除某一条记录
  deleteData: function (db, storename, key) {
    var store = store = db.transaction(storename, 'readwrite').objectStore(storename);
    store.delete(key)
    console.log('已删除存储空间' + storename + '中' + key + '记录');
  },
  //删除存储空间全部记录
  clearData: function (db, storename) {
    var store = db.transaction(storename, 'readwrite').objectStore(storename);
    store.clear();
    console.log('已删除存储空间' + storename + '全部记录');
  }
}

//调用方法
//****************添加数据****************************;

// this.$indexDB.addData(myDB.db, myDB.ojstore.name, cartData);


// ****************获取所有数据****************************;

// this.$indexDB.getAllData(myDB.db, myDB.ojstore.name);


//*******************put重复添加*************************;

// this.$indexDB.putData(myDB.db,myDB.ojstore.name,cartData);


//*******************获取指定数据*************************";

// this.$indexDB.getDataByKey(

// myDB.db,

// myDB.ojstore.name,

// cartData[0].id

// );

//******************删除数据1001************;

// this.$indexDB.deleteData(myDB.db,myDB.ojstore.name,1001);


//******************删除全部数据************;

// this.$indexDB.clearData(myDB.db,myDB.ojstore.name);


//******************关闭数据库************;

// this.$indexDB.closeDB(myDB.db);


//******************删除数据库************;

// this.$indexDB.deleteDB(myDB.name);


export default {
  install: function (vm) {
    vm.prototype.$local = local;
    vm.prototype.$myDB = myDB;
    vm.prototype.$indexDB = indexDB;
  }
}
