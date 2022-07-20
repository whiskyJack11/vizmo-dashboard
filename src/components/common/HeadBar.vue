<template>
    <div class="headbar row g-0 py-3">
        <ViewTitle :title="title" />
    </div>
</template>
<script>
import ViewTitle from "./ViewTitle.vue"
export default {
    name: "head-bar",
    props: ['title'],
    components: {
        ViewTitle
    }
}
</script>
<style lang="scss" scoped>
.headbar {
    // height: 10%;
    background: white;
}
</style>