<script>
import axios from 'axios';

export default {
    name: 'Project',
    props: {
        id: String,
    },
    data() {
        return {
            base_url: 'http://127.0.0.1:8000',
            project: null
        }
    },

    mounted() {


        const url = `${this.base_url}/api/project/${this.id}`
        console.log(url);


        axios
            .get(url)
            .then(response => {
                console.log(response.data.project);
                this.project = response.data.project;
            })
    }
}
</script>
<template>
    id preso da RouterLink:{{ id }}
    <br>
    {{ project }}
</template>