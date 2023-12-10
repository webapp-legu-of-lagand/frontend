<script setup>
import HelloWorld from './HelloWorld.vue'
import TheWelcome from './TheWelcome.vue'
</script>

<template>
  <div class="main-container">
    <header>
      <img alt="GungaGinga" class="logo" src="@/components/icons/GungaGinga.png" width="250" height="125" />

      <div class="wrapper">
        <HelloWorld msg="Welcome to GungaGinga!" />
      </div>
    </header>
    <main>
      <TheWelcome />
    </main>
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
}

body {
  background-color: black;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  main {
    display: flex;
    place-items: center;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .main-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }
}
</style>
