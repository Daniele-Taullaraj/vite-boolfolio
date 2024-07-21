<script>
export default {
    name: 'SigleCard',
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
        <div class="card m-3 w-50">
            <div class="card-header text-center">{{ project.name }}</div>
            <div class="d-flex justify-content-center">
                <img class="w-100" :src="checkImg(project.img)" alt="">
            </div>

            <div class="card-body text-center">
                <div>{{ project.description }}</div>
            </div>
            <div>
                {{ project.type_id }}
            </div>
        </div>
    </div>

</template>

<script scoped>
</script>