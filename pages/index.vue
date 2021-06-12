<template>
  <Hero :heading="$config.APP_NAME"></Hero>
</template>

<script>
export default {
  // layout: 'empty',
  head() {
    return {
      title: this.$config.APP_NAME,
    }
  },
}
</script>
