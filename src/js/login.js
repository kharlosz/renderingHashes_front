import Vue from 'vue';
import _ from 'lodash';
import axios from 'axios';

var login = new Vue({
  el: '#login',
  data: {
    suggestion: 'Générez vos propres hashs',
    presentation: 'Connectez-vous à votre session via ce formulaire',
    username: '',
    password: '',
    token: '',
  },
  methods: {
      login: function() {
        axios
        .post('http://127.0.0.1:5000/api/login', {
            username: this.username,
            password: this.password
          })
          .then(response => {this.token = response.data.token; console.log(this.token)})
          .catch(function (error) {
            // this.token = "Erreur ! Impossible d'accéder à l'API." + error
          })
         }
  }
})