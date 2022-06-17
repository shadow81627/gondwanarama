<template>
  <div>
    <Title v-if="title" itemprop="name">{{ title }}</Title>
    <Hero :height="960" :heading="title"></Hero>
  </div>
</template>

<script>
export default {
  name: 'ContactPage',
  data() {
    return {
      title: 'Contact',
    }
  },
}
</script>
