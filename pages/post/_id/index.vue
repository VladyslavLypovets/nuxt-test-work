<template>
  <main class="container">
    <nuxt-link :to="{path: `/`}" class="main-page-link">
        На главную
    </nuxt-link>
    <div class="single-post-wrap">
      <h2 class="title">{{post.title}}</h2>
      <p class="post-description">{{post.body}}</p>
    </div>
    <div class="post-bottom">
      <div class="author">
        <span>Author: </span>
        <nuxt-link :to="{path: `/user/${post.userId}`}">
          {{post.author}}
        </nuxt-link>
      </div>
    </div>
    <div class="comments-wrap">
      <h2 class="comments-title">
        Comments:
      </h2>
      <div class="comment" v-for="(comment, index) in post.comments" :key="index">
        <div class="comment-author">
          {{comment.email}}
        </div>
        <div class="comment-body">
          {{comment.body}}
        </div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  name: 'Post',
  async asyncData({ app, params }) {
    let post = await app.$axios.$get(`https://jsonplaceholder.typicode.com/posts/${params.id}/`)
    let authors = await app.$axios.$get('https://jsonplaceholder.typicode.com/users/')
    post.author = authors.find(author => author.id === post.userId).name
    post.comments = await app.$axios.$get(`https://jsonplaceholder.typicode.com/posts/${params.id}/comments/`)
    post.commentsCount = post.comments.length
    return { post }
  }
}
</script>