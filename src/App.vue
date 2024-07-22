<script>
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'app',
  components: {
    AppHeader,
  },

}
</script>

<template>

  <AppHeader />
  <RouterView />

</template>
<style scoped></style>
