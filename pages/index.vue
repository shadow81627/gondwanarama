<template>
  <BlogHero
    :title="$config.APP_NAME"
    summary="Nellie Pease, artist &amp; palaeontologist from Brisbane, Australia. Big fan of marsupials, bugs, &amp; ancient supercontinents. I'm Gondwanarama on Etsy!"
  ></BlogHero>
</template>

<script>
export default {
  head() {
    return {
      title: this.$config.APP_NAME,
    }
  },
}
</script>
