<template>
    <div class="container">
        <div v-for="(item, index) of filteredNames" :key=index>
            <app-contact-item :datsItem="item" :idx="index" />
        </div>
    </div>
</template>

<script>
    import Contactitem from "@/components/Listcontactscomp/Contactitem";

    export default {
        name: "Listcontacts",
        props: ['srchTxt'],
        data: function() {
            return {
                datsCon: this.$store.state.phoneBookData
            }
        },
        computed: {
            filteredNames() {
                return this.datsCon.filter(name => {
                    return name.nameCon.toLowerCase().indexOf(this.srchTxt.toLowerCase()) !== -1;
                });
            }
        },
        components: {
           'appContactItem': Contactitem
        }
    }
</script>

<style scoped>

</style>
