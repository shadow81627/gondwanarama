<template>
  <div>
    <Title v-if="title" itemprop="name">{{ title }}</Title>
    <Hero
      :height="960"
      :heading="title"
      subheading="Artist and Scientific Illustrator"
    ></Hero>
    <AboutSection></AboutSection>
    <PortfolioSection></PortfolioSection>
    <Brands></Brands>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      title: 'Nellie Pease',
    }
  },
}
</script>
