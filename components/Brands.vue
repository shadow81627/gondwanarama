<template>
  <section class="container py-6 mx-auto px-4 lg:p-12 lg:px-32">
    <h2 class="text-center text-2xl font-brand py-4">Artwork as seen in</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
      <img
        v-for="item of items"
        :src="`/img/brands/${item._path.replace(/^.*[\\\/]/, '')}.png`"
        :alt="item.name"
        class="m-auto"
      />
    </div>
  </section>
</template>

<script setup>
const { data: items } = await useAsyncData(`content-brands`, () => {
  return queryContent('/brands').sort({ pos: 1 }).find()
})
</script>
