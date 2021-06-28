import Vue from 'vue';
import _ from 'lodash';
import axios from 'axios';

var register = new Vue({
  el: '#register',
  data: {
    suggestion: 'Générez vos propres hashs',
    presentation: 'Créez un compte ici via ce formulaire',
    username: '',
    password: '',
    token: '',
  },
  methods: {
    register: function () {
      axios
        .post('http://127.0.0.1:5000/api/register', {
          username: this.username,
          password: this.password
        })
        .then(response => {
          localStorage.token = response.data.token
          window.location.href = '/profile'
        })
        .catch(function (error) {
          window.location.href = '/register'
        })
    }
  }
})

