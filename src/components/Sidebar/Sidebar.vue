<template>
    <aside class="sidebar col-1">
        <div class="mt-2"><img src="../../assets/logo.png" /></div>
        <div v-for="link, index in links" :key="index">
            <SidebarLink :linkName="link" />
        </div>
    </aside>
</template>
<script>
import SidebarLink from './SidebarLink.vue'
export default {
    name: "nav-sidebar",
  components: { SidebarLink },
    data() {
        return {
            links: ["home", "employee", "contact", "about"]
        }
    }
}
</script>
<style lang="scss" scoped>
.sidebar {
    height: 100vh;
    // width: 10%;
    background: rgb(26, 30, 65) !important;
    padding: 1%;

    img {
        width: 50px;
        height: 50px;
    }
}
</style>