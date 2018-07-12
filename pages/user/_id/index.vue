<template>
  <main class="container">
    <div class="author-wrap">
      <nuxt-link :to="{path: `/`}" class="main-page-link">
        На главную
      </nuxt-link>
      <h1>All posts by {{result.author}}</h1>
    </div>
    <div class="posts-wrap">
      <Post v-for="(post, index) in result.posts" :key="index" :post="post" />
    </div>
  </main>
</template>
<script>
import Post from '@/components/Post/Post'
import 'font-awesome/css/font-awesome.min.css'
export default {
  name: 'User',
  components: {
    Post
  },
  async asyncData({ app, params }) {
    let result = {
      posts: [],
      author: {}
    }
    result.posts = await app.$axios.$get(`https://jsonplaceholder.typicode.com/posts?userId=${params.id}`)
    let authors = await app.$axios.$get('https://jsonplaceholder.typicode.com/users/')
    result.author = authors.find(author => author.id == params.id).name
    result.posts.map(post => {
      post.author = result.author
    })
    return {result}
  }
}
</script>
