<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
                <router-link class="navbar-brand" to="/"><strong>Телефонная книга</strong></router-link>
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <router-link class="nav-link" to="/addcontact">Добавить контакт</router-link>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <input class="form-control mr-sm-2" type="search" placeholder="Поиск" aria-label="Поиск" v-model="srgText">
                </form>
            </div>
        </nav>
        <router-view :srchTxt="srgText" />
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                srgText: ''
            }
        }
    }
</script>

