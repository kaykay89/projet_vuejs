<template>
 <div class="w3-main" style="margin-left:250px">
    <div class="w3-row w3-padding-64">
    <div class="w3-twothird w3-container">
      <h1 class="w3-text-teal">Sign in</h1>
      <form class="login" @submit.prevent="login">
      <label>Email</label>
      <input required v-model="email" type="email" placeholder="Name"/>
      <label>Password</label>
      <input required v-model="password" type="password" placeholder="Password"/>
      <hr/>
      <button type="submit">Login</button>
      </form>
</div>
</div>
</div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login: function () {
      let email = this.email
      let password = this.password
      this.$store
        .dispatch('login', { email, password })
        .then(() => this.$router.push('/'))
        .catch(function (error) {
          /* eslint no-console: ["error", { allow: ["warn", "error"] }] */
          console.error(error.response)
        })
    }
  }
}
</script>
