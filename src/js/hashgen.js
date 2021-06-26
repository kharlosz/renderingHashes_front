import Vue from 'vue';
import _, { times } from 'lodash';
import axios from 'axios';

var hash = new Vue({
  el: '#hash-gen',
  data: {
    suggestion: 'Entrez un texte et choisissez un algorithme de hashage',
    message: 'Connectez-vous pour gérer votre profil.',
    txttohash: '',
    picked: '',
    hash: {},
    checked: 'non'
  },
  watch: {
    // à chaque fois que l'algorithme sélectionné change, cette fonction s'exécutera
    picked: function () {
      this.hash = { 'md5': '', 'sha1': '', 'sha256': '' }
      this.getHash()
    },
  },
  computed: {
    checkedstate: function () {
      if (this.picked !== '' || this.checked === 'oui') {
        this.hash = { 'md5': '', 'sha1': '', 'sha256': '' }
        document.getElementById('activecheckbox').style.display = (this.checked === 'oui') ? 'none' : 'contents'
        document.getElementById('inactivecheckbox').style.display = (this.checked === 'oui') ? 'contents' : 'none'
        if (this.checked === 'oui') {
          this.getAllHashs()
        } else {
          this.getHash()
        }
      }
      return this.checked
    }
  },
  methods: {
    getHash: function () {
      if (this.txttohash !== '') {
        axios
          .post('http://127.0.0.1:5000/api/hash', {
            algorithm: this.picked,
            string: this.txttohash
          })
          .then(response => (this.hash[this.picked] = response.data.hash))
          .catch(function (error) {
            this.hash[this.picked] = "Erreur ! Impossible d'accéder à l'API." + error
          })
      }
    },
    getAllHashs: function () {
      if (this.txttohash !== '') {
        axios
          .post('http://127.0.0.1:5000/api/hash', {
            algorithm: 'md5',
            string: this.txttohash
          })
          .then(response => (this.hash['md5'] = response.data.hash))
          .catch(function (error) {
            this.hash['md5'] = "Erreur ! Impossible d'accéder à l'API." + error
          })

        axios
          .post('http://127.0.0.1:5000/api/hash', {
            algorithm: 'sha1',
            string: this.txttohash
          })
          .then(response => (this.hash['sha1'] = response.data.hash))
          .catch(function (error) {
            this.hash['sha1'] = "Erreur ! Impossible d'accéder à l'API." + error
          })

        axios
          .post('http://127.0.0.1:5000/api/hash', {
            algorithm: 'sha256',
            string: this.txttohash
          })
          .then(response => (this.hash['sha256'] = response.data.hash))
          .catch(function (error) {
            this.hash['sha256'] = "Erreur ! Impossible d'accéder à l'API." + error
          })
      }
    }
  }
})