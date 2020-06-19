<template>
    <div class="container mt-3">
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Имя" aria-describedby="basic-addon1" v-model="newDataContact.nameCon">
        </div>
        <br>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Телефон" aria-describedby="basic-addon1" v-model="newPhone">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" id="button-addon2" v-on:click="AddPhone()">Добавить</button>
            </div>
        </div>
        <ul class="list-group">
            <li class="list-group-item" v-for="(item, index) of newDataContact.phones" :key="index">
                <span>{{ item }}</span>
            </li>
        </ul>
        <br>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Адрес" aria-describedby="basic-addon1" v-model="newAddress">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" id="button-addon3" v-on:click="AddAddress()">Добавить</button>
            </div>
        </div>
        <ul class="list-group">
            <li class="list-group-item" v-for="(item, index) of newDataContact.address" :key="index">
                <span>{{ item }}</span>
            </li>
        </ul>
        <br>
        <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Почта" aria-describedby="basic-addon1" v-model="newMail">
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" id="button-addon4" v-on:click="AddMail()">Добавить</button>
            </div>
        </div>
        <ul class="list-group">
            <li class="list-group-item" v-for="(item, index) of newDataContact.mails" :key="index">
                <span>{{ item }}</span>
            </li>
        </ul>
        <br>
        <button type="button" class="btn btn-success" v-on:click="saveData()">Добавить контакт</button>
        <button type="button" class="btn btn-danger float-right" v-on:click="backToMain()">Назад</button>
        <br>
        <br>
        <div class="alert alert-danger" role="alert" v-if="errorMsg !== ''">
            {{ errorMsg }}
        </div>
    </div>
</template>

<script>
    export default {
        name: "Addcontact",
        data: function() {
            return {
                errorMsg: '',
                newPhone: '',
                newAddress: '',
                newMail: '',
                newDataContact: {
                    nameCon: '',
                    phones: [],
                    address: [],
                    mails: [],
                }
            }
        },
        methods: {
            AddPhone: function() {
                this.newDataContact.phones.push(this.newPhone);
                this.newPhone = '';
            },

            AddAddress: function() {
                this.newDataContact.address.push(this.newAddress);
                this.newAddress = '';
            },

            AddMail: function() {
                this.newDataContact.mails.push(this.newMail);
                this.newMail = '';
            },

            saveData: function() {
                if(this.newDataContact.nameCon === '') {
                    this.errorMsg = 'Введите имя контакта';
                } else {
                    this.$store.state.phoneBookData.push(this.newDataContact);
                    this.$router.push('/');
                }
            },

            backToMain: function () {
                this.$router.push('/');
            }
        }
    }
</script>

<style scoped>

</style>
