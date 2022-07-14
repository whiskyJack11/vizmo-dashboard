<template>
    <router-link :to="`/${linkName}`">
        <div class="link d-flex d-inline-block text-left">
            <span>{{linkName}}</span>
        </div>
    </router-link>
</template>
<script>
export default {
    name: "sidebar-link",
    props: ['linkName']
}
</script>
<style lang="scss" scoped>
.link {
    // border: 1px solid white;
    padding: 10px;
    text-align: left;
    color: white;

}
</style>