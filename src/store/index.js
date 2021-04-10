import Vue from 'vue'
import Vuex from 'vuex'

import bookModule from './modules/book.module'
Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    msg: {
      msgTxt: '',
      msgLnk: ''
    }
  },
  getters: {
    userMsgTxt(state) {
      return state.msg.msgTxt
    },
    userMsgLnk(state) {
      return state.msg.msgLnk
    }
  },
  mutations: {
    setMsg(state, payload) {
      state.msg.msgTxt = payload.msgTxt
      state.msg.msgLnk = payload.msgLnk
    }
  },
  actions: {
    setMsg({ commit }, payload) {
      commit({ type: 'setMsg', msgTxt: payload.msgTxt, msgLnk: payload.msgLnk })
      setTimeout(() => {
        commit({ type: 'setMsg', msgTxt: '', msgLnk: '' })
      }, 3000)
    }
  },
  modules: {
    bookModule
  },
})
