import Vue from 'vue';
import _ from 'lodash';
import axios from 'axios';

var login = new Vue({
    el: '#profile',
    data: {
        suggestion: 'Générez vos propres hashs',
        presentation: 'bienvenue sur votre espace',
        username: '',
    },
    beforeCreate: function () {
        if (!localStorage.token) {
            window.location.href = '/login'
        }
        axios
            .get('http://127.0.0.1:5000/api/me', { 'headers': { 'Authorization': "token " + localStorage.token } })
            .then(response => {
                if (response.status !== 200) {
                    window.location.href = '/login'
                } else {
                    this.username = response.data
                }
            })
            .catch(function (error) {
                window.location.href = '/login'
            })
    }
})