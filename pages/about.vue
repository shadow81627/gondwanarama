<template>
  <div>
    <Title v-if="title" itemprop="name">{{ title }}</Title>
    <Hero
      :height="960"
      heading="Gondwanarama"
      subheading="Nellie Pease, artist & palaeontologist from Brisbane, Australia. Big fan of marsupials, bugs, & ancient supercontinents."
    ></Hero>
    <AboutSection></AboutSection>
  </div>
</template>

<script>
export default {
  name: 'AboutPage',
  data() {
    return {
      title: 'About',
    }
  },
}
</script>
