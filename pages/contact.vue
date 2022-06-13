<template>
  <div>
    <Title v-if="title" itemprop="name">{{ title }}</Title>
    <Hero
      :height="960"
      :heading="title"
      subheading="Nellie Pease, artist & palaeontologist from Brisbane, Australia. Big fan of marsupials, bugs, & ancient supercontinents."
    ></Hero>
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
