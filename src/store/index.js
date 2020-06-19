import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        phoneBookData: [
            {
                nameCon: 'Person1',
                phones: ['+992933333333', '+992933333334', '+992933333335', '+992933333336'],
                address: ['г.Душанбе, р. Фирдавси'],
                mails: ['person1@gmail.com'],
            },
            {
                nameCon: 'Person2',
                phones: ['+992933333338', '+992933333334', '+992933333335', '+992933333336'],
                address: ['г.Душанбе, р. Фирдавси'],
                mails: ['person2@gmail.com'],
            },
            {
                nameCon: 'Person3',
                phones: ['+992933333335', '+992933333331', '+992933333335', '+992933333336'],
                address: ['г.Душанбе, р. Фирдавси'],
                mails: ['person3@gmail.com'],
            },
            {
                nameCon: 'People4',
                phones: ['+992931112233'],
                address: ['г.Душанбе, р. Фирдавси'],
                mails: ['person4@gmail.com'],
            },
            {
                nameCon: 'People5',
                phones: ['+992931112234'],
                address: ['г.Душанбе, р. Фирдавси'],
                mails: ['person5@gmail.com'],
            },
            {
                nameCon: 'People6',
                phones: ['+992931112235'],
                address: ['г.Душанбе, р. Фирдавси'],
                mails: ['person6@gmail.com'],
            },
        ]
    }
})
