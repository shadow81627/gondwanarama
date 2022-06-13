<template>
  <section class="bg-portfolio">
    <div
      class="py-6 mx-auto px-4 lg:p-12 lg:px-32 grid grid-cols-1 md:grid-cols-2"
    >
      <div
        v-for="item of items"
        :key="item.name"
        class="flex flex-col justify-center items-center p-4 md:p-8"
      >
        <img
          :src="`/img/portfolio/${item._path.replace(/^.*[\\\/]/, '')}.png`"
          :alt="item.name"
        />
        <h3 class="text-primary font-brand text-2xl text-center py-2">
          {{ item.name }}
        </h3>
        <p>{{ item.description }}</p>
        <a :href="item.url" class="text-primary text-2xl text-center py-2"
          >BUY</a
        >
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: items } = await useAsyncData(`content-portfolio`, () => {
  return queryContent('/portfolio').sort({ pos: 1 }).find()
})
</script>
