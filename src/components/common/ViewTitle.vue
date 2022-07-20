<template>
    <div class="view-title text-start px-5 col">
        {{title}}
    </div>
</template>
<script>
export default {
    name: "view-title",
    props: ['title']    
}
</script>
<style lang="scss" scoped>
.view-title {
    font-weight: 900;
    font-size: 1.5rem;
}
</style>