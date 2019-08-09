<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5 mx-auto">
        <div class="login-form">
          <h3>{{ text.title }} </h3>
          <form action="">
            <div class="alert alert-warning alert-dismissible fade show" role="alert" v-show="message!=''">
            <strong>Error!</strong> {{ message }}
              <button type="button" class="close" data-dismiss="alertx" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="form-group">
              <label for="username">Username:</label>
              <input type="text" class="form-control" placeholder="Your Username *" v-model="data.username" :style="{'display': css.display}" @keyup="loginInput()">
            </div>
            <div class="form-group">
              <label for="password">Password:</label>
              <input type="password" class="form-control" placeholder="Your Password *" v-model="data.password" :class="{'display': css.display}" @keyup="loginInput()">
            </div>
            <div class="form-group">
              <input type="submit" class="btn btn-login" :value="text.button" @click.prevent="login">
            </div>
            <div class="form-group">
              <a href="#" class="forget-text" @click.prevent="forget(data.number)">{{ text.forget }} </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      data: {
        number: 0,
        username: '',
        password: ''
      },
      message: '',
      text: {
        title: 'Login Form',
        button: 'Login',
        forget: 'Forget Password?'
      },
      css: {
        background: '#0062cc',
        display: 'block'
      }
    }
  },
  methods: {
    login() {
      let url = 'http://10.0.0.188/login'
      let data = this.data

      this.$http.post(url, data).then( res => {
        this.$auth.setToken(res.data.access_token)
        console.log('Success')
      alert('Selamat datang '+this.data.username)
      this.$router.push('/admin')
      }).catch( err => {
        this.message = err.response.data.message
        console.log('error')
      })
    },
    loginInput() {
      this.message = ''
    },
    forget(i) {
      if(i == 0) {
        this.text.title = 'Reset Password'
        this.text.button = 'Reset'
        this.text.forget = 'Back Login',
        this.css.background = 'red'
        this.css.display = 'none'
        this.data.number = 1
      } else {
        this.text.title = 'Login Form'
        this.text.button = 'Login'
        this.text.forget = 'Forget Password?',
        this.css.background = 'blue'
        this.css.display = 'block'
        this.data.number = 0
      }
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
a {
  color: #42b983;
}
</style>
