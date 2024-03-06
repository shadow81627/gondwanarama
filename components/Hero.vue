<template>
  <div
    class="relative overflow-hidden bg-no-repeat bg-cover"
    :style="`
    background-position: 50%;
    background-image: url(${src});
    height: ${height}px;
  `"
  >
    <div
      class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
    >
      <div class="flex justify-center items-center h-full">
        <div class="text-center text-black px-6 md:px-12">
          <h1
            class="text-3xl sm:text-4xl md:text-6xl xl:text-7xl mb-12"
            font-brand
          >
            <span v-if="heading">{{ heading }}</span>
            <br v-if="heading" />
            <span v-if="subheading" text-2xl>{{ subheading }}</span>
          </h1>
          <slot> </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    height: { type: Number, default: 500 },
    heading: { type: String, default: null },
    subheading: { type: String, default: null },
    alt: { type: String, default: '' },
    src: {
      type: String,
      default: '/img/banners/home.png',
    },
    gradient: {
      type: String,
      default: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))',
    },
  },
}
</script>
