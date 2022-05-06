``` json
  "scripts": {
    "start": "react-scripts start",  //开启开发环境
    "build": "react-scripts build",  //创建生产环境
    "test": "react-scripts test",    //测试程序的模块和功能
    "eject": "react-scripts eject"   //将生产的程序弹出
  }
```

1. es6中export和export default的区别
   - 通过export方式导出，在导入时要加{ }，export default则不需要
   - export与export default均可用于导出常量、函数、文件、模块
2. 箭头函数可以直接继承this
3. jsx只能渲染一个顶层元素，如果有多个元素，那么这些元素必须有一个父元素，所以可以将其放入一个<div>中或者<React.fragment>中。

## 组合组件
1. 组件间传递数据 - Use Props Pass Data
2. 发起并处理事件 - Raise and Handle Events
3. 多组件保持同步 - Multiple Components in Sync （上移state）
4. 功能性组件 - Functional Components
5. 生命周期钩子 - Lifecycle Hooks
    钩住某个特定的时刻，在整个生命周期中，做一些事情
    ![](https://gitee.com/Kevin_Bian/img_bed/raw/master/img/生命周期钩子.png)
    1. mounting(装载)阶段：有三个生命周期钩子：Counstructor、Render 和 ComponentDidMount。(ComponentDidMount是在所有DoM渲染完后调用)
    2. update(更新)阶段：当更新state时，会触发对Render()的调用,此时会更新该组件及其子组件。 `componentDidUpdate(prevProps,prevStates);`
    3. unmount(卸载)阶段：react会将新旧DOM进行比对，然后再将组件移出DOM之前会调用componentWillUNmount方法

    不能再无 state 函数组件中使用生命周期钩子。

  如果想传递一个复杂的组件，比如对话框，则尽量使用props中的children属性

类型检测库：prop-types


## 路由
1. 路由参数 - Route Parameters
  React Router v6使用<Routes>替换<Switch>
  嵌套路由需要在父布局路由中添加一个出口
2. 查询字符串 - Quary String
3. 用户重定向 - Redirect
4. 404错误处理 - Not Found(404) Pages
5. 路由嵌套 - Nested Routing

 使用 ref={ this.username } 来引用state中表单的内容
 然后使用钩子是输入框获取焦点
  ```js
  componentDidMount() {
    this.username.current.focus();
  }
  ```
等价于 autoFocus

乐观与保守更新
  //为了给用户良好的体验，采用先界面删除，在去服务器删除，如果后端请求出错，则可以回滚补救

import { ToastContainer } from "react-toastify";
![使用sentry记录异常](https://gitee.com/Kevin_Bian/img_bed/raw/master/img/React.png)