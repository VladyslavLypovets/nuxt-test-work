<template>
  <main class="container">
    <div class="author-wrap">
      <router-link to="/" class="main-page-link">
        На главную
      </router-link>
      <h1>All posts by {{$route.params.name}}</h1>
    </div>
    <div class="posts-wrap">
      <section class="post" v-for="(post, index) in posts" :key="index">
        <router-link :to="`/post/${post.id}`">
          <h2 class="title">{{post.title}}</h2>
        </router-link>
        <p class="post-description">{{post.body}}</p>
        <div class="post-bottom">
          <div class="comments-wrap">
            <span class="fa fa-comments"></span>
            {{post.commentsCount}}
          </div>
        </div>
      </section>
    </div>
  </main>
</template>
<script>
import { mapState } from 'vuex'
import 'font-awesome/css/font-awesome.min.css'
export default {
  name: 'User',
  async created () {
    await this.$store.dispatch('getUserPosts', this.$route.params.id)
  },
  computed: mapState(['posts'])
}
</script>
