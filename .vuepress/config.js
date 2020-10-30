module.exports = {
    title: "御剑飞星",
    dest: './dist',
    themeConfig: {
      lastUpdated: "上次更新",
      googleCustomSearchEngineID: process.env.GOOGLE_CUSTOM_SEARCH_ENGINE_ID,
      googleAPIKey: process.env.GOOGLE_API_KEY,
      searchMaxSuggestions: 10,
      //     logo: "/logo.png",
      nav: [
        {
          text: "主页",
          link: "/",
          icon: ['fal', 'cog']
        },
        {
          text: "编程",
          icon: ['fal', 'cog'],
          items: [
            { text: '综合', link: '/coding/comprehensive/' },
            { text: '架构', link: '/coding/architecture/' },
            { text: '大数据', link: '/coding/bigdata/' },
            { text: 'Java', link: '/coding/java/' },
            { text: 'Python', link: '/coding/python/' },
          ]
        },
        {
          text: "人工智能",
          icon: ['fal', 'cog'],
          items: [
            { text: '综合', link: '/ai/comprehensive/' },
            { text: '机器学习', link: '/ai/ml/' },
            { text: '计算机视觉', link: '/ai/cv/' },
            { text: '自然语言处理', link: '/ai/nlp/' },
            { text: '知识图谱', link: '/ai/kg/' },
            { text: '智能搜索', link: '/ai/search/' },
            { text: '数据挖掘', link: '/ai/datamining/' },
            { text: '区块链', link: '/ai/blockchain/' },
          ]
        },
        {
          text: "理论",
          link: "/theory/",
          icon: ['fal', 'cog']
        },
        {
          text: "读书",
          link: "/reading/",
          icon: ['fal', 'cog']
        },
        {
          text: "日常",
          link: "/daily/",
          icon: ['fal', 'cog']
        }
      ],
      sidebar: {
        "/coding/comprehensive/":getCodingComprehensiveSidebar(),
        "/coding/bigdata/":getCodingBigDataSidebar(),
        "/coding/architecture/":getCodingArchitectureSidebar(),
        "/coding/java/":getCodingJavaSidebar(),
        "/coding/python/":getCodingPythonSidebar(),
        "/ai/comprehensive/":getAiComprehensiveSidebar(),
        "/ai/ml/":getAiMlSidebar(),
        "/ai/cv/":getAiCvSidebar(),
        "/ai/nlp/":getAiNlpSidebar(),
        "/ai/kg/":getAiKgSidebar(),
        "/ai/search/":getAiSearchSidebar(),
        "/ai/datamining/":getAiDataMiningSidebar(),
        "/ai/blockchain/":getAiBlockChainSidebar(),
        "/theory/":getTheorySidebar(),
        "/reading/":getReadingSidebar(),
        "/daily/":getDailySidebar(),
      }
    },
    markdown: {
      anchor: { level: [2, 3] },
      config(md) {
        let markup = require('./markup')
        md.use(markup)
      }
    },
  
    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"]
};

function getCodingComprehensiveSidebar(){
  return [
    ''
  ]
}

function getCodingBigDataSidebar(){
  return [
    {
      collapsable: false,
      children: [
        ""
      ]
    }
  ]
}

function getCodingArchitectureSidebar(){
  return [
    {
      collapsable: false,
      children: [
        ""
      ]
    }
  ]
}

function getCodingJavaSidebar(){
  return [
    {
      collapsable: false,
      children: [
        ""
      ]
    }
  ]
}

function getCodingPythonSidebar(){
  return [
    {
      collapsable: false,
      children: [
        ""
      ]
    }
  ]
}




function getAiComprehensiveSidebar(){
  return [
    '',
    'ai',
    '1'
  ]
}


function getAiMlSidebar(){
  return [
    '',
  ]
}

function getAiCvSidebar(){
  return [
    '',
  ]
}

function getAiNlpSidebar(){
  return [
    '',
  ]
}

function getAiKgSidebar(){
  return [
    '',
  ]
}

function getAiSearchSidebar(){
  return [
    '',
  ]
}

function getAiDataMiningSidebar(){
  return [
    '',
  ]
}

function getAiBlockChainSidebar(){
  return [
    '',
  ]
}

function getTheorySidebar(){
  return [
    {
      // title: "接入指南",
      collapsable: false,
      children: [
        ""
      ]
    }
  ]
}

function getReadingSidebar(){
  return [
    {
      // title: "API",
      collapsable: false,
      children: [
        ""
      ]
    }
  ]
}

function getDailySidebar(){
  return [
    {
      // title: "SDK",
      collapsable: false,
      children: [
        ""
      ]
    }
  ]
}

// const { description } = require("../package");
// const { name } = require("../package");
// let basePath="/docs/"+name+"/";
// module.exports = {
//   /**
//    * Ref：https://v1.vuepress.vuejs.org/config/#title
//    */
//   theme: 'fuse',
//   title: "御剑飞星",
//   dest: './dist',
//   /**
//    * Ref：https://v1.vuepress.vuejs.org/config/#description
//    */
//   description: description,
//   base: '',
//   /**
//    * Extra tags to be injected to the page HTML `<head>`
//    *
//    * ref：https://v1.vuepress.vuejs.org/config/#head
//    */
//   head: [
//     ['link', {rel: 'icon', href: `/favicon.ico`}],
//     ['meta', {name: 'theme-color', content: '#3eaf7c'}],
//     ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
//     ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
//     ['meta', {name: 'msapplication-TileColor', content: '#000000'}]
//   ],

//   /**
//    * Theme configuration, here is the default theme configuration for VuePress.
//    *
//    * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
//    */
//   themeConfig: {
//     // fuse: {
//     //   defaultDarkTheme: false,
//     //   pageTabs: [
//     //     { title: '基本信息', link: '/site/' },
//     //     { title: '服务接口', link: '/site/api/' }
//     // ],
//     // },
//     codeLanguages: {
//       php: 'PHP',
//       twig: 'Twig',
//     },
//     // docsBranch: 'dev',
//     editLinks: true,
//     logo: "/logo.png",
//     docsDir: "/",
//     // editLinkText: "在Gitlab上编辑",
//     lastUpdated: "上次更新",
//     googleCustomSearchEngineID: process.env.GOOGLE_CUSTOM_SEARCH_ENGINE_ID,
//     googleAPIKey: process.env.GOOGLE_API_KEY,
//     searchMaxSuggestions: 10,
//     nav: [
//       {
//         text: "首页",
//         link: "/",
//         icon: ['fal', 'directions']
//       },
//       {
//         text: "使用手册",
//         link: "/user_guide/",
//         icon: ['fal', 'cog']
//       },
//       {
//         text: "接入指南",
//         link: "/dev_guide/",
//         icon: ['fal', 'cog'],
//       },
//       {
//         text: "API",
//         link: "/api/",
//         icon: ['fal', 'cog']
//       },
//       {
//         text: "SDK",
//         link: "/sdk/",
//         icon: ['fal', 'cog']
//       },
//       {
//         text: "部署指南",
//         link: "/deploy/",
//         icon: ['fal', 'cog']
//       }
//     ],
//     sidebar: {
//       "/user_guide/":getCompleteUserGuideSidebar(),
//       "/dev_guide/":getCompleteDevGuideSidebar(),
//       "/api/":getCompleteApiSidebar(),
//       "/sdk/":getCompleteSdkSidebar(),
//       "/deploy/":getCompleteDeploySidebar(),
//     }
//   },
//   markdown: {
//     anchor: { level: [2, 3] },
//     config(md) {
//       let markup = require('./markup')
//       md.use(markup)
//     }
//   },

//   /**
//    * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
//    */
//   plugins: ["@vuepress/plugin-back-to-top", "@vuepress/plugin-medium-zoom"]
// };

