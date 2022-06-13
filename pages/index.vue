<template>
  <div>
    <Hero
      :height="960"
      heading="Gondwanarama"
      subheading="Nellie Pease, artist & palaeontologist from Brisbane, Australia. Big fan of marsupials, bugs, & ancient supercontinents."
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
      title: 'Gondwanarama',
    }
  },
}
</script>
