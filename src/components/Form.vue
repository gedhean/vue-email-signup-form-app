<template>
  <form @submit="onSubmit">
    <h2 class="title">Before you go</h2>
    <p class="subtitle">How about subscribe?</p>
    <div class="field is-grouped">
      <div class="control is-expanded has-icon-left">
        <input class="input" type="email" name="email" v-model="email">
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
      <div class="control">
        <button type="submit" class="button is-meduim is-link">Submit</button>
      </div>
    </div>
    <div class="field">
      <div class="control has-text-centered">
        <p class="help has-text-centered">Enter the competition?</p>
        <label class="radio">
          <input type="radio" name="enterCompetition" v-model="enterCompetition" value="yes" checked>
          Yes
        </label>
        <label class="radio">
          <input type="radio" name="enterCompetition" v-model="enterCompetition" value="no">
          No
        </label>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data () {
    return {
      email: null,
      enterCompetition: 'yes'
    }
  },
  methods: {
    onSubmit () {
      this.axios.post('/subscribe', {
        email: this.email,
        enterCompetition: this.enterCompetition === 'yes'
      })
      this.$emit('form-submitted')
    }
  }
}
</script>
