<template>
  <div>
    <Title v-if="title" itemprop="name">{{ title }}</Title>
    <Hero :height="500" :heading="title"></Hero>
    <PortfolioSection></PortfolioSection>
  </div>
</template>

<script>
export default {
  name: 'PortfolioPage',
  data() {
    return {
      title: 'Portfolio',
    }
  },
}
</script>
