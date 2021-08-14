<template>
  <v-footer class="hidden-print-only" height="auto">
    <v-container>
      <v-row no-gutters>
        <v-col cols="auto">
          <v-card flat color="transparent">
            <v-card-text>
              <a
                href="https://github.com/shadow81627/gondwanarama/blob/main/CHANGELOG.md"
                rel="noopener"
                target="_blank"
              >
                <span>Changelog</span>
              </a>
            </v-card-text>
          </v-card>
        </v-col>
        <v-spacer />
        <!-- <v-col cols="auto">
        </v-col> -->
      </v-row>
      <v-row no-gutters>
        <v-col cols="auto">
          <v-card flat tile color="transparent">
            <v-card-text class="py-2">
              <font-awesome-icon
                :icon="faMapMarker"
                title="location"
                fixed-width
              />
              <span>{{ location }}</span>
              <span
                >© <time datetime="2021">2021</time> | Site By
                <a href="https://daim.dev">Daim</a>
              </span>
            </v-card-text>
          </v-card>
        </v-col>
        <v-spacer />
        <v-col cols="auto">
          <v-card flat color="transparent">
            <v-card-actions class="social-icons flex-wrap">
              <v-tooltip
                v-for="{ icon, network, url } in profiles"
                :key="network"
                bottom
              >
                <template #activator="{ on, attrs }">
                  <v-btn
                    target="_blank"
                    v-bind="attrs"
                    icon
                    :href="url"
                    rel="noopener"
                    v-on="on"
                  >
                    <font-awesome-icon
                      :icon="icons[icon]"
                      :title="network"
                      fixed-width
                    />
                    <span class="d-sr-only-focusable">{{ network }}</span>
                  </v-btn>
                </template>
                <span>{{ network }}</span>
              </v-tooltip>

              <!-- add hidden content to set height to prevent page jank -->
              <v-btn style="visibility: hidden" aria-hidden="true" icon>
                <font-awesome-icon :icon="faMapMarker" fixed-width />
                &nbsp;
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
import {
  faTwitter,
  faInstagram,
  faEtsy,
} from '@fortawesome/free-brands-svg-icons'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons'
export default {
  data: () => ({
    utc: false,
    faMapMarker,
    location: 'Turrbal/Jagera country',
    icons: {
      faTwitter,
      faInstagram,
      faEtsy,
    },
    profiles: [
      {
        icon: 'faTwitter',
        network: 'Twitter',
        username: 'marsupialtapir',
        url: 'https://twitter.com/marsupialtapir',
      },
      {
        icon: 'faInstagram',
        network: 'Instagram',
        username: 'gondwanarama',
        url: 'https://www.instagram.com/gondwanarama/',
      },
      {
        icon: 'faEtsy',
        network: 'Etsy',
        username: 'Gondwanarama',
        url: 'https://www.etsy.com/au/shop/Gondwanarama',
      },
    ],
  }),
  methods: {
    shortHash: (value) => (value ? value.substring(0, 7) : null),
  },
}
</script>
