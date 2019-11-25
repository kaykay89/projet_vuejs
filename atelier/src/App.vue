
<template>
<div>
<div class="w3-top">
    <div class="w3-bar w3-theme w3-top w3-left-align w3-large">
    <a class="w3-bar-item w3-button w3-right w3-hide-large w3-hover-white w3-large w3-theme-l1" href="javascript:void(0)" onclick="w3_open()"><i class="fa fa-bars"></i></a>
      <router-link class="w3-bar-item w3-button w3-theme-l1" to="/">Home</router-link>
      <router-link class="w3-bar-item w3-button w3-hide-small w3-hover-white" to="/">Afficher Horaire</router-link>
      <router-link class="w3-bar-item w3-button w3-hide-small w3-hover-white" to="/">Gestion Horaire</router-link>
      <router-link class="w3-bar-item w3-button w3-hide-small w3-hover-white" to="/gestionEmployes">Gestion Employes</router-link>
      <router-link class="w3-bar-item w3-button w3-hide-small w3-hover-white" to="/zoneEmploye">Zone Employes</router-link>
      <span v-if="isLoggedIn">  <a class="w3-bar-item w3-button w3-hide-small w3-hover-white" @click="logout">Logout</a></span>
      <span v-else>  <router-link class="w3-bar-item w3-button w3-hide-small w3-hover-white" to="/login">Login</router-link></span>
    </div>
    </div>
      <b-container>
        <router-view/>
      </b-container>
    </div>
</template>

<style src="./assets/w3.css"></style>
<style src="./assets/w3-theme-black.css"></style>
