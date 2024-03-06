<template>
  <nav
    class="relative w-full flex flex-wrap items-center justify-between text-lg bg-nav"
  >
    <div
      class="container-fluid w-full flex flex-wrap items-center justify-between px-6 h-109px"
    >
      <div class="container-fluid">
        <NuxtLink
          class="flex items-center text-black-900 hover:text-black-900 focus:text-black-900 mt-2 lg:mt-0 mr-1"
          to="/"
        >
          <span class="font-brand text-2xl">Nellie Pease</span>
        </NuxtLink>
      </div>

      <div>
        <div class="hidden lg:flex justify-between">
          <NuxtLink
            v-for="item of items"
            :key="item.name"
            :to="item.url"
            class="hover:text-gray-800 text-black-500 text-xl btn"
            :class="{
              'bg-gray-200': $route.path === item.url,
              'hover:bg-gray-500/10': $route.path !== item.url,
            }"
            itemscope
            itemtype="https://schema.org/SiteNavigationElement"
            :target="item.url.startsWith('http') ? '_blank' : undefined"
          >
            {{ item.name }}
          </NuxtLink>
        </div>

        <ClientOnly>
          <Teleport to="#sidenav">
            <NavigationDraw v-model:draw="draw" :items="items"></NavigationDraw>
          </Teleport>
        </ClientOnly>

        <button
          class="hover:bg-gray-500/10 rounded-full btn navbar-toggler lg:hidden text-black border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline"
          type="button"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          @click="draw = !draw"
        >
          <svg
            aria-hidden="true"
            focusable="false"
            data-prefix="fas"
            data-icon="bars"
            class="w-6"
            role="img"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path
              fill="currentColor"
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </nav>
</template>

<script setup>
const { data: items } = await useAsyncData('content-navigation', async () => {
  return await queryContent('navigation').sort({ pos: 1 }).find()
})
const draw = ref(false)
</script>
