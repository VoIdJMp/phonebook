import VueRouter from "vue-router";
import Listcontacts from "@/components/Listcontactscomp/Listcontacts";
import Addcontact from "@/components/Addcontactcomp/Addcontact";
import Editcontact from "@/components/Editcontactcomp/Editcontact";

export default new VueRouter({
    routes: [
        { path: '', component: Listcontacts },
        { path: '/addcontact', component: Addcontact },
        { path: '/editcontact/:id', component: Editcontact }
    ],
    mode: 'history'
})
