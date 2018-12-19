# 个人vue-cli模板

> 个人vue-cli模板

## Build Setup

``` 目录结构
-- src
    -- assets                      # 私有资源
    -- common                      # 通用组件
    -- components                  # 业务组件
    -- api                         # 请求文件
        -- axios                   # 环境变量文件
            -- config              # axios配置文件
            -- index.js            # axios入口
            -- axiosdemo.js        # 调用案例        
        -- http.js                 # 封装axios文件 
    -- config                      # 环境变量配置
        -- index.js                # 环境变量文件
    -- views                       # 页面维度
        -- viewsA                  # 页面A
            -- viewsA.vue          # 页面A单文件
            -- viewsA-components   # 页面A下的一个组件
            -- children            # 子页面
    -- router                      # 路由
        -- index.js                # 路由入口
    -- store                       # vuex
        -- commonState.js          # vuex模块
        -- index.js                # vuex入口
    -- utils                       # js通用方法
        -- filter                  # 通用filter
            -- index.js            # 通用filter入口
        -- method                  # 通用method
            -- index.js            # 通用method入口
    -- app.vue                     # 顶层单文件
    -- main.js                     # 入口
```

