<template>
  <main class="container">
    <div class="posts-wrap">
      <Post v-for="(post, index) in posts" :key="index" :post="post" />
    </div>
  </main>
</template>
<script>
import Post from '@/components/Post/Post'
export default {
  name: 'App',
  components: {
    Post
  },
  async asyncData({ app }) {
    let posts = await app.$axios.$get('https://jsonplaceholder.typicode.com/posts/')
    let authors = await app.$axios.$get('https://jsonplaceholder.typicode.com/users/')
    posts.map(post => {
      post.author = authors.find(author => author.id == post.userId).name
    })
    return { posts }
  }
}
</script>


