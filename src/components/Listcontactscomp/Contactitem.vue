<template>
    <div class="card shadow-sm p-3 mb-5 bg-white rounded mt-3">
        <div class="card-body">
            <h4 class="card-title text-center">{{ datsItem.nameCon }}</h4>
            <br>
            <div class="row">
                <div class="col-4"><strong>Номера телефонов:</strong></div>
                <div class="col-8">
                    <span v-for="(numberItem, index) of datsItem.phones" :key="index">
                        {{ numberItem }}<span v-if="index !== datsItem.phones.length - 1">,</span>
                    </span>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-4"><strong>Адреса контакта:</strong></div>
                <div class="col-8">
                    <span v-for="(numberItem, index) of datsItem.address" :key="index">
                        {{ numberItem }}<span v-if="index !== datsItem.address.length - 1">,</span>
                    </span>
                </div>
            </div>
            <br>
            <div class="row">
                <div class="col-4"><strong>Почты контакта:</strong></div>
                <div class="col-8">
                     <span v-for="(numberItem, index) of datsItem.mails" :key="index">
                        {{ numberItem }}<span v-if="index !== datsItem.mails.length - 1">,</span>
                    </span>
                </div>
            </div>
            <hr>
            <router-link :to="'/editcontact/'+idx" class="btn btn-primary">Редактировать</router-link>
            <button class="btn btn-danger float-right" v-on:click="deleteItemCon(idx)">Удалить</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Contactitem",
        props: ["datsItem", "idx"],
        methods: {
            deleteItemCon: function(idx) {
                this.$store.state.phoneBookData.splice(idx, 1);
            }
        }
    }
</script>

<style scoped>

</style>
