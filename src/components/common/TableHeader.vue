<template>
    <thead>
        <tr>
            <th class="heading" scope="col" v-for="heading, index in headings" :key="index">
                {{heading}}
            </th>
        </tr>
    </thead>
</template>
<script>
export default {
    name: 'table-header',
    props: ['headings']
}
</script>
<style lang="scss" scoped>
.heading {
    text-align: left;
}
</style>