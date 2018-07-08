import Vue from 'vue'
import Vuex from 'vuex'
import {getPosts, getUsers, getComments, getUserPosts, getPost} from '@/assets/services'

Vue.use(Vuex)

const store = () =>new Vuex.Store({
  state: {
    posts: [],
    activePost: {}
  },
  actions: {
    async getPost ({ commit }, id) {
      let post = await getPost(id)
      let authors = await getUsers()
      post.author = authors.find(author => author.id === post.userId).username
      post.comments = await getComments(post.id)
      post.commentsCount = post.comments.length
      commit('setActivePost', post)
    },
    async getPosts ({ commit }) {
      commit('clearPost')
      let posts = await getPosts()
      let authors = await getUsers()
      posts.map(async post => {
        post.author = authors.find(author => author.id === post.userId).username
        post.comments = await getComments(post.id)
        post.commentsCount = post.comments.length
        commit('set', post)
      })
    },
    async getUserPosts ({ commit }, id) {
      commit('clearPost')
      let posts = await getUserPosts(id)
      posts.map(async post => {
        post.comments = await getComments(post.id)
        post.commentsCount = post.comments.length
        commit('set', post)
      })
    }
  },
  mutations: {
    set (state, post ) {
      state.posts.push(post)
    },
    setActivePost (state, post ) {
      state.activePost = post
    },
    clearPost (state){
      state.posts = []
    }
  }
})

export default store