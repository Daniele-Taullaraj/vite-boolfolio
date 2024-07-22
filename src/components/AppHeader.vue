<script>

export default {
    name: 'appHeader',

    data() {
        return {
            projects: [],
            menu: [
                {
                    name: 'Home',
                    route: 'home'
                },
                {
                    name: 'About',
                    route: 'about'
                },
            ],
        }
    },
}
</script>

<template>
    <nav class="nav justify-content-center  ">
        <RouterLink :to="{ name: item.route }" class="nav-link" v-for="item in menu">
            {{ item.name }}
        </RouterLink>
    </nav>
</template>
<style scoped></style>
