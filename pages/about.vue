<template>
  <div>
    <Title v-if="title" itemprop="name">{{ title }}</Title>
    <Hero :height="500" :heading="title"></Hero>
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
