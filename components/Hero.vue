<template>
  <v-container class="pa-0 hidden-print-only" fluid v-on="$listeners">
    <v-row no-gutters align="center" justify="center">
      <v-col cols="12" align-self="center">
        <v-card :color="color" flat tile dark>
          <v-img
            :lazy-src="placeholder"
            :src="_src"
            :srcset="srcset"
            :alt="alt"
            max-height="80vh"
            :sizes="size"
            :width="width"
            :height="height"
            :gradient="gradient"
            :contain="contain"
            color="grey"
          >
            <slot>
              <v-container
                class="fill-height align-items-end justify-start"
                fluid
              >
                <v-row align="center" justify="center">
                  <v-col class="text-center" cols="12">
                    <h1 v-if="heading" class="mb-4 text-shadow">
                      {{ heading }}
                    </h1>
                    <h2 v-if="subheading" class="subheading text-shadow">
                      {{ subheading }}
                    </h2>
                  </v-col>
                </v-row>
              </v-container>
            </slot>
          </v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    heading: { type: String, default: null },
    subheading: { type: String, default: null },
    alt: { type: String, default: '' },
    contain: { type: Boolean, default: undefined },
    gradient: {
      type: String,
      default: 'rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)',
    },
    width: { type: [Number, String], default: 1280 },
    height: { type: [Number, String], default: 630 },
    color: {
      type: String,
      default: null,
    },
    src: {
      type: String,
      default: '/cover.jpg',
    },
  },
  head() {
    return {
      meta: [
        {
          hid: 'og:image',
          property: 'og:image',
          content: this.href,
        },
        {
          hid: 'og:image:width',
          property: 'og:image:width',
          content: 1280,
        },
        {
          hid: 'og:image:height',
          property: 'og:image:height',
          content: 630,
        },
      ],
      link: [
        {
          rel: 'preload',
          as: 'image',
          href: this.href,
          imagesrcset: this.srcset,
          imagesizes: this.size,
        },
      ],
    }
  },
  computed: {
    img() {
      const { height } = this
      return this.$img.getSizes(this.src, {
        sizes: 'xs:100vw sm:100vw md:100vw lg:100vw xl:100vw',
        modifiers: {
          format: 'webp',
          quality: 70,
          height,
        },
      })
    },
    href() {
      return `${this.$config.BASE_URL}${this._src}`
    },
    _src() {
      return img().src
    },
    size() {
      return img().size
    },
    placeholder() {
      return $img(src, { format: 'jpg', width: 10, quality: 70 })
    },
  },
}
</script>
