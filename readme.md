React 只是 DOM 的一个抽象层，并不是 web 应用的完整解决方案。有两个方面他没涉及：

1.代码结构

2.组件之间的通信

---

###### Redux 是什么

Redux 是 js 的状态容器，提供可预测化的状态管理。可以让你构建一致化的应用，运行于不同的环境（客户端、服务器、原生应用），并且易于测试。

###### Redux 设计思想

- web 应用是一个状态机，视图与状态是一一对应的

- 所有的状态保存在一个对象里面

##### 安装
```
// 安装稳定版：
npm install --save redux
// 多数情况下，你还需要使用 React 绑定库和开发者工具
npm install --save react-redux
npm install --save-dev redux-devtools
```
应用中所有的 state 都以一个对象树的形式存储在单一的 store 中。唯一改变 state 的方法就是触发 action，一个描述发生了什么的对象，为了描述 action 如何改变 state 树，需要编写 reducers。
- Action 就是一个普通的 JS 对象，用来描述发生了什么
- reducer 只是一个接收 state 和 action，并返回新的 state 的函数

###### Redux 状态管理过程

![Redux 状态](https://upload-images.jianshu.io/upload_images/17067702-e2cd04bd874955b3.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

- View 通过 dispatch 触发事件 Action

- Reducer 根据 Action 来修改数据

- Store 保存 Reducer 新数据并触发 subscribe 事件

- View 通过 subscribe 订阅获取新数据并进行展示

可以看出 Redux 的单向数据流动的特点：View --- Action --- Reducer --- Store --- View