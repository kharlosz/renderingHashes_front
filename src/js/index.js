import Vue from 'vue';
import _ from 'lodash';
import axios from 'axios';

var app = new Vue({
  el: '#app',
  data: {
    suggestion: 'Générez vos propres hashs',
    presentation: 'Chaîne de caractères aléatoire :',
    presentation2: 'Hash associé (SHA256) :',
    message: 'Connectez-vous pour gérer votre profil.',
    hash: '',
  },
  mounted() {
    axios
      .get('http://127.0.0.1:5000/api/dummy-hash')
      .then(response => (this.hash = response.data));
  }
})

