<template>
  
  <q-layout id="id_shop">
    <div>
        <div class="text-h4 text-center text-weight-bolder q-py-sm q-my-md full-width"
             style="border-top:3px solid #ffffff;border-bottom: 3px solid #ffffff; color: #54595F;">Our Products
        </div>
        <div class="flex flex-center">
            <q-card
            v-for="product in products"
            :key="product.id"
            class="card-post col-12 col-lg-4 col-md-6 q-mb-md q-mx-lg q-mb-xl"
            bordered
            flat
            >

            <q-img
                :src="product.imageURL"
            />

            <q-card-section>
                <div class="text-h5 text-center text-pink q-py-md">{{ product.productName }}</div>
                <div class="text-h6 text-center text-pink">&#8369;{{ product.prize }}</div>
            </q-card-section>
            </q-card>
        </div>
    </div>
    
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          productName: 'Pork Floss Buns (per piece)', 
          imageURL: 'https://cdn.quasar.dev/img/parallax2.jpg',
          prize: '35.00'
        },
        {
          id: 2,
          productName: 'Pork Floss Buns (per piece)', 
          imageURL: 'https://cdn.quasar.dev/img/parallax2.jpg',
          prize: '35.00'
        },
        {
          id: 3,
          productName: 'Pork Floss Buns (per piece)', 
          imageURL: 'https://cdn.quasar.dev/img/parallax2.jpg',
          prize: '35.00'
        },
        {
          id: 4,
          productName: 'Pork Floss Buns (per piece)', 
          imageURL: 'https://cdn.quasar.dev/img/parallax2.jpg',
          prize: '35.00'
        },
        {
          id: 5,
          productName: 'Pork Floss Buns (per piece)', 
          imageURL: 'https://cdn.quasar.dev/img/parallax2.jpg',
          prize: '35.00'
        },
        {
          id: 6,
          productName: 'Pork Floss Buns (per piece)', 
          imageURL: 'https://cdn.quasar.dev/img/parallax2.jpg',
          prize: '35.00'
        }
      ]
    }
  },
}
</script>


<style lang="sass">
  .card-post
    .q-img
      min-height: 290px
</style>