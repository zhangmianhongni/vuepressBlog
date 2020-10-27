/**
 * Client app enhancement file.
 *
 * https://v1.vuepress.vuejs.org/guide/basic-config.html#app-level-enhancements
 */
import Vuex from 'vuex'
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  // ...apply enhancements for the site.
  Vue.use(Vuex)

  Object.assign(options, {
    data: {
      codeLanguage: null,
    },

    store: new Vuex.Store({
      state: {
        codeLanguage: null
      },
      mutations: {
        changeCodeLanguage(state, language) {
          state.codeLanguage = language;
          setStorage('codeLanguage', language);
        }
      }
    })
  })
}
