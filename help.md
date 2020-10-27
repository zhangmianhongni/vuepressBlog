## 概述

默认的文档站点模板

## 提交代码之前

- 检查package.json的name的值是否修改为服务的编码，即是gitlab的项目名称

如：服务的地址为：https://gitlab.company.com/group/project.git，则name值为project

## 工程结构

### 结构说明

- /site/:存放发布在应用中台站点的产品的文档说明

   — README.md: 基本信息介绍文档(必须)
   
   — api:服务接口文档(非必须)
   
   — service:服务文档介绍页面,可包括使用注意事项(非必须)，版本动态(非必须)，版本发布(非必须)，试用版、正式版的对比等(非必须)
   
- /:存放项目的完整的文档：包括简介、使用指南(用户/开发/部署)、内部资料等

   — README.md: 产品的基本简介(必须)
   
   — user_guide:使用手册,关于控制台或者服务的基本使用方式(必须)
   
   — dev_guide:接入指南,关于应用申请服务后接入的操作指南等(必须)
   
   — api:API(必须)
   
   — sdk:SDK(必须)
   
   — deploy:部署文档(不对外公开，必须)
   
   — inner:内部文档(不对外公开，非必须)
   
   — problem:关于产品经常遇到的问题(非必须，预留)
   

## 组件说明


SpecialLayout:应用中台的布局组件

使用方法：在需要使用到应用中台布局组件的页面.md文件内使用 YAML front matter 来指定这个组件。

```
    ---
    layout: SpecialLayout
    ---
```
sidebar : auto -- 出现左侧菜单

## 启动工程

```bash
npm install
npm run dev
```

## 打包工程

```bash
npm run build
```



For more details, please head VuePress's [documentation](https://v1.vuepress.vuejs.org/).

