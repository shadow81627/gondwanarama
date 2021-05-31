<template>
  <v-app clipped-left>
    <!-- <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
      class="hidden-print-only"
      disable-resize-watcher
    >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.text"
          :to="localePath(item.route ? item.route : {})"
          nuxt
          class="text-decoration-none"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      fixed
      class="hidden-print-only"
      height="64"
    >
      <!-- <v-app-bar-nav-icon aria-label="menu" @click.stop="drawer = !drawer" /> -->
      <v-toolbar-title
        class="ml-0 px-3 d-flex align-center"
        @mouseover="titleHover = true"
        @mouseleave="titleHover = false"
      >
        <img
          :src="
            titleHover
              ? require('~/assets/img/logo-simple.svg?inline')
              : require('~/assets/img/logo.svg?inline')
          "
          class="navbar-brand"
          height="18"
          width="160"
          alt="gondwanarama"
          title="gondwanarama"
        />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <template v-if="items && items.length" #extension>
        <v-tabs class="hidden-sm-and-down px-3" optional right align-with-title>
          <v-tabs-slider></v-tabs-slider>
          <v-tab
            v-for="{ text, route } in items"
            :key="route"
            :to="localePath(route ? route : {})"
            text
          >
            {{ text }}
          </v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-main role="main">
      <nuxt style="min-height: 100vh" keep-alive></nuxt>
      <TheFooter></TheFooter>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({ items: [], titleHover: null }),
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    const { href: canonical } = i18nHead.link.find(
      ({ hid }) => hid === 'i18n-can'
    )
    return {
      htmlAttrs: {
        ...i18nHead.htmlAttrs,
      },
      meta: [
        ...i18nHead.meta,
        {
          hid: 'og:url',
          name: 'og:url',
          property: 'og:url',
          content: canonical,
        },
      ],
      link: [...i18nHead.link],
    }
  },
}
</script>
