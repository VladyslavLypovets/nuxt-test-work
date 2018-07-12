<template>
   <section class="post" >
    <nuxt-link :to="{path: `/post/${post.id}`}">
      <h2 class="title">{{post.title}}</h2>
    </nuxt-link>
    <p class="post-description">{{post.body}}</p>
    <div class="post-bottom">
      <div class="author">
        <span>Author: </span>
        <nuxt-link :to="{path: `/user/${post.userId}`}">
          {{post.author}}
        </nuxt-link>
      </div>
      <div class="comments-wrap">
        <span class="fa fa-comments"></span>
        {{commets.length}}
      </div>
    </div>
  </section>
</template>
<script>
import 'font-awesome/css/font-awesome.min.css'
export default {
  name: 'Post',
  props: ['post'],
  data: () => ({
    commets: []
  }),
  async created() {
    this.commets = await this.$axios.$get(`https://jsonplaceholder.typicode.com/posts/${this.post.id}/comments`)
  }
}
</script>

