<script>
import SingleCard from '../components/SingleCard.vue'
import axios from 'axios';

export default {
    name: 'AppHome',
    components: {
        SingleCard,
    },

    data() {
        return {
            projects: [],
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

    <h1>VISTA TUTTI I PROGETTI:</h1>
    <div v-for="project in projects" :key="project.id">
        <SingleCard :project="project" />
    </div>

</template>
<style scoped></style>
