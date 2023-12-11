<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <div class="container">
    <div class="to-browse">
      <WelcomeItem>
        <template #icon>
          <DocumentationIcon />
        </template>
        <template #heading>Catalogue</template>

        Start browsing our catalogue by clicking

        <router-link to="/browse">here</router-link>
      </WelcomeItem>
    </div>

    <div class="to-phone">
      <WelcomeItem>
        <template #icon>
          <CommunityIcon />
        </template>
        <template #heading>Smartphones</template>

        Click
        <router-link to="/phones">here</router-link>
        To see the list of smartphones
      </WelcomeItem>
    </div>
  </div>
</template>

<style scoped>

.to-browse {
  display: flex;
}

.to-phone {
  display: flex;
}
</style>