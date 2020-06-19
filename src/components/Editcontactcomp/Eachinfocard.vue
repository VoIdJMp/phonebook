<template>
    <div>
        <div class="card">
            <div class="card-header">
                {{ infoContact.titleInfo }}
            </div>
            <div class="card-body">
                <div class="input-group mb-3">
                    <input type="text" class="form-control" aria-describedby="basic-addon1" v-model="inpVal">
                    <div class="input-group-append" v-if="idxEdit === -1">
                        <button class="btn btn-outline-secondary" type="button" id="button-addon4" v-on:click="addItem()">Добавить</button>
                    </div>
                    <div class="input-group-append" v-else>
                        <button class="btn btn-outline-secondary" type="button" id="button-addon5" v-on:click="saveItem()">Сохранить</button>
                    </div>
                </div>
                <ul class="list-group">
                    <li class="list-group-item" v-for="(contactIn, index) of infoContact.dataInfo" :key="index">
                        <span>{{ contactIn }}</span>
                        <button type="button" class="float-right text-right btn btn-danger btn-sm" v-on:click="deleteItem(index)">
                            <i class="fa fa-trash"/></button>
                        <button type="button" class="float-right btn btn-success btn-sm" v-on:click="editItem(index)">
                            <i class="fa fa-pencil"/></button>
                    </li>
                </ul>
            </div>
        </div>
        <br>
    </div>
</template>

<script>
    export default {
        name: "Eachinfocard",
        props: ['infoContact', 'typeL'],
        data: function() {
            return {
                inpVal: '', idxEdit: -1,
            }
        },
        methods: {
            deleteItem: function(idx) {
                this.infoContact.dataInfo.splice(idx, 1);
            },

            editItem: function(idx) {
                this.inpVal = this.infoContact.dataInfo[idx];
                this.idxEdit = idx;
            },

            saveItem: function() {
                this.infoContact.dataInfo[this.idxEdit] = this.inpVal;
                this.inpVal = '';
                this.idxEdit = -1;
            },

            addItem: function() {
                this.infoContact.dataInfo.push(this.inpVal);
                this.inpVal = '';
            }
        }
    }
</script>

<style scoped>

</style>
