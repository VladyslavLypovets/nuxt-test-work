<template>
  <main class="container">
    <router-link to="/" class="main-page-link">
        На главную
    </router-link>
    <div class="single-post-wrap">
      <h2 class="title">{{activePost.title}}</h2>
      <p class="post-description">{{activePost.body}}</p>
    </div>
    <div class="post-bottom">
      <div class="author">
        <span>Author: </span>
        <router-link :to="`/user/${activePost.author}/${activePost.userId}`">
          {{activePost.author}}
        </router-link>
      </div>
    </div>
    <div class="comments-wrap">
      <h2 class="comments-title">
        Comments:
      </h2>
      <div class="comment" v-for="(comment, index) in activePost.comments" :key="index">
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
import { mapState } from 'vuex'
export default {
  name: 'Post',
  async created () {
    await this.$store.dispatch('getPost', this.$route.params.id)
  },
  computed: mapState(['activePost'])
}
</script>