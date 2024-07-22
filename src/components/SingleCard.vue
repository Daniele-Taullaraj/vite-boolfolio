<script>
export default {
    name: 'SingleCard',
    props: {
        project: Object
    },
    data() {
        return {
            base_url: 'http://127.0.0.1:8000',
        }
    },
    methods: {
        checkImg(img) {
            if (!img.startsWith('http')) {
                return this.base_url + '/storage/' + img;
            } else {
                return img;
            }
        }
    }
}
</script>

<template>

    <div class="d-flex justify-content-center">
        <div class="card m-3 w-25">
            <div class="card-header text-center">{{ project.name }}</div>
            <div class="d-flex justify-content-center">
                <img class="w-100" :src="checkImg(project.img)" alt="">
            </div>

            <div class="card-body text-center">
                <div>{{ project.description }}</div>
            </div>
            <RouterLink :to="{ name: 'project', params: { id: project.id } }" class="nav-link">
                {{ project.name }}
            </RouterLink>
        </div>
    </div>

</template>

<script scoped>
</script>