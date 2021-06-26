import Vue from 'vue';
import _ from 'lodash';
import axios from 'axios';

var logout = new Vue({
    el: '#logout',
    beforeCreate: function () {
        axios
            .post('http://127.0.0.1:5000/api/logout', { 'headers': { 'Authorization': "token " + localStorage.token } })
            .catch(function (error) {
                // this.token = "Erreur ! Impossible d'accéder à l'API." + error
            })
        window.location.href = '/'
    }
})