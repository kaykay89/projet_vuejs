<template>
  <div class="w3-main" style="margin-left:250px">
    <div class="w3-row w3-padding-64">
      <div class="w3-twothird w3-container">
      <br/><br/>
        <h1 class="w3-text-teal">Rechercher des employés</h1>

        <button @click="toggleAfficherEmployes" class="btn btn-primary">Afficher tous les employés</button>
        <p v-if="afficherEmployes">Veuillez cliquer sur un employé pour le modifier</p>
        <b-table striped hover :items="employes" v-if="afficherEmployes"
          selectable
        >
        </b-table>

        <h1 class="w3-text-teal">Ajouter un employé</h1>
        <b-form @submit.prevent="ajouterEmploye">
          <b-form-group id="nomemploye" label="Nom:" label-for="nom">
            <b-form-input
              id="nomemploye"
              v-model="formDataAjouterEmploye.nomemploye"
              required
              pattern="[a-zA-Z]{4,20}"
              placeholder="Nom (entre 4 et 20 caractères)" />
          </b-form-group>

          <b-form-group id="prenomemploye" label="Prénom:" label-for="prenom">
            <b-form-input
              id="prenomemploye"
              v-model="formDataAjouterEmploye.prenomemploye"
              required
              pattern="[a-zA-Z]{4,20}"
              placeholder="Prenom (entre 4 et 20 caractères)" />
           </b-form-group>

          <b-form-group id="nbrquartsmax" label="Nombre de quarts de travail maximum par semaine:" label-for="quarts">
            <b-form-input
              id="nbrquartsmax"
               v-model="formDataAjouterEmploye.nbrquartsmax"
              required
              pattern='[0-9]{1,2}'
              placeholder="Un nombre entre 1 et 15" />
          </b-form-group>

          <b-form-group id="dateembauche" label="Date d'embauche:">
            <datepicker>

            </datepicker>
          </b-form-group>

          <b-form-group id="motdepasse" label="Veuillez créer un mot de passe:" label-for="motdepasse">
            <b-form-input
              id="motdepasse"
              v-model="formDataAjouterEmploye.motdepasse"
              required
              pattern='[a-zA-Z0-9]{1,6}'
              placeholder="alphanumérique (entre 1 et 6 caractères)" />
          </b-form-group>

          <b-form-group id="dispo" label="Veuillez cocher les disponibilités de l'employé:">
            <b-form-checkbox-group v-model="formDataAjouterDisponibilites.checked" id="dispo">
              Lundi:<br/>
                <b-form-checkbox value="J1">Jour</b-form-checkbox>
                <b-form-checkbox value="S1">Soir</b-form-checkbox>
                <b-form-checkbox value="N1">Nuit</b-form-checkbox>
              <br/>Mardi:<br/>
                <b-form-checkbox value="J2">Jour</b-form-checkbox>
                <b-form-checkbox value="S2">Soir</b-form-checkbox>
                <b-form-checkbox value="N2">Nuit</b-form-checkbox>
              <br/>Mercredi:<br/>
                <b-form-checkbox value="J3">Jour</b-form-checkbox>
                <b-form-checkbox value="S3">Soir</b-form-checkbox>
                 <b-form-checkbox value="32">Nuit</b-form-checkbox>
              <br/>Jeudi:<br/>
                <b-form-checkbox value="J4">Jour</b-form-checkbox>
                <b-form-checkbox value="S4">Soir</b-form-checkbox>
                <b-form-checkbox value="N4">Nuit</b-form-checkbox>
              <br/>Vendredi:<br/>
                <b-form-checkbox value="J5">Jour</b-form-checkbox>
                <b-form-checkbox value="S5">Soir</b-form-checkbox>
                <b-form-checkbox value="N5">Nuit</b-form-checkbox>
            </b-form-checkbox-group>
          </b-form-group>

          <b-button type="submit" variant="primary">Ajouter</b-button>
        </b-form>

        <h1 class="w3-text-teal">Congédier un employé</h1>
        <b-form @submit.prevent="congedierEmploye">
          <b-form-group id="congedierEmploye" label="Identifiant de l'employé à congédier:" label-for="congedier">
          <b-form-input
            id="identifiant"
            v-model="formDataCongediement.idemploye"
            required
            placeholder="Identifiant à 5 lettres" />
          </b-form-group>
          <b-button type="submit" variant="primary">Congédier</b-button>
        </b-form>

      </div>
    </div>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
export default {
  name: 'gestionEmployes',
  components: {
    Datepicker
  },
  data () {
    return {
      employes: [
        { idemploye: 'LKAYL', nom: 'LOUIS', prenom: 'KAYLA', nbrquartsmax: 5, dateembauche: '2019-12-12' },
        { idemploye: 'LMOUR', nom: 'LATOUI', prenom: 'MOURAD', nbrquartsmax: 5, dateembauche: '2008-01-23' }
      ],
      afficherEmployes: false,
      formDataCongediement: {
        idemploye: ''
      },
      formDataAjouterEmploye: {
        idemploye: '',
        nomemploye: '',
        prenomemploye: '',
        nbrquartsmax: null,
        dateembauche: null,
        motdepasse: ''
      },
      formDataAjouterDisponibilites: {
        checked: []
      }
    }
  },
  mounted: function () {
    fetch('Employe', { method: 'GET' })
      .then((response) => {
        return response.json()
      })
      .then((jsonData) => {
        this.employes = jsonData.results
      })
  },
  methods: {
    toggleAfficherEmployes () {
      this.afficherEmployes = !this.afficherEmployes
    },
    congedierEmploye () {
    },
    ajouterEmploye () {
      const ID = this.creerIdEmploye(this.formDataAjouterEmploye.nomemploye, this.formDataAjouterEmploye.prenomemploye)
      console.log(ID)
      this.forDataAjouterEmploye.idemploye = ID
    },
    creerIdEmploye (nom, prenom) {
      let nomUn = nom.charAt(0)
      let prenomQuatre = prenom.substring(0, 4)
      let ID = nomUn.concat(prenomQuatre)
      return ID
    }
  }
}
</script>

<style scoped>
.btn {
  background-color: grey;
  border: none;
  margin: 5px 0;
}
</style>
