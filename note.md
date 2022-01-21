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