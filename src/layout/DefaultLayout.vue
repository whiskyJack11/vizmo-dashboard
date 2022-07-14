<template>
    <div class="default-layout">
        <div class="row">
            <div class="col-1"> <Sidebar/> </div>
            <div class="col-11">
                <div class="row view-title">
                    <div class="col-lg-6">{{viewTitle}}</div>
                </div> 
                <router-view>
                </router-view> 
            </div>
        </div>
    </div>        
</template>
<script>
import Sidebar from "../components/Sidebar/Sidebar.vue";
export default {
    name: "default-layout",
    components: {
        Sidebar
    },
    computed: {
        viewTitle() {
            return "Employees"
        }
    },
    mounted() {
        console.log(this.$router.params);
    }
}
</script>