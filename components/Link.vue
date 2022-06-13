<template>
  <a
    v-if="url.startsWith('http')"
    :href="url"
    itemscope
    itemtype="https://schema.org/SiteNavigationElement"
    :class="classes({ url, variant })"
    target="_blank"
    rel="noopener"
  >
    {{ name }}
  </a>
  <NuxtLink
    v-else
    :class="classes({ url, variant })"
    :to="url"
    itemscope
    itemtype="https://schema.org/SiteNavigationElement"
  >
    {{ name }}
  </NuxtLink>
</template>

<script>
export default {
  props: {
    url: { type: String, default: null },
    variant: { type: String, default: null },
    name: { type: String, default: null },
  },
  methods: {
    classes({ url, variant }) {
      const isActive = this.$route.path === url
      return {
        'border-transparent': !isActive,

        'btn-primary': variant === 'primary',
        'btn-secondary': variant === 'secondary',
        'btn-danger': variant === 'danger',
        'btn-light': variant === 'light',
        'btn-link': variant === 'link',
      }
    },
  },
}
</script>
