<template>
  <Hero :heading="env.APP_NAME"></Hero>
</template>

<script>
export default {
  // layout: 'empty',
  head() {
    return {
      title: env.APP_NAME,
    }
  },
}
</script>
