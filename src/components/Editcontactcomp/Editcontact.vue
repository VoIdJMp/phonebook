<template>
    <div class="container mt-3">
        <div class="input-group mb-3">
            <input type="text" class="form-control" v-model="objContact.nameContact" aria-describedby="basic-addon1">
        </div>
        <app-info-card :infoContact="objContact.phonesContact" :typeL="typeX" />
        <app-info-card :infoContact="objContact.addressContact" :typeL="typeY" />
        <app-info-card :infoContact="objContact.emailContact" :typeL="typeZ" />
        <button type="button" class="btn btn-success" v-on:click="saveItemData()">Сохранить</button>
    </div>
</template>

<script>
    import Eachinfocard from "@/components/Editcontactcomp/Eachinfocard";

    export default {
        name: "Editcontact",
        data: function() {
            return {
                typeX: [],
                typeY: [],
                typeZ: [],
                objDataInfo: {},
                objContact: {
                    nameContact:  this.objDataInfo.nameCon,
                    phonesContact: { titleInfo: 'Номера телефонов',  dataInfo: [].concat(this.objDataInfo.phones) },
                    addressContact: { titleInfo: 'Адреса контактов',  dataInfo: [].concat(this.objDataInfo.address) },
                    emailContact: { titleInfo: 'Почты контактов',  dataInfo: [].concat(this.objDataInfo.mails) }
                }
            }
        },
        methods: {
            saveItemData: function() {
                this.$store.state.phoneBookData[this.$router.currentRoute.params['id']] = {
                    nameCon: this.objContact.nameContact,
                    phones: this.objContact.phonesContact.dataInfo,
                    address: this.objContact.addressContact.dataInfo,
                    mails: this.objContact.emailContact.dataInfo
                };
                this.$router.push('/');
            }
        },
        components: {
           'appInfoCard': Eachinfocard
        },
        beforeCreate: function () {
            this.objDataInfo = this.$store.state.phoneBookData[this.$router.currentRoute.params['id']];
        }
    }
</script>

<style scoped>

</style>
