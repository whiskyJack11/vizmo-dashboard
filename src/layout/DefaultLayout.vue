<template>
    <div class="default-layout">
        <div class="row">
            <Sidebar/>
            <main class="col-11 px-2">
                <HeadBar :title="viewTitle"/> 
                <router-view/>
            </main>
        </div>
    </div>        
</template>
<script>
import Sidebar from "../components/Sidebar/Sidebar.vue";
import HeadBar from "../components/common/HeadBar.vue";
export default {
    name: "default-layout",
    components: {
        Sidebar,
        HeadBar
    },
    computed: {
        viewTitle() {
            return this.$route.name;
        }
    },
    // mounted() {
    //     console.log(this.$route.name);
    // }
}
</script>