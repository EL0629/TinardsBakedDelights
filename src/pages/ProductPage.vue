<template>
  <q-page class="constrain-more q-pa-md" style="font-family: CenturyGothic">
    <div class="camera-frame q-pa-md">
      <canvas
        v-show="imageCaptured"
        ref="canvas"
        class="full-width"
        height="240"
      />
    </div>
    <div class="text-center q-pa-md">
     <q-file
        v-model="imageUpload"
        @input="captureImageFallback"
        label="Choose an image"
        accept="image/*"
        outlined
      >
        <template v-slot:prepend>
          <q-icon name="eva-attach-outline" />
        </template>
      </q-file>

      <div class="row justify-center q-ma-md">
        <q-input
          v-model="post.productName"
          placeholder="Product Name"
          class="col col-sm-6"
          dense
        />
      </div>
      <div class="row justify-center q-ma-md">
        <q-input
          v-model="post.prize"
          class="col col-sm-6"
          label="Price"
          mask="#.##"
          fill-mask="0"
          reverse-fill-mask
          input-class="text-right"
          dense
        >
        </q-input>
      </div>
      <div class="row justify-center q-mt-lg">
        <q-btn
          @click="addPost"
          :disable="!post.productName || !post.photo" 
          class="q-pa-xs text-subtitle1 text-app"
          color="primary"
          label="Post Product"
          rounded
          unelevated
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { uid } from 'quasar'
require('md-gum-polyfill')

export default {
  name: 'PageCamera',
  data() {
    return {
      post: {
        id: uid(),
        productName: '',
        prize: '',
        photo: null,
        date: Date.now()
      },
      imageCaptured: false,
      imageUpload: [],
      hasCameraSupport: true
    }
  },
  methods: {
    captureImageFallback(file) {
      this.post.photo = file

      let canvas = this.$refs.canvas
      let context = canvas.getContext('2d')

      var reader = new FileReader()
      reader.onload = event => {
          var img = new Image()
          img.onload = () => {
              canvas.width = img.width
              canvas.height = img.height
              context.drawImage(img,0,0)
              this.imageCaptured = true
          }
          img.src = event.target.result
      }
      reader.readAsDataURL(file)    
    },
    addPost() {
      this.$q.loading.show()
      let formData = new FormData()
      formData.append('id', this.post.id)
      formData.append('productName', this.post.productName)
      formData.append('prize', this.post.prize)
      formData.append('date', this.post.date)
      formData.append('file', this.post.photo, this.post.id + '.png')

      this.$axios.post(`${ process.env.API }/createPost`, formData).then(response => {
        console.log('reponse: ', response)
        this.$router.push('/')
        this.$q.notify({
          message: 'Post created!',
          actions: [
            { label: 'Dismiss', color: 'white' }
          ]
        })
        this.$q.loading.hide()
      }).catch(err => {
        this.$q.dialog({
          title: 'Error',
          message: 'Sorry, could not create post product!'
        })
        this.$q.loading.hide()
      })
    }
  }
}
</script>

<style lang="sass">
  .camera-frame
    border: 2px solid $grey-10
    border-radius: 10px
</style>
