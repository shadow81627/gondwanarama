<template>
  <v-app dark>
    <v-container class="nuxt-error pa-0 fill-height" fluid>
      <v-row no-gutters class="pa-0 align-self-center">
        <v-col class="pa-0" align="center">
          <div class="nuxt-error container">
            <component :is="errorPage" :error="error" />
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import error404 from '@/components/error/404.vue'
import error500 from '@/components/error/500.vue'

export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    errorPage() {
      if (this.error.statusCode === 404) {
        return error404
      }
      // catch everything else
      return error500
    },
  },
}
</script>
