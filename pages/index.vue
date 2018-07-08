<template>
  <main class="container">
    <div class="posts-wrap">
      <section class="post" v-for="(post, index) in posts" :key="index">
        <router-link :to="`/post/${post.id}`">
          <h2 class="title">{{post.title}}</h2>
        </router-link>
        <p class="post-description">{{post.body}}</p>
        <div class="post-bottom">
          <div class="author">
            <span>Author: </span>
            <router-link :to="`/user/${post.author}/${post.userId}`">
              {{post.author}}
            </router-link>
          </div>
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
  name: 'App',
  async created () {
    await this.$store.dispatch('getPosts')
  },
  computed: mapState(['posts'])
}
</script>


