<template>
  <Html lang="en-AU" itemscope itemtype="https://schema.org/WebPage">
    <div class="min-h-screen flex flex-col justify-between body">
      <Navigation />
      <main
        class="mb-auto"
        itemprop="mainContentOfPage"
        itemtype="https://schema.org/WebPageElement"
      >
        <NuxtPage />
      </main>
      <Footer></Footer>
      <div id="sidenav"></div>
    </div>
  </Html>
</template>
