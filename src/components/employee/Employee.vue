<template>
    
    <div class="employee-table ">
        <table class="table my-5 mx-2">
            <TableHeader :headings="headings" />
            <tbody>
                <tr v-for="employee, index in employees" :key="index">
                    <th><input type="checkbox" /></th>
                    <th >{{employee.id}}</th>
                    <th ><img class="avatar mx-2" :src="employee.avatar" /></th>
                    <th>{{employee.name}}</th>
                    <th >NA</th>
                    <th >NA</th>
                    <th >{{employee.email}}</th>
                    <th >NA</th>
                    <th >NA</th>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import TableHeader from '../common/TableHeader.vue'
import axios from 'axios'
export default {
  components: { TableHeader },
    name: "employee-view",
    data() {
        return {
            headings: ["", "ID", "", "NAME", "POSITION", "DEPARTMENT", "Email", "EXPERIENCE", "STATUS"],
            apiURL: "https://620dfdda20ac3a4eedcf5a52.mockapi.io/api/employee?p=1&l=10",
            employees: [] 
        }
    },
    async mounted() {
        const result = await axios.get(this.apiURL);
        this.employees = result.data;
        console.log(result);
    }
}
</script>
<style lang="scss" scoped>
.table {
    background: white;
    th {
        text-align: left;
        font-size: 0.8rem;
        font-weight: 400;
    }
}
.avatar {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
}
</style>