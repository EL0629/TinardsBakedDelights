<template>
  <q-layout id="id_shop">
    <template v-if="posts.length">
      <div class="text-h4 text-center text-weight-bolder q-py-sm q-my-md full-width"
            style="border-top:3px solid #ffffff;border-bottom: 3px solid #ffffff; color: #54595F;">Our Products
      </div>
      <div class="flex flex-center">
          <q-card
          v-for="post in posts"
          :key="post.id"
          class="card-post col-12 col-md-6 col-lg-4 col-xl-4  q-mb-md q-mx-lg q-mb-xl"
          bordered
          flat
          >

          <q-img
              :src="post.imageURL"
          />

          <q-card-section>
              <div class="text-h5 text-center text-pink q-py-md">{{ post.productName }}</div>
              <div class="text-h6 text-center text-pink">&#8369;{{ post.prize }}</div>
          </q-card-section>
          </q-card>
      </div>
    </template>

    <template v-else>
      <h5 class="text-center text-grey">No posted products yet.</h5>
    </template>
    
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      posts: []
    }
  },
  methods: {
    getPosts(){
      this.$axios.get('https://tinardsbakeddelights-backend.herokuapp.com/posts').then(response => {
        this.posts = response.data
      }).catch(err => {
        this.$q.dialog({
          title: 'Error',
          message: 'Could not find your products'
        })
      })
    }
  },
  created() {
    this.getPosts()
  }
}
</script>


<style lang="sass">
  .card-post
    .q-img
      min-height: 290px
      max-height: 290px
      max-width: 330px
      min-width: 330px
</style>