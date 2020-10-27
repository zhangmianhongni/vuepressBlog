module.exports = {
    title: "御剑飞星",
    dest: './dist',
    themeConfig: {
      lastUpdated: "上次更新",
      googleCustomSearchEngineID: process.env.GOOGLE_CUSTOM_SEARCH_ENGINE_ID,
      googleAPIKey: process.env.GOOGLE_API_KEY,
      searchMaxSuggestions: 10,
      nav: [
        {
          text: "首页",
          link: "/",
          icon: ['fal', 'directions']
        },
        {
          text: "使用手册",
          link: "/user_guide/",
          icon: ['fal', 'cog']
        },
        {
          text: "接入指南",
          link: "/dev_guide/",
          icon: ['fal', 'cog'],
        },
        {
          text: "API",
          link: "/api/",
          icon: ['fal', 'cog']
        },
        {
          text: "SDK",
          link: "/sdk/",
          icon: ['fal', 'cog']
        },
        {
          text: "部署指南",
          link: "/deploy/",
          icon: ['fal', 'cog']
        }
      ],
      sidebar: {
        "/user_guide/":getCompleteUserGuideSidebar(),
        "/dev_guide/":getCompleteDevGuideSidebar(),
        "/api/":getCompleteApiSidebar(),
        "/sdk/":getCompleteSdkSidebar(),
        "/deploy/":getCompleteDeploySidebar(),
      }
    }
};

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


function getCompleteUserGuideSidebar(){
  return [
    {
      // title: "使用手册",
      collapsable: false,
      children: [
        ""
      ]
    }
  ]
}

function getCompleteDevGuideSidebar(){
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

function getCompleteApiSidebar(){
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

function getCompleteSdkSidebar(){
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


function getCompleteDeploySidebar(){
  return [
    '',
    'virtual',
    'docker'
  ]
}