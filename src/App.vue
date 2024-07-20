<script>
import axios from 'axios';

export default {
  name: 'app',

  data() {
    return {
      projects: '',
    }
  },

  mounted() {
    axios.get('http://127.0.0.1:8000/api/project').then(response => {
      console.log(response.data.projects);
      this.projects = response.data.projects;
    })
  }
}
</script>

<template>
  {{ projects }}
</template>

<style scoped></style>
